/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-mixed-operators */
import {
  useCallback,
  useEffect, useRef, useState,
} from 'react';
import { Canvas } from '@react-three/fiber';
import { Box, useMediaQuery } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { BuildingData, UnitData } from 'src/webgl/MainBuildings/types';
import {
  Camera, Object3D, Vector2, Vector3,
} from 'three';
import {
  useGLTF
} from '@react-three/drei';
import Header from '../../components/Header';
import FilterModal from '../../components/FilterModal';
import NoResultModal from '../../components/NoResultsModal';
import Zoom from '../../components/Zoom';
import BuildingCard from '../../components/BuildingCard';
import Scene from '../../webgl/Scene';
import Carousel from '../../components/Carousel';
import { RootState } from '../../store/store';
import Loader from '../../components/Loader';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import UnitCard from '../../components/UnitCard';
import { building1Config, building2Config, building3Config, building4Config, building5Config, building6Config } from '../../constants/cameras';

import { useCategorizeChildrenInModal } from '../../hooks/useCategorizeChildrenInModal';
import { CameraData } from './types';
import useIsSomeUnitAvailable from '../../hooks/useIsSomeUnitAvailable';
import PanoView from './panoView';

interface ZoomBoxProps {
  children: React.ReactNode | React.ReactNode;
}

