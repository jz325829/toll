/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable react/display-name */
import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  Vector3,
  Group,
  Object3D,
  Matrix4,
  Camera,
  PerspectiveCamera,
  OrthographicCamera,
  Raycaster,
  DoubleSide,
  Mesh,
  Material,
} from 'three';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Assign } from 'utility-types';
import {
  MaterialProps, ReactThreeFiber, useFrame, useThree,
} from '@react-three/fiber';
// import { ForwardRefComponent } from '../helpers/ts-utils';
export type ForwardRefComponent<P, T> = ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>;

const v1 = new Vector3();
const v2 = new Vector3();
const v3 = new Vector3();

function defaultCalculatePosition(el: Object3D, camera: Camera, size: { width: number; height: number }) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  objectPos.project(camera);
  const widthHalf = size.width / 2;
  const heightHalf = size.height / 2;
  return [objectPos.x * widthHalf + widthHalf, -(objectPos.y * heightHalf) + heightHalf];
}

export type CalculatePosition = typeof defaultCalculatePosition;

function isObjectBehindCamera(el: Object3D, camera: Camera) {
  const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
  const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
  const deltaCamObj = objectPos.sub(cameraPos);
  const camDir = camera.getWorldDirection(v3);
  return deltaCamObj.angleTo(camDir) > Math.PI / 2;
}

function isObjectVisible(el: Object3D, camera: Camera, raycaster: Raycaster, occlude: Object3D[]) {
  const elPos = v1.setFromMatrixPosition(el.matrixWorld);
  const screenPos = elPos.clone();
  screenPos.project(camera);
  raycaster.setFromCamera(screenPos as any, camera);
  const intersects = raycaster.intersectObjects(occlude, true);
  if (intersects.length) {
    const intersectionDistance = intersects[0].distance;
    const pointDistance = elPos.distanceTo(raycaster.ray.origin);
    return pointDistance < intersectionDistance;
  }
  return true;
}

function objectScale(el: Object3D, camera: Camera) {
  if (camera instanceof OrthographicCamera) {
    return camera.zoom;
  } if (camera instanceof PerspectiveCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const vFOV = (camera.fov * Math.PI) / 180;
    const dist = objectPos.distanceTo(cameraPos);
    const scaleFOV = 2 * Math.tan(vFOV / 2) * dist;
    return 1 / scaleFOV;
  }
  return 1;
}

function objectZIndex(el: Object3D, camera: Camera, zIndexRange: Array<number>) {
  if (camera instanceof PerspectiveCamera || camera instanceof OrthographicCamera) {
    const objectPos = v1.setFromMatrixPosition(el.matrixWorld);
    const cameraPos = v2.setFromMatrixPosition(camera.matrixWorld);
    const dist = objectPos.distanceTo(cameraPos);
    const A = (zIndexRange[1] - zIndexRange[0]) / (camera.far - camera.near);
    const B = zIndexRange[1] - A * camera.far;
    return Math.round(A * dist + B);
  }
  return undefined;
}

const epsilon = (value: number) => (Math.abs(value) < 1e-10 ? 0 : value);

function getCSSMatrix(matrix: Matrix4, multipliers: number[], prepend = '') {
  let matrix3d = 'matrix3d(';
  for (let i = 0; i !== 16; i++) {
    matrix3d += epsilon(multipliers[i] * matrix.elements[i]) + (i !== 15 ? ',' : ')');
  }
  return prepend + matrix3d;
}

const getCameraCSSMatrix = ((multipliers: number[]) => {
  return (matrix: Matrix4) => getCSSMatrix(matrix, multipliers);
})([1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1, 1, -1, 1, 1]);

const getObjectCSSMatrix = ((scaleMultipliers: (n: number) => number[]) => {
  return (matrix: Matrix4, factor: number) => getCSSMatrix(matrix, scaleMultipliers(factor), 'translate(-50%,-50%)');
})((f: number) => [1 / f, 1 / f, 1 / f, 1, -1 / f, -1 / f, -1 / f, -1, 1 / f, 1 / f, 1 / f, 1, 1, 1, 1, 1]);

