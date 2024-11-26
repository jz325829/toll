/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  PerspectiveCamera, useCamera, useFBX, useGLTF, Html,
} from '@react-three/drei';

import * as THREE from 'three';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import { BuildingData, UnitData } from './types';
import BuildingModel, { MaterialsCategorized } from './BuildingModel';
import { RootState } from '../../store/store';
import UnitTooltip from '../../components/UI/UnitTooltip';
import { RenderTexture, RenderTextureAPI } from '../helpers/RenderTexture';
import {
  BUILDING1_CAMERAS, BUILDING2_CAMERAS, BUILDING3_CAMERAS, BUILDING4_CAMERAS, BUILDING5_CAMERAS, BUILDING6_CAMERAS
} from '../../constants/cameras';
// import { Html } from '../utils/Html';

interface Props {
  isVisibleRooms: boolean
  setPageLoaded: () => void;
  isPageLoaded: boolean,
  dummyData: BuildingData | null | undefined;
  setPageLoadedTrue: () => void;
  building1: THREE.Object3D<THREE.Object3DEventMap>[];
  building2: THREE.Object3D<THREE.Object3DEventMap>[];
  building3: THREE.Object3D<THREE.Object3DEventMap>[];
  building4: THREE.Object3D<THREE.Object3DEventMap>[];
  building5: THREE.Object3D<THREE.Object3DEventMap>[];
  building6: THREE.Object3D<THREE.Object3DEventMap>[];
  divider1: THREE.Object3D<THREE.Object3DEventMap>[];
  divider2: THREE.Object3D<THREE.Object3DEventMap>[];
  divider3: THREE.Object3D<THREE.Object3DEventMap>[];
  divider4: THREE.Object3D<THREE.Object3DEventMap>[];
  divider5: THREE.Object3D<THREE.Object3DEventMap>[];
  divider6: THREE.Object3D<THREE.Object3DEventMap>[];
}

class MeshMaskedMaterial extends THREE.MeshBasicMaterial {
  public get mask() {
    return this.uniforms.mask.value;
  }

  public set mask(value) {
    this.uniforms.mask.value = value;
  }

  private uniforms = {
    mask: new THREE.Uniform(null) as THREE.Uniform<THREE.Texture | null>,
  };

  onBeforeCompile = (shader: THREE.Shader) => {
    shader.uniforms.mask = this.uniforms.mask;

    const shaderUniforms = `
      uniform sampler2D mask;
    `;

    shader.fragmentShader = `
      ${shaderUniforms}
      ${shader.fragmentShader}
    `;

    // TODO color map mix
    shader.fragmentShader = shader.fragmentShader.replace(
      '#include <map_fragment>',
      `
        #ifdef USE_MAP

          vec4 sampledDiffuseColor = texture2D( map, vMapUv );

          vec4 mapV = texture2D( map, vMapUv);
          vec4 maskV = texture2D( mask, vMapUv);

          
          // diffuseColor *= mapV;

          // // IF GREEN - CUT
          if (maskV.g > 0.0) {
            if (maskV.r > 0.0) {
              diffuseColor *= mapV;

              // TODO CHANGE ALPHA
              diffuseColor.a = 0.8; 
            } else {
              discard;
            }
          } else {
            diffuseColor *= mapV;

            if (maskV.b > 0.0) {
              diffuseColor.a = 1.0;
            }

            // // // if its any unit (red) - half alpha

            if (maskV.r > 0.0) {
              diffuseColor.a = 0.3;
          }



          // // // If its blue divider - full alpha
          }

          // if (maskV.r > 0.0 && maskV.b > 0.0) {
          //   diffuseColor.a = 0.6;
          // }

        #endif
      `,
    );
  };
}