const ZoomBox: React.FC<ZoomBoxProps> = ({ children }) => {
  const isZoomed = useSelector((state: RootState) => state.carousel.isZoomed);
  const [
    isDeviceWidthSmallerThenHeight,
    setIsDeviceWidthSmallerThenHeight,
  ] = useState(window.innerWidth / window.innerHeight > 1920 / 920);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDeviceWidthSmallerThenHeight(window.innerWidth / window.innerHeight > 1920 / 920);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [s] = useState([new Vector2(), new Vector2(), new Vector2(0, 0), new Vector2(1)]);

  const [pointer, target, pos, scaleV] = s;
  // @ts-ignore
  const globalScene = window.GLOBAL_CACHE.scene; const { sceneCamera } = window;
  // @ts-ignore
  const viewPort = window.GLOBAL_CACHE.sceneViewport;

  // useEffect(() => {
  // if (globalScene) {

  useEffect(() => {
    if (divRef.current) {
      const zoomInRef = document.querySelector('#zoom-in');
      const zoomOutRef = document.querySelector('#zoom-out');
      const handleButtonClick = (e: React.MouseEvent<HTMLDivElement>, dir: number) => {
        e.preventDefault();
        let scale = scaleV.x;

        pointer.x = (((window.innerWidth - pos.x) / 2) / (scale))
          + -divRef.current!.offsetLeft + divRef.current!.parentElement!.offsetLeft;

        pointer.y = (((window.innerHeight - pos.y) / 2) / (scale))
          + -divRef.current!.offsetTop + divRef.current!.parentElement!.offsetTop;
        target.x = (pointer.x - pos.x) / scale;
        target.y = (pointer.y - pos.y) / scale;

        scale += -1 * Math.max(-1, Math.min(1, dir)) * 0.05 * scale;
        const minScale = 1;
        const maxScale = 3;
        scale = Math.max(minScale, Math.min(maxScale, scale));

        pos.x = -target.x * scale + pointer.x;
        pos.y = -target.y * scale + pointer.y;
        const size = {
          w: divRef.current!.offsetWidth,
          h: divRef.current!.offsetHeight,
        };
        if (pos.x > 0) pos.x = 0;
        if (pos.x + size.w * scale < size.w) pos.x = -size.w * (scale - 1);
        if (pos.y > 0) pos.y = 0;
        if (pos.y + size.h * scale < size.h) pos.y = -size.h * (scale - 1);

        scaleV.set(scale, 0);

        divRef.current!.style.transform = `translate(${pos.x}px,${pos.y}px) scale(${scale},${scale})`;
      };

      if (zoomInRef) {
        zoomInRef?.addEventListener('click', (e: Event) => handleButtonClick(e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>, -100));
      }
      if (zoomOutRef) {
        zoomOutRef?.addEventListener('click', (e: Event) => handleButtonClick(e as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>, 100));
      }
    }
  }, []);

  const setManualy = (posX: number, posY: number, nextScale: number, offsetX = 0, offsetY = 0) => {
    const pointer = { x: posX, y: posY };

    let scale = scaleV.x;
    target.x = (pointer.x - pos.x) / scale;
    target.y = (pointer.y - pos.y) / scale;

    scale = nextScale;

    const minScale = 1;
    const maxScale = nextScale;
    scale = Math.max(minScale, Math.min(maxScale, scale));
    pos.x = -target.x * scale + pointer.x;
    pos.y = -target.y * scale + pointer.y;
    if (divRef.current) {
      const size = {
        w: divRef.current!.offsetWidth,
        h: divRef.current!.offsetHeight,
      };

      if (pos.x > 0) pos.x = 0;
      if (pos.x + size.w * scale < size.w) pos.x = -size.w * (scale - 1);
      if (pos.y > 0) pos.y = 0;
      if (pos.y + size.h * scale < size.h) pos.y = -size.h * (scale - 1);

      scaleV.set(scale, 0);
      setTimeout(() => {
        divRef.current!.style.transform = `translate(${pos.x + offsetX}px,${pos.y + offsetY}px) scale(${scale},${scale})`;
      }, 100);
    }
  };
  // @ts-ignore
  window.GLOBAL_CACHE.setManualyScale = setManualy;

  const handleWheel = (e: WheelEvent) => {
    let scale = scaleV.x;
    e.preventDefault();

    pointer.x = e.pageX + -divRef.current!.offsetLeft + divRef.current!.parentElement!.offsetLeft;
    pointer.y = e.pageY + -divRef.current!.offsetTop + divRef.current!.parentElement!.offsetTop;

    target.x = (pointer.x - pos.x) / scale;
    target.y = (pointer.y - pos.y) / scale;

    scale += -1 * Math.max(-1, Math.min(1, e.deltaY)) * 0.05 * scale;

    const minScale = 1;
    const maxScale = 3;
    scale = Math.max(minScale, Math.min(maxScale, scale));
    pos.x = -target.x * scale + pointer.x;
    pos.y = -target.y * scale + pointer.y;

    const size = {
      w: divRef.current!.offsetWidth,
      h: divRef.current!.offsetHeight,
    };

    if (pos.x > 0) pos.x = 0;
    if (pos.x + size.w * scale < size.w) pos.x = -size.w * (scale - 1);
    if (pos.y > 0) pos.y = 0;
    if (pos.y + size.h * scale < size.h) pos.y = -size.h * (scale - 1);

    scaleV.set(scale, 0);

    divRef.current!.style.transform = `translate(${pos.x}px,${pos.y}px) scale(${scale},${scale})`;
  };
  useEffect(() => {
    if (divRef.current) {
      const d = divRef.current;
      d.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        d.removeEventListener('wheel', handleWheel);
      };
    }
    return () => { };
  }, [divRef]);

  useEffect(() => {
    const el = document.getElementById(window.swellData.targetElement || 'rootId');

    if (el) {
      el.style.aspectRatio = '1920/920';
    }
  });

  return (
    <Box
      width="100%"
      height="100%"
      overflow="hidden"
      display="flex"
      justifyContent={!isDeviceWidthSmallerThenHeight ? 'none' : 'center'}
      alignItems={isDeviceWidthSmallerThenHeight ? 'none' : 'center'}
    >
      <div
        id="zoomBoxElement"
        ref={divRef}
        style={{
          position: 'relative',
          width: isDeviceWidthSmallerThenHeight ? 'auto' : '100%',
          height: !isDeviceWidthSmallerThenHeight ? 'auto' : '100%',
          transformOrigin: '0 0',
          aspectRatio: '1920/920',
        }}
      >
        {children}
      </div>
    </Box>
  );
};

interface Props {
  dummyData: BuildingData | null | undefined
}