type PointerEventsProperties =
  | 'auto'
  | 'none'
  | 'visiblePainted'
  | 'visibleFill'
  | 'visibleStroke'
  | 'visible'
  | 'painted'
  | 'fill'
  | 'stroke'
  | 'all'
  | 'inherit';

function isRefObject(ref: any): ref is React.RefObject<any> {
  return ref && typeof ref === 'object' && 'current' in ref;
}

export interface HtmlProps
  extends Omit<Assign<React.HTMLAttributes<HTMLDivElement>, ReactThreeFiber.Object3DNode<Group, typeof Group>>, 'ref'> {
  prepend?: boolean
  center?: boolean
  fullscreen?: boolean
  eps?: number
  portal?: React.MutableRefObject<HTMLElement>
  distanceFactor?: number
  sprite?: boolean
  transform?: boolean
  zIndexRange?: Array<number>
  calculatePosition?: CalculatePosition
  as?: string
  wrapperClass?: string
  pointerEvents?: PointerEventsProperties

  // Occlusion based off work by Jerome Etienne and James Baicoianu
  // https://www.youtube.com/watch?v=ScZcUEDGjJI
  // as well as Joe Pea in CodePen: https://codepen.io/trusktr/pen/RjzKJx
  occlude?: React.RefObject<Object3D>[] | boolean | 'raycast' | 'blending'
  onOcclude?: (visible: boolean) => null
  material?: React.ReactNode // Material for occlusion plane
  geometry?: React.ReactNode // Material for occlusion plane
  castShadow?: boolean // Cast shadow for occlusion plane
  receiveShadow?: boolean // Receive shadow for occlusion plane
}