const MainBuildings: React.FC<Props> = ({
  isVisibleRooms, dummyData, building1,
  building2, building3, building4, building5, building6, divider1, divider2, divider3, divider4, divider5, divider6
}) => {
  const buildingId = useSelector((state: RootState) => state.carousel.buildingId);

  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  const dispatch = useDispatch();

  const toolTipInfo = useSelector((state: RootState) => state.carousel.toolTipInfo);
  const zoomedUnit = useSelector((state: RootState) => state.carousel.zoomedUnit);

  const [isTouchDevice, setIsTouchDevice] = useState('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const isDragging = useSelector((state: RootState) => state.carousel.isDragging);

  const objectsPositions = useMemo(() => {
    if (buildingId === 'building1') {
      return BUILDING1_CAMERAS;
    } if (buildingId === 'building2') {
      return BUILDING2_CAMERAS;
    } if (buildingId === 'building3') {
      return BUILDING3_CAMERAS;
    } if (buildingId === 'building4') {
      return BUILDING4_CAMERAS;
    } if (buildingId === 'building5') {
      return BUILDING5_CAMERAS;
    } if (buildingId === 'building6') {
      return BUILDING6_CAMERAS;
    }
    return BUILDING1_CAMERAS;
  }, [buildingId]);

  const { camera, gl, scene } = useThree();
  const isZoomed = useSelector((state: RootState) => state.carousel.isZoomed);

  const renderCameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const mainGroupRef = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);
  const building1Ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);
  const building2Ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);
  const building3Ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);
  const building4Ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);
  const building5Ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);
  const building6Ref = useRef<THREE.Group<THREE.Object3DEventMap>>(null!);

  const filters = useSelector((state: RootState) => state.filters);

  const renderTextureAPIref = useRef<RenderTextureAPI>(null);
  const zoomUnitMaterial = useMemo(() => new THREE.MeshBasicMaterial({
    name: 'mu',
    color: 0xFFA500,
    transparent: false,
  }), []);

  let fov: number;
  switch (buildingId) {
    case 'building1':
      fov = 25;
      break;
    case 'building2':
      fov = 26;
      break;
    case 'building3':
      fov = 24.5;
      break;
    case 'building4':
      fov = 25.5;
      break;
    case 'building5':
      fov = 25;
      break;
    case 'building6':
      fov = 26;
      break;
    default:
      fov = 45;
  }
  const unitMaterial = useMemo(() => new THREE.MeshBasicMaterial({ name: 'm', color: 0xFFFFFF, transparent: false }), []);
  const unitMaterialDisabled = useMemo(() => new THREE.MeshBasicMaterial({ name: 'md', color: 0x0C223F, transparent: false }), []);
  const dividerMaterial = useMemo(() => new THREE.MeshBasicMaterial({ color: 0x0000ff, transparent: false, side: 2 }), []);
  const maskMaterial = useMemo(() => new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: false }), []);

  const categorizedMaterials = useMemo((): MaterialsCategorized => {
    return {
      divider: new THREE.MeshBasicMaterial(),
      available: new THREE.MeshBasicMaterial(),
      unavailable: new THREE.MeshBasicMaterial(),
      sold: new THREE.MeshBasicMaterial(),
      deposit: new THREE.MeshBasicMaterial(),
      coming_soon: new THREE.MeshBasicMaterial(),
      future_phase: new THREE.MeshBasicMaterial(),
      quick_delivery: new THREE.MeshBasicMaterial(),
    };
  }, []);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS|FxiOS|Tablet|tablet/i.test(navigator.userAgent);

  const renderMaterial = useMemo(() => new MeshMaskedMaterial({ transparent: true }), []);
  const buildingData = dummyData && dummyData[buildingId as keyof typeof dummyData];
  const tooltipPivotRef = useRef<THREE.Object3D>(null);
  const pointerDownRef = useRef(new THREE.Vector3());

  const unitData: UnitData | undefined = buildingData
    ? buildingData[+toolTipInfo.toolTipId]
    : undefined;

  useFrame(() => {
    return null;
  }, 1);

  const rerenderScreen = () => {
    const dividerMaskColor = 0x0000ff;
    const unitMaskColor = 0xff0000;
    const zoomUnitMaskColor = 0xffff00;

    dividerMaterial.color.set(dividerMaskColor);
    unitMaterialDisabled.color.set(unitMaskColor);

    Object.values(categorizedMaterials).forEach((el) => {
      el.color.set(unitMaskColor);
    });

    unitMaterial.color.set(unitMaskColor);
    zoomUnitMaterial.color.set(zoomUnitMaskColor);

    unitMaterialDisabled.opacity = 1;
    unitMaterial.opacity = 1;
    zoomUnitMaterial.opacity = 1;
    maskMaterial.visible = true;

    renderTextureAPIref.current?.renderMask();

    maskMaterial.visible = false;

    // categorizedMaterials.divider.color.set(window.swelld)
    Object.keys(categorizedMaterials).forEach((key) => {
      const mat = categorizedMaterials[key as keyof typeof categorizedMaterials];

      mat.color.set(window.swellData.colorsConfig[key]);
    });

    dividerMaterial.color.set(window.swellData.colorsConfig.divider || 0xFFFFFF);

    // unitMaterialDisabled.color.set(window.swellData.unitColorUnavailable || 0x0C223F);
    // zoomUnitMaterial.color.set(0x055C9D);
    // unitMaterial.color.set(window.swellData.unitColor || 0xff0000);
    renderTextureAPIref.current?.renderScene();

    gl.render(scene, camera);
  };

  const changeViewerCamera = (data: any, objectToFind: any = objectsPositions) => {
    const position = objectToFind[data.camera_name];
    const target = objectToFind[`${data.camera_name}.Target`];
    if (position && target) {
      renderCameraRef.current.position.copy(position).fromArray(position);
      renderCameraRef.current.lookAt(new THREE.Vector3().fromArray(target));
      renderCameraRef.current.updateProjectionMatrix();

      rerenderScreen();
    }
  };

  // @ts-ignore for debug;
  window.GLOBAL_CACHE.changeViewerCamera = changeViewerCamera;

  const toggleBuildingOne = () => {
    dispatch($carousel_actions.setZoomed(true));
    dispatch($carousel_actions.setBuildingId('building1'));
    dispatch($carousel_actions.updateBuildingDataNumber(1));

    setTimeout(() => {
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(61, true);
    }, 200);
  };

  const toggleBuildingThree = () => {
    dispatch($carousel_actions.setZoomed(true));
    dispatch($carousel_actions.setBuildingId('building3'));
    dispatch($carousel_actions.updateBuildingDataNumber(3));

    setTimeout(() => {
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(61, true);
    }, 200);
  };

  const toggleBuildingTwo = () => {
    dispatch($carousel_actions.setZoomed(true));
    dispatch($carousel_actions.setBuildingId('building2'));
    dispatch($carousel_actions.updateBuildingDataNumber(2));
    const unitRende = isItSecondVersion ? 68 : 88;
    setTimeout(() => {
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(unitRende, true);
    }, 200);
  };
  // @ts-ignore asd
  window.GLOBAL_CACHE.sceneSize = useThree((state) => state.size);
  // @ts-ignore asd
  window.GLOBAL_CACHE.sceneCamera = camera;
  const viewport = useThree((state) => state.viewport);

  useEffect(() => {
    const handleResize = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gl.render(scene, camera);
  }, [isVisibleRooms]);

  useEffect(() => {
    rerenderScreen();
  }, [filters]);

  useEffect(() => {
    if (!isZoomed) {
      camera.updateProjectionMatrix();
      rerenderScreen();
      const updatedSlide = isItSecondVersion ? 51 : 1;
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(updatedSlide, true);
    } else {
      camera.updateProjectionMatrix();
      rerenderScreen();
    }
  }, [isZoomed]);

  useFrame(() => {
    const updatedZoomUnit = +zoomedUnit < 10 ? `0${zoomedUnit}` : zoomedUnit;
    // @ts-ignore asd
    const zoomedUnitMesh = window.GLOBAL_CACHE.scene?.getObjectByProperty('n', updatedZoomUnit);
    if (zoomedUnitMesh && zoomedUnitMesh instanceof THREE.Mesh) {
      zoomedUnitMesh.material.color.set(zoomUnitMaterial);
    }
  }, 1);

  const handlePointerMissed = () => {
    tooltipPivotRef.current?.position.set(9999999, 9999999, 9999999);
    // setUnitNumber('0');
    dispatch($carousel_actions.setToolTip(false));
  };

  const handleMouseEnter = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (isDragging) {
      pointerDownRef.current.set(999, 999, 999);
      return handlePointerMissed();
    }
    if (tooltipPivotRef.current && e.pointerType === 'mouse') {
      if (!e.object.userData.isAvailable) {
        return handlePointerMissed();
      }
      if (e.object.userData.n) {
        dispatch(
          $carousel_actions
            .setToolTipInfo({
              toolTipId: e.object.userData.n,
              unitNumber: e.object.userData.unitNumber,
            }),
        );

        // tooltipPivotRef.current.position.copy(updatedPosition as THREE.Vector3);
        tooltipPivotRef.current.position.set(e.point.x, e.point.y + 0.8, e.point.z);
        tooltipPivotRef.current.updateMatrix();
        // gl.render(scene, camera);
        // rerenderScreen();
      }

      // if (e.object.userData.n) {
      //   setUnitNumber(e.object.userData.n);
      // }

      if (isVisibleRooms) {
        dispatch($carousel_actions.setToolTip(true));
      }
    }

    return null;
  };
  const handleToolTipClick = (e: ThreeEvent<PointerEvent>) => {
    if (isZoomed) {
      pointerDownRef.current.copy(e.point);
    }
  };

  const handlePointerUp = (e: ThreeEvent<PointerEvent>) => {
    if (e.object.userData.isAvailable && isVisibleRooms) {
      dispatch($carousel_actions.updatedUnitCardInfo(+e.object.userData.n));
    }

    if (e.point.distanceTo(pointerDownRef.current) < 0.15 && e.object.userData.isAvailable && isVisibleRooms) {
      if (window.swellData) {
        window.swellData.toll.showUnit(e.object.userData.unitNumber, buildingId);
      } else {
        dispatch($carousel_actions.setUnitCard(true));
        dispatch($carousel_actions.setToolTip(false));
      }
    }
  };

  const handleMouseClick = (e: ThreeEvent<MouseEvent>) => {
    if (isDragging) {
      pointerDownRef.current.set(999, 999, 999);
      return handlePointerMissed();
    }

    if (tooltipPivotRef.current && (e as unknown as PointerEvent).pointerType !== 'touch') {
      if (!e.object.userData.isAvailable) {
        dispatch(
          $carousel_actions
            .setToolTipInfo({
              toolTipId: '1',
              unitNumber: '0',
            }),
        );
        return handlePointerMissed();
      }

      tooltipPivotRef.current.position.copy(e.point);

      if (toolTipInfo.toolTipId === e.object.userData.n && isVisibleRooms) {
        dispatch($carousel_actions.setUnitCard(true));
        dispatch($carousel_actions.setToolTip(false));
      }
      dispatch(

        $carousel_actions
          .setToolTipInfo({
            toolTipId: e.object.userData.n,
            unitNumber: e.object.userData.unitNumber,
          }),
      );

      if (isVisibleRooms) {
        dispatch($carousel_actions.setToolTip(true));
      }
    }

    return null;
  };

  const handleCloseToolTop = (e: ThreeEvent<MouseEvent>) => {
    if (tooltipPivotRef.current && mainGroupRef.current) {
      const { name } = e.object;

      if (name && (!name.includes('Building1_Part') || !name.includes('Building2_Part'))) {
        dispatch($carousel_actions.setToolTip(false));
      }
    }
  };

  const handleOpenUnitCard = () => {
    dispatch($carousel_actions.setUnitCard(true));
    dispatch($carousel_actions.setToolTip(false));
  };

  return (
    <mesh visible={isVisibleRooms} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <primitive object={renderMaterial}>
        <RenderTexture ref={renderTextureAPIref} attach="map">
          <PerspectiveCamera ref={renderCameraRef} makeDefault fov={fov} />
          <group ref={mainGroupRef} onClick={handleCloseToolTop}>
            <group
              name="building_1"
              onPointerMove={handleMouseEnter}
              onPointerUp={handlePointerUp}
              onPointerDown={handleToolTipClick}
              onPointerOut={handlePointerMissed}
              onClick={handleMouseClick}
              ref={building1Ref}
            >
              <group name="divider_1">
                {isZoomed && buildingId === 'building1' && divider1.map((model) => (
                  <primitive
                    object={model}
                    key={model.name}
                    side={THREE.DoubleSide}
                  >
                    <primitive attach="material" object={dividerMaterial} />
                  </primitive>
                ))}
              </group>
              {isZoomed
                && buildingId === 'building1'
                && building1.map((model) => (
                  <BuildingModel
                    materials={categorizedMaterials}
                    zoomMaterial={zoomUnitMaterial}
                    material={unitMaterial}
                    materialDisabled={unitMaterialDisabled}
                    key={model.name}
                    model={model}
                    dummyData={dummyData}
                    filters={filters}
                    buildingNumber={buildingId}
                  />
                ))}
              {/* {!isZoomed && !!availableAparments[0] && (
                <mesh visible={false} position={isItSecondVersion ? [-125, 16, -82.5] : [30, 28, 0]}>
                  <meshBasicMaterial color={0xff0000} />
                  <boxGeometry args={[10, 10, 10]} />
                  <Html>
                    <UnitTooltip
                      title={isItSecondVersion ? 'Building 1' : 'Vantage'}
                      hoveredText={`${numberApartments[0]} ${isItSecondVersion ? 'Residences' : 'Residences'}`}
                      hoveredText2={`${availableAparments[0]} Available`}
                      onClick={toggleBuildingOne}
                    />
                  </Html>
                </mesh>
              )}
              {(!isZoomed && !isItSecondVersion && !!availableAparments[0]) && (
                <mesh visible={false} position={[-80, 14, -50]}>
                  <meshBasicMaterial color={0xff0000} />
                  <boxGeometry args={[10, 10, 10]} />
                  <Html>
                    <UnitTooltip
                      noHover
                      title="Terraces"
                      hoveredText={`${numberApartments[0]} ${isItSecondVersion ? 'Residences' : 'Residences'}`}
                      hoveredText2={`${availableAparments[0]} Available`}
                    />
                  </Html>
                </mesh>
              )} */}

            </group>
            <group
              name="building_2"
              onPointerMove={handleMouseEnter}
              onPointerUp={handlePointerUp}
              onPointerDown={handleToolTipClick}
              onPointerOut={handlePointerMissed}
              onClick={handleMouseClick}
              ref={building2Ref}
            >
              <group name="divider_2">
                {isZoomed && buildingId === 'building2' && divider2.map((model) => (
                  <primitive
                    object={model}
                    key={model.name}
                    side={THREE.DoubleSide}
                  >
                    <primitive attach="material" object={dividerMaterial} />
                  </primitive>
                ))}
              </group>
              {isZoomed
                && buildingId === 'building2'
                && building2.map((model) => (
                  <BuildingModel
                    material={unitMaterial}
                    zoomMaterial={zoomUnitMaterial}
                    materialDisabled={unitMaterialDisabled}
                    key={model.name}
                    model={model}
                    dummyData={dummyData}
                    materials={categorizedMaterials}
                    filters={filters}
                    buildingNumber={buildingId}
                  />
                ))}
              {/* {!isZoomed && !!availableAparments[1] && (
                <mesh visible={false} position={isItSecondVersion ? [-65, 16, -105] : [22.235, 28.172, -69.690]}>
                  <meshBasicMaterial color={0xff0000} />
                  <boxGeometry args={[1, 1, 1]} />
                  <Html>

                    <UnitTooltip
                      title={isItSecondVersion ? 'Building 3' : 'Outlook'}
                      hoveredText={`${numberApartments[1]} ${isItSecondVersion ? 'Residences' : 'Residences'}`}
                      hoveredText2={`${availableAparments[1]} Available`}
                      onClick={toggleBuildingTwo}
                    />
                  </Html>
                </mesh>
              )} */}

            </group>
            <group
              name="building_3"
              onPointerMove={handleMouseEnter}
              onPointerUp={handlePointerUp}
              onPointerDown={handleToolTipClick}
              onPointerOut={handlePointerMissed}
              onClick={handleMouseClick}
              ref={building3Ref}
            >
              <group name="divider_3">
                {isZoomed && buildingId === 'building3' && divider3.map((model) => (
                  <primitive
                    object={model}
                    key={model.name}
                    side={THREE.DoubleSide}
                  >
                    <primitive attach="material" object={dividerMaterial} />
                  </primitive>
                ))}
              </group>
              {isZoomed
                && buildingId === 'building3'
                && building3.map((model) => (
                  <BuildingModel
                    material={unitMaterial}
                    zoomMaterial={zoomUnitMaterial}
                    materialDisabled={unitMaterialDisabled}
                    key={model.name}
                    materials={categorizedMaterials}
                    model={model}
                    dummyData={dummyData}
                    filters={filters}
                    buildingNumber={buildingId}
                  />
                ))}

              {/* {(!isZoomed && isItSecondVersion && !!availableAparments[2]) && (
                <mesh visible={false} position={[-112.5, 16, -42.5]}>
                  <meshBasicMaterial color={0xff0000} />
                  <boxGeometry args={[10, 10, 10]} />
                  <Html>
                    <UnitTooltip
                      title="Building 2"
                      hoveredText={`${numberApartments[2]} Residences`}
                      hoveredText2={`${availableAparments[2]} Available`}
                      onClick={toggleBuildingThree}
                    />
                  </Html>
                </mesh>
              )} */}

            </group>
            <group
              name="building_4"
              onPointerMove={handleMouseEnter}
              onPointerUp={handlePointerUp}
              onPointerDown={handleToolTipClick}
              onPointerOut={handlePointerMissed}
              onClick={handleMouseClick}
              ref={building4Ref}
            >
              <group name="divider_4">
                {isZoomed && buildingId === 'building4' && divider4.map((model) => (
                  <primitive
                    object={model}
                    key={model.name}
                    side={THREE.DoubleSide}
                  >
                    <primitive attach="material" object={dividerMaterial} />
                  </primitive>
                ))}
              </group>
              {isZoomed
                && buildingId === 'building4'
                && building4.map((model) => (
                  <BuildingModel
                    material={unitMaterial}
                    zoomMaterial={zoomUnitMaterial}
                    materialDisabled={unitMaterialDisabled}
                    key={model.name}
                    materials={categorizedMaterials}
                    model={model}
                    dummyData={dummyData}
                    filters={filters}
                    buildingNumber={buildingId}
                  />
                ))}
            </group>
            <group
              name="building_5"
              onPointerMove={handleMouseEnter}
              onPointerUp={handlePointerUp}
              onPointerDown={handleToolTipClick}
              onPointerOut={handlePointerMissed}
              onClick={handleMouseClick}
              ref={building5Ref}
            >
              <group name="divider_5">
                {isZoomed && buildingId === 'building5' && divider5.map((model) => (
                  <primitive
                    object={model}
                    key={model.name}
                    side={THREE.DoubleSide}
                  >
                    <primitive attach="material" object={dividerMaterial} />
                  </primitive>
                ))}
              </group>
              {isZoomed
                && buildingId === 'building5'
                && building5.map((model) => (
                  <BuildingModel
                    material={unitMaterial}
                    zoomMaterial={zoomUnitMaterial}
                    materialDisabled={unitMaterialDisabled}
                    key={model.name}
                    materials={categorizedMaterials}
                    model={model}
                    dummyData={dummyData}
                    filters={filters}
                    buildingNumber={buildingId}
                  />
                ))}
            </group>
            <group
              name="building_6"
              onPointerMove={handleMouseEnter}
              onPointerUp={handlePointerUp}
              onPointerDown={handleToolTipClick}
              onPointerOut={handlePointerMissed}
              onClick={handleMouseClick}
              ref={building6Ref}
            >
              <group name="divider_6">
                {isZoomed && buildingId === 'building6' && divider6.map((model) => (
                  <primitive
                    object={model}
                    key={model.name}
                    side={THREE.DoubleSide}
                  >
                    <primitive attach="material" object={dividerMaterial} />
                  </primitive>
                ))}
              </group>
              {isZoomed
                && buildingId === 'building6'
                && building6.map((model) => (
                  <BuildingModel
                    material={unitMaterial}
                    zoomMaterial={zoomUnitMaterial}
                    materialDisabled={unitMaterialDisabled}
                    key={model.name}
                    materials={categorizedMaterials}
                    model={model}
                    dummyData={dummyData}
                    filters={filters}
                    buildingNumber={buildingId}
                  />
                ))}
            </group>
          </group>
          {
            buildingId !== 'main'
            && isZoomed
            // && !isMobile
            && (
              <object3D position={[0, -9999, 0]} ref={tooltipPivotRef}>
                <Html zIndexRange={[1, 1]} style={{ pointerEvents: 'none' }}>
                  <UnitTooltip
                    hoveredText={`${unitData?.bedrooms} Bedrooms | ${unitData?.bathrooms} Bathroom`}
                    title={`Residence ${toolTipInfo.unitNumber}`}
                    style={{
                      zIndex: 9999,
                      pointerEvents: isMobile ? 'auto' : 'none',
                    }}
                    isShowArrow
                    hoveredByDefault
                    onClick={handleOpenUnitCard}
                  />
                </Html>
              </object3D>
            )
          }
          {/* <OrbitControls /> */}
        </RenderTexture>
      </primitive>
    </mesh>
  );
};

export default MainBuildings;
