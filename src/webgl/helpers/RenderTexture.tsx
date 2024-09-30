/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable react/display-name */
import * as THREE from 'three';
import * as React from 'react';
import { createPortal, useFrame, useThree } from '@react-three/fiber';
import { useFBO } from '@react-three/drei';

type Props = JSX.IntrinsicElements['texture'] & {
  /** Optional width of the texture, defaults to viewport bounds */
  width?: number
  /** Optional height of the texture, defaults to viewport bounds */
  height?: number
  /** Optional fbo samples */
  samples?: number
  /** Optional stencil buffer, defaults to false */
  stencilBuffer?: boolean
  /** Optional depth buffer, defaults to true */
  depthBuffer?: boolean
  /** Optional generate mipmaps, defaults to false */
  generateMipmaps?: boolean
  /** Optional render priority, defaults to 0 */
  renderPriority?: number
  /** Optional event priority, defaults to 0 */
  eventPriority?: number

  maskAttach?: string
  /** Optional frame count, defaults to Infinity. If you set it to 1, it would only render a single frame, etc */
  frames?: number
  /** Optional event compute, defaults to undefined */
  compute?: (event: any, state: any, previous: any) => false | undefined
  /** Children will be rendered into a portal */
  children: React.ReactNode
};

export interface RenderTextureAPI extends ContainerAPI {
}

export const RenderTexture = React.forwardRef<RenderTextureAPI, Props>(
  (
    {
      children,
      compute,
      width,
      height,
      maskAttach = 'mask',
      samples = 8,
      renderPriority = 0,
      eventPriority = 0,
      frames = Infinity,
      stencilBuffer = false,
      depthBuffer = true,
      generateMipmaps = false,
      ...props
    }: Props,
    forwardRef,
  ) => {
    const { size, viewport } = useThree();
    const fbo = useFBO((width || size.width) * viewport.dpr, (height || size.height) * viewport.dpr, {
      samples,
      stencilBuffer,
      depthBuffer,
      generateMipmaps,
    });
    const maskFbo = useFBO((width || size.width) * viewport.dpr, (height || size.height) * viewport.dpr, {
      samples,
      stencilBuffer,
      depthBuffer,
      generateMipmaps,
    });
    const [vScene] = React.useState(() => new THREE.Scene());

    // @ts-ignore
    window.GLOBAL_CACHE.scene = vScene;
    const containerRef = React.useRef<ContainerAPI>(null);

    const uvCompute = React.useCallback((event: any, state: any, previous: any) => {
      // Since this is only a texture it does not have an easy way to obtain the parent, which we
      // need to transform event coordinates to local coordinates. We use r3f internals to find the
      // next Object3D.
      let parent = (fbo.texture as any)?.__r3f.parent;
      while (parent && !(parent instanceof THREE.Object3D)) {
        parent = parent.__r3f.parent;
      }
      if (!parent) return false;
      // First we call the previous state-onion-layers compute, this is what makes it possible to nest portals
      if (!previous.raycaster.camera) previous.events.compute(event, previous, previous.previousRoot?.getState());
      // We run a quick check against the parent, if it isn't hit there's no need to raycast at all
      const [intersection] = previous.raycaster.intersectObject(parent);
      if (!intersection) return false;
      // We take that hits uv coords, set up this layers raycaster, et voilà, we have raycasting on arbitrary surfaces
      const { uv } = intersection;
      if (!uv) return false;
      state.raycaster.setFromCamera(state.pointer.set(uv.x * 2 - 1, uv.y * 2 - 1), state.camera);
    }, []);

    React.useImperativeHandle(forwardRef, () => {
      return containerRef.current!;
    }, [fbo, containerRef]);

    return (
      <>
        {createPortal(
          <Container fbo={fbo} maskFbo={maskFbo} ref={containerRef}>
            {children}
            {/* Without an element that receives pointer events state.pointer will always be 0/0 */}
            <group onPointerOver={() => null} />
          </Container>,
          vScene,
          { events: { compute: compute || uvCompute, priority: eventPriority } },
        )}
        <primitive object={fbo.texture} {...props} />
        <primitive object={maskFbo.texture} {...props} attach={maskAttach} />
      </>
    );
  },
);

const defaultCalculatePosition = (
  el: THREE.Object3D,
  camera: THREE.Camera,
  size: { width: number; height: number },
) => {
  // const objectPos = new THREE.Vector3().setFromMatrixPosition(el.matrixWorld);
  const objectPos = new THREE.Box3().expandByObject(el).getCenter(new THREE.Vector3());
  objectPos.project(camera);
  const widthHalf = size.width / 2;
  const heightHalf = size.height / 2;
  return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
};

// The container component has to be separate, it can not be inlined because "useFrame(state" when run inside createPortal will return
// the portals own state which includes user-land overrides (custom cameras etc), but if it is executed in <RenderTexture>'s render function
// it would return the default state.
interface ContainerProps {
  children: React.ReactNode
  fbo: THREE.WebGLRenderTarget
  maskFbo: THREE.WebGLRenderTarget
}

interface ContainerAPI {
  renderMask: () => void,
  renderScene: () => void,
}

const Container = React.forwardRef<ContainerAPI, ContainerProps>(({
  children,
  fbo,
  maskFbo,
}, forwardRef) => {
  let oldAutoClear;
  const state = useThree();

  const stateRef = React.useRef(state);

  React.useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useFrame(() => {
    return null;
  }, 1);
  // @ts-ignore
  window.ttt = (unit = 'Build1_Part_25', offsetX = 0, offsetY = 0, isRefreshing = false) => {
    const unitModel = state.scene.getObjectByName(unit);
    if (isRefreshing) {
      // @ts-ignore
      window.setManualyScale(0, 0, 0, 0, 0);
      return;
    }
    if (unitModel) {
      const zoomBoxElement = document.getElementById('zoomBoxElement');
      const pos = defaultCalculatePosition(unitModel, state.camera, state.size);
      const isBuildingOne = unit.startsWith('Build1');
      const scale = isBuildingOne ? 2.2 : 2.2;
      if (zoomBoxElement) {
        // @ts-ignore
        window.setManualyScale(pos[0], pos[1], scale, offsetX, offsetY);
      }
    }
  };

  React.useImperativeHandle(forwardRef, () => ({

    getMeshPosition: () => {
      const unitModelName = 'Build1_Part_25';
      const unitModel = state.scene.getObjectByName(unitModelName);

      if (unitModel) {
        const pos = defaultCalculatePosition(unitModel, state.camera, state.size);

        const zoomBoxElement = document.getElementById('zoomBoxElement');
        if (zoomBoxElement) {
          zoomBoxElement!.style.transform = `translate(${pos[0]}px,${pos[1]}px) scale(${2},${2})`;
        }
      }
    },

    renderMask: () => {
      oldAutoClear = stateRef.current.gl.autoClear;
      stateRef.current.gl.autoClear = true;
      stateRef.current.gl.setRenderTarget(maskFbo);
      stateRef.current.gl.render(stateRef.current.scene, stateRef.current.camera);
      stateRef.current.gl.setRenderTarget(null);
      stateRef.current.gl.autoClear = oldAutoClear;
    },
    renderScene: () => {
      oldAutoClear = stateRef.current.gl.autoClear;
      stateRef.current.gl.autoClear = true;
      stateRef.current.gl.setRenderTarget(fbo);
      stateRef.current.gl.render(stateRef.current.scene, stateRef.current.camera);
      stateRef.current.gl.setRenderTarget(null);
      stateRef.current.gl.autoClear = oldAutoClear;
    },
  }), [fbo]);

  return (
    <>
      {children}
    </>
  );
});