export const Html: ForwardRefComponent<HtmlProps, HTMLDivElement> = React.forwardRef(
  (
    {
      children,
      eps = 0.001,
      style,
      className,
      prepend,
      center,
      fullscreen,
      portal,
      distanceFactor,
      sprite = false,
      transform = false,
      occlude,
      onOcclude,
      castShadow,
      receiveShadow,
      material,
      geometry,
      zIndexRange = [16777271, 0],
      calculatePosition = defaultCalculatePosition,
      as = 'div',
      wrapperClass,
      pointerEvents = 'auto',
      ...props
    }: HtmlProps,
    ref: React.Ref<HTMLDivElement>,
  ) => {
    const {
      gl, camera, scene, size, raycaster, events, viewport,
    } = useThree();

    const [el] = React.useState(() => document.createElement(as));
    const root = React.useRef<ReactDOM.Root>();
    const group = React.useRef<Group>(null!);
    const oldZoom = React.useRef(0);
    const oldPosition = React.useRef([0, 0]);
    const transformOuterRef = React.useRef<HTMLDivElement>(null!);
    const transformInnerRef = React.useRef<HTMLDivElement>(null!);
    // Append to the connected element, which makes HTML work with views
    const target = (portal?.current || events.connected || gl.domElement.parentNode) as HTMLElement;

    const occlusionMeshRef = React.useRef<Mesh>(null!);
    const isMeshSizeSet = React.useRef<boolean>(false);

    const isRayCastOcclusion = React.useMemo(() => {
      return (
        (occlude && occlude !== 'blending') || (Array.isArray(occlude) && occlude.length && isRefObject(occlude[0]))
      );
    }, [occlude]);

    React.useLayoutEffect(() => {
      const el = gl.domElement as HTMLCanvasElement;

      if (occlude && occlude === 'blending') {
        el.style.zIndex = `${Math.floor(zIndexRange[0] / 2)}`;
        el.style.position = 'absolute';
        el.style.pointerEvents = 'none';
      } else {
        el.style.zIndex = null!;
        el.style.position = null!;
        el.style.pointerEvents = null!;
      }
    }, [occlude]);

    React.useLayoutEffect(() => {
      if (group.current) {
        const currentRoot = (root.current = ReactDOM.createRoot(el));
        scene.updateMatrixWorld();
        if (transform) {
          el.style.cssText = 'position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;';
        } else {
          const vec = calculatePosition(group.current, camera, size);
          el.style.cssText = `s;position:absolute;top:0;left:0;transform:translate3d(${vec[0]}px,${vec[1]}px,0);transform-origin:0 0;`;
        }
        if (target) {
          if (prepend) target.prepend(el);
          else target.appendChild(el);
        }
        return () => {
          if (target) target.removeChild(el);
          currentRoot.unmount();
        };
      }
    }, [target, transform]);

    React.useLayoutEffect(() => {
      if (wrapperClass) el.className = wrapperClass;
    }, [wrapperClass]);

    const styles: React.CSSProperties = React.useMemo(() => {
      if (transform) {
        return {
          position: 'absolute',
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          transformStyle: 'preserve-3d',
          pointerEvents: 'none',
        };
      }
      return {
        position: 'absolute',
        transform: center ? 'translate3d(-50%,-50%,0)' : 'none',
        ...(fullscreen && {
          top: -size.height / 2,
          left: -size.width / 2,
          width: size.width,
          height: size.height,
        }),
        ...style,
      };
    }, [style, center, fullscreen, size, transform]);

    const transformInnerStyles: React.CSSProperties = React.useMemo(
      () => ({ position: 'absolute', pointerEvents }),
      [pointerEvents],
    );

    React.useLayoutEffect(() => {
      isMeshSizeSet.current = false;

      if (transform) {
        root.current?.render(
          <div ref={transformOuterRef} style={styles}>
            <div ref={transformInnerRef} style={transformInnerStyles}>
              <div ref={ref} className={className} style={style} children={children} />
            </div>
          </div>,
        );
      } else {
        root.current?.render(<div ref={ref} style={styles} className={className} children={children} />);
      }
    });

    const visible = React.useRef(true);

    useFrame((gl) => {
      if (group.current) {
        camera.updateMatrixWorld();
        group.current.updateWorldMatrix(true, false);
        const vec = transform ? oldPosition.current : calculatePosition(group.current, camera, size);

        if (
          transform
          || Math.abs(oldZoom.current - camera.zoom) > eps
          || Math.abs(oldPosition.current[0] - vec[0]) > eps
          || Math.abs(oldPosition.current[1] - vec[1]) > eps
        ) {
          const isBehindCamera = isObjectBehindCamera(group.current, camera);

          const previouslyVisible = visible.current;
          visible.current = !isBehindCamera;

          if (previouslyVisible !== visible.current) {
            el.style.display = visible.current ? 'block' : 'none';
          }

          const zRange = zIndexRange;

          el.style.zIndex = `${objectZIndex(group.current, camera, zRange)}`;

          const scale = distanceFactor === undefined ? 1 : objectScale(group.current, camera) * distanceFactor;
          el.style.transform = `translate3d(${vec[0]}px,${vec[1]}px,0) scale(${scale})`;

          oldPosition.current = vec;
          oldZoom.current = camera.zoom;
        }
      }

      const ele = el.children[0];

      if (ele?.clientWidth && ele?.clientHeight) {
        const ratio = 1 / viewport.factor;
        const w = ele.clientWidth * ratio;
        const h = ele.clientHeight * ratio;

        occlusionMeshRef?.current?.scale.set(w, h, 1);

        isMeshSizeSet.current = true;
      }

      occlusionMeshRef?.current?.lookAt(gl.camera.position);

      return null;
    });

    const shaders = React.useMemo(
      () => ({
        vertexShader: !transform
          ? /* glsl */ `
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `
          : undefined,
        fragmentShader: /* glsl */ `
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `,
      }),
      [transform],
    );

    return (
      <group {...props} ref={group}>
        {occlude && !isRayCastOcclusion && (
          <mesh castShadow={castShadow} receiveShadow={receiveShadow} ref={occlusionMeshRef}>
            {geometry || <planeGeometry />}
            {material || (
              <shaderMaterial
                side={DoubleSide}
                vertexShader={shaders.vertexShader}
                fragmentShader={shaders.fragmentShader}
              />
            )}
          </mesh>
        )}
      </group>
    );
  },
);
