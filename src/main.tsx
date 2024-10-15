/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import * as THREE from 'three';
import App from './App';
import './index.scss';
import './assets/fonts/fonts.css';
import { store } from './store/store';
import { BuildingData } from './webgl/MainBuildings/types';
import { Camera, CameraObject } from './constants/cameras';

declare global {
  interface Window {
    GLOBAL_CACHE: {
      focusUnitOnScreen: (
        unit: string,
        offsetX: number,
        offsetY: number,
        isRefreshing?: boolean
      ) => void,
      setManualyScale: (
        posX: number,
        posY: number,
        nextScale: number,
        offsetX: number,
        offsetY: number
      ) => void,
      updateSlide: (current: string) => void,
      changeViewerCamera: (data: Camera, objectToFind?: CameraObject) => void,
      updateCurrentSlide: (v: number, hard?: boolean) => void
    } & Record<string, any>

    swellData: {
      toll: {
        showUnit: (unitId: string, building: string) => void,
        showImage: (id: string) => void,
      },
      assetPath: string | null
      colorsConfig: Record<string, string>
      targetElement: string | null
      unitData: BuildingData | null
    },
    scene: THREE.Scene
    sceneCamera: THREE.Camera & {
      manual?: boolean | undefined;
    },
  }
}
const rootId = window.swellData.targetElement;

const renderApp = () => {
  if (window.resetObjectHierarhy) {
    window.resetObjectHierarhy();
  }

  window.GLOBAL_CACHE = {} as any;

  ReactDOM.createRoot(document.getElementById(rootId || 'root')!).render(
    <Provider store={store()}>
      <ChakraProvider cssVarsRoot={`#${rootId}`} resetCSS={false} disableGlobalStyle>
        <App />
      </ChakraProvider>
    </Provider>,
  );
};

window.swell.renderApp = renderApp;