const Main = ({
  dummyData
}: Props) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenTableModal, setIsOpenTableModal] = useState(false);
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  const [isModalMobileOpen, setIsModalMobileOpen] = useState(true);
  const [isOpenNoRes, setIsNoRes] = useState(false);
  const [isVisibleRooms, setIsVisibleRooms] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  const [_, setIsTouchDevice] = useState('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const isTouchDevice = false;
  const isDragging = useSelector((state: RootState) => state.carousel.isDragging);
  const [isOpenningUnit, setIsOpenningUnit] = useState(false);
  const toolTipInfo = useSelector((state: RootState) => state.carousel.toolTipInfo);
  const unitCardNumber = useSelector((state: RootState) => state.carousel.unitCardNumber);

  const isLoadingRender = useSelector((state: RootState) => state.carousel.isLoadingRender);

  const buildingId = useSelector((state: RootState) => state.carousel.buildingId);
  const zoomedUnit = useSelector((state: RootState) => state.carousel.zoomedUnit);

  const isUnitCardOpen = useSelector((state: RootState) => state.carousel.isCardOpen);
  const loadedImages = useRef<{ main: number[] }>({ main: [] });

  const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');

  const currentSlideRef = useRef(1);

  const target = useRef(null);

  const dispatch = useDispatch();

  let modelPath = 'models/apartments.glb';

  const { assetPath } = window.swellData;
  if (assetPath) {
    modelPath = `${assetPath}/${modelPath}`;
  }

  const { scene: modelScene } = useGLTF(modelPath);
  const {
    building1,
    building2,
    building3,
    building4,
    building5,
    building6,
    divider1,
    divider2,
    divider3,
    divider4,
    divider5,
    divider6
  } = useCategorizeChildrenInModal(modelScene.children);


  let buildingConfig: CameraData;

  switch (buildingId) {
    case 'building1':
      buildingConfig = building1Config;
      break;
    case 'building2':
      buildingConfig = building2Config;
      break;
    case 'building3':
      buildingConfig = building3Config;
      break;
    case 'building4':
      buildingConfig = building4Config;
      break;
    case 'building5':
      buildingConfig = building5Config;
      break;
    case 'building6':
      buildingConfig = building6Config;
      break;
    default:
      buildingConfig = building1Config;
      break;
  }

  const buildingData = dummyData && dummyData[buildingId as keyof typeof dummyData];;
  const unitData: UnitData | undefined = buildingData
    ? buildingData[unitCardNumber]
    : undefined;

  const realUnitNumber = unitData?.unitNumber;

  const isBuilding1Loading = useSelector((state: RootState) => !state.carousel.isLoadedFirstImages);

  const buildingLoading = (buildingId === 'building1' || buildingId === 'building2' || 
    buildingId === 'building3' || buildingId === 'building4' || buildingId === 'building5' || buildingId === 'building6') && isBuilding1Loading;

  const filters = useSelector((state: RootState) => state.filters);
  const isSomeUnitAvailable = useIsSomeUnitAvailable(buildingData!);

  const filtersTagHeight = isSmallerThan820 ? 62 : 87;

  const transitionY = filters.isFilterStarted ? `translateY(${(100 + filtersTagHeight) / 2}px)` : `translateY(${50}px)`;

  const toggleFilterPopup = () => {
    dispatch($carousel_actions.setUnitCard(false));
    setIsOpenFilter(!isOpenFilter);
  };
  const toggleTableModalPopup = () => setIsOpenTableModal(!isOpenTableModal);
  const closeTableModalPopup = () => setIsOpenTableModal(false);

  const toggleNoResPopup = () => setIsNoRes(!isOpenNoRes);
  const toggleOpenFilterPopup = () => setIsOpenFilter(true);
  const toggleUnitCardPopup = () => {
    dispatch($carousel_actions.setUnitCard(!isUnitCardOpen));
    dispatch(
      $carousel_actions
        .setToolTipInfo({
          toolTipId: '1',
          unitNumber: realUnitNumber?.toString() || '0',
        }),
    );
  };

  const handleRoomsVisibility = () => setIsVisibleRooms(!isVisibleRooms);
  const closeTableModal = () => setIsOpenTableModal(false);

  const handlePageLoaded = () => {
    setIsPageLoading(false);
  };

  const handlePageLoadedTrue = () => setIsPageLoading(true);

  const handlePageLoading = (loading: boolean) => {
    setIsPageLoading(loading)
  }

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

  const handleMouseUp = useCallback(() => {
    if (!isTouchDevice) {
      dispatch($carousel_actions.setDragging(false));
      setTimeout(() => {
        setIsOpenningUnit(false);
      }, 100);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);

    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  const handleMouseDown = () => {
    if (!isTouchDevice) {
      setTimeout(() => {
        setIsOpenningUnit(true);
      }, 100);
      dispatch($carousel_actions.setToolTip(false));
      dispatch($carousel_actions.setDragging(true));
    }
  };

  const updateCurrentSlide = (v: number, hard = false) => {
    let slideNumber = v
    switch (buildingId) {
      case 'building1':
        slideNumber = v + 119;
        break;
      case 'building2':
        slideNumber = v + 1;
        break;
      case 'building3':
        slideNumber = v + 1;
        break;
      case 'building4':
        slideNumber = v + 2;
        break;
      case 'building5':
        slideNumber = v + 61;
        break;
      case 'building6':
        slideNumber = v + 1;
        break;
    }
    slideNumber = slideNumber % 120
    if (slideNumber == 0) {
      slideNumber = 119;
    }
    if (v !== currentSlideRef.current || hard) {
      currentSlideRef.current = v;
      if (loadedImages.current.main.includes(slideNumber) || hard) {
        const element = buildingConfig[slideNumber as keyof typeof buildingConfig];
        const imageElement = buildingConfig[v as keyof typeof buildingConfig];
        // @ts-ignore debug
        window.GLOBAL_CACHE.updateSlide(imageElement.camera_name);
        // @ts-ignore debug
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        window.GLOBAL_CACHE.changeViewerCamera && window.GLOBAL_CACHE.changeViewerCamera(element);
      }
    }
  };

  const handleImageMouseMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const { movementX } = event;
    if (isDragging) {
      if (zoomedUnit !== '0') {
        dispatch($carousel_actions.updatedZoomUnit('0'));
      }
      let next = currentSlideRef.current;

      if (movementX > 0) {
        let updatedSlideId = currentSlideRef.current - 1;

        if (updatedSlideId <= 0) {
          updatedSlideId = 119;
        }
        next = updatedSlideId;
      } else if (movementX < 0) {
        let updatedSlideId = currentSlideRef.current + 1;
        if (updatedSlideId >= 120) {
          updatedSlideId = 1;
        }
        next = updatedSlideId;
      }
      updateCurrentSlide(next);
    }
  };

  let previousX: null | number = null;
  const handleImageTouchMouseMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      if (zoomedUnit !== '0') {
        dispatch($carousel_actions.updatedZoomUnit('0'));
      }
      let next = currentSlideRef.current;
      const currentX = event.touches[0].clientX;

      if (previousX !== null) {
        const deltaX = currentX - previousX;

        if (deltaX > 0) {
          let updatedSlideId = currentSlideRef.current - 1;
          if (updatedSlideId === 0) {
            updatedSlideId = 119;
          }
          next = updatedSlideId;
        } else if (deltaX < 0) {
          let updatedSlideId = currentSlideRef.current + 1;
          if (updatedSlideId === 120) {
            updatedSlideId = 1;
          }
          next = updatedSlideId;
        }
        updateCurrentSlide(next);
      }

      previousX = currentX;
    }
  };

  // useEffect(() => {
  //   if (!isSomeUnitAvailable && !isOpenFilter) {
  //     setIsNoRes(true);
  //     closeTableModalPopup();
  //   }
  // }, [isSomeUnitAvailable, filters, isOpenFilter]);

  // @ts-ignore
  window.GLOBAL_CACHE.updateCurrentSlide = updateCurrentSlide;

  return (
    <div className="app">
      <Loader isLoading={isPageLoading || buildingLoading || isLoadingRender} />
      { buildingId !== 'main' && (
        <>
          <Header
            toggleFilterPopup={toggleFilterPopup}
            toggleTableModalPopup={closeTableModalPopup}
            toggleTableModal={toggleTableModalPopup}
            setIsPageLoading={handlePageLoading}
          />
          <FilterModal
            setIsUnitModalMobileOpen={setIsModalMobileOpen}
            closeTableModal={closeTableModalPopup}
            togglePopup={toggleFilterPopup}
            isOpen={isOpenFilter}
            isOpenTableModal={isOpenTableModal}
            toggleTableModalPopup={toggleTableModalPopup}
            dummyData={dummyData!}
          />
          <NoResultModal
            isOpen={isOpenNoRes}
            togglePopup={toggleNoResPopup}
            toggleFilterModal={toggleOpenFilterPopup}
          />
        </>
      )}
        {/* {unitData && !window.swellData.unitData && (
          <UnitCard
            isModalMobileOpen={isModalMobileOpen}
            setIsModalMobileOpen={setIsModalMobileOpen}
            isOpen={isUnitCardOpen}
            togglePopup={toggleUnitCardPopup}
            bedrooms={unitData.bedrooms}
            bathrooms={unitData.bathrooms}
            square={unitData.square}
            price={unitData.price}
            unitNumber={realUnitNumber!}
          />
        )} */}
        {/* <BuildingCard /> */}
        <Zoom
          isOpenTableModal={isOpenTableModal}
          closeTableModal={closeTableModal}
          isVisible={isVisibleRooms}
          handleHideRooms={handleRoomsVisibility}
        />
        <ZoomBox>
        { buildingId === 'main' ? 
          <Box>
            <PanoView
              setIsPageLoading={handlePageLoading}
            />
            <Carousel
              loadedImages={loadedImages}
              isPageLoaded={isPageLoading}
              setPageLoaded={handlePageLoaded}
            />
          </Box>
          :
          <Box
            position="absolute"
            left="0"
            top="0"
            ref={(ref) => {
              ref?.addEventListener('touchmove', (e) => e.preventDefault());
            }}
            width="100%"
            onTouchMove={handleImageTouchMouseMove}
            height="100%"
            transition="all 0.3s ease-in-out"
            transform={isOpenHeader ? transitionY : 'translateY(0)'}
            display="flex"
            mt="auto"
            style={{ pointerEvents: 'auto' }}
            onPointerMove={handleImageMouseMove}
            onPointerDown={handleMouseDown}
            cursor={isOpenningUnit ? 'url(icons/rotate-icon.png) 25 25, auto' : toolTipInfo.isHovered ? 'pointer' : 'grab'}
          >
            <Carousel
              loadedImages={loadedImages}
              isPageLoaded={isPageLoading}
              setPageLoaded={handlePageLoaded}
            />
            <Box
              position="absolute"
              left="0"
              top="0"
              width="100%"
              height="100%"
              ref={target}
            >
              <Canvas
                resize={{ scroll: false }}
                style={{
                  opacity: 1,
                  pointerEvents: 'auto',
                }}
                dpr={[1, 2]}
                gl={{
                  alpha: true,
                  stencil: false,
                  depth: false,
                  antialias: false,
                }}
                camera={{
                  far: 2000,
                  fov: 45,
                }}
              >
                <Scene
                  setPageLoadedTrue={handlePageLoadedTrue}
                  isVisibleRooms={isVisibleRooms}
                  setPageLoaded={handlePageLoaded}
                  isPageLoaded={!isPageLoading}
                  dummyData={dummyData}
                  building1={building1}
                  building2={building2}
                  building3={building3}
                  building4={building4}
                  building5={building5}
                  building6={building6}
                  divider1={divider1}
                  divider2={divider2}
                  divider3={divider3}
                  divider4={divider4}
                  divider5={divider5}
                  divider6={divider6}
                />
              </Canvas>
            </Box>
          </Box>
          }
        </ZoomBox>
    </div>
  );
};

export default Main;
