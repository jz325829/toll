/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  mainviewConfig, version2Building1Config, version2Building2Config, version2Building3Config,
} from '../../constants/version2-cameras';
import { RootState } from '../store';
import {
  Camera, camerasConfig, building1Config, building2Config,
} from '../../constants/cameras';

interface CaouselState {
  activeItem: string
  isZoomed: boolean
  bulding: '1' | '2' | 'main' | '3'
  toolTipInfo: {
    isHovered: boolean;
    toolTipId: string;
    unitNumber: string;
  }
  unitCardNumber: number,
  isCardOpen: boolean
  isDragging: boolean
  isLoadedFirstImages: boolean;
  isGoingBack: boolean;
  buildingDataNumber: 0 | 1 | 2 | 3;
  isNoDataFound: boolean;
  isLoadingRender: boolean;
  zoomedUnit: string
}

export const initialState: CaouselState = {
  activeItem: '1',
  isZoomed: false,
  bulding: 'main',
  toolTipInfo: {
    isHovered: false,
    toolTipId: '1',
    unitNumber: '1',
  },
  unitCardNumber: 0,
  isCardOpen: false,
  isDragging: false,
  isLoadedFirstImages: false,
  isGoingBack: false,
  buildingDataNumber: 0,
  isNoDataFound: false,
  isLoadingRender: false,
  zoomedUnit: '0',
};

const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setActiveItem: (state, action: PayloadAction<string>) => {
      state.activeItem = action.payload;
    },
    setZoomed: (state, action: PayloadAction<boolean>) => {
      state.isZoomed = action.payload;
    },
    setBuildingNumber: (state, action: PayloadAction<'1' | '2' | 'main' | '3'>) => {
      state.bulding = action.payload;
    },
    setToolTip: (state, action: PayloadAction<boolean>) => {
      const updatedToolTip = { ...state.toolTipInfo, isHovered: action.payload };
      state.toolTipInfo = updatedToolTip;
    },
    setToolTipInfo: (state, action: PayloadAction<{ toolTipId: string, unitNumber: string }>) => {
      const { isHovered } = state.toolTipInfo;
      state.toolTipInfo = { isHovered, ...action.payload };
    },
    setUnitCard: (state, action: PayloadAction<boolean>) => {
      state.isCardOpen = action.payload;
    },
    setDragging: (state, action: PayloadAction<boolean>) => {
      state.isDragging = action.payload;
    },
    setFirstLoaded: (state, action: PayloadAction<boolean>) => {
      state.isLoadedFirstImages = action.payload;
    },
    setIsGotBack: (state, action: PayloadAction<boolean>) => {
      state.isGoingBack = action.payload;
    },
    updateBuildingDataNumber: (state, action: PayloadAction<0 | 1 | 2 | 3>) => {
      state.buildingDataNumber = action.payload;
    },
    updateNoDataStatus: (state, action: PayloadAction<boolean>) => {
      state.isNoDataFound = action.payload;
    },
    updatedLoadingRender: (state, action: PayloadAction<boolean>) => {
      state.isLoadingRender = action.payload;
    },
    updatedZoomUnit: (state, action: PayloadAction<string>) => {
      state.zoomedUnit = action.payload;
    },
    updatedUnitCardInfo: (state, action: PayloadAction<number>) => {
      state.unitCardNumber = action.payload;
    },
  },
});

const selectCarousel = (state: RootState) => state.carousel;
export const selectActiveSlide = createSelector(selectCarousel, (state) => {
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  let data;
  if (isItSecondVersion) {
    switch (state.bulding) {
      case '1':
        data = version2Building1Config;
        break;
      case 'main':
        data = mainviewConfig;
        break;
      case '2':
        data = version2Building2Config;
        break;
      case '3':
        data = version2Building3Config;
        break;
      default:
        data = mainviewConfig;
        break;
    }
  } else {
    switch (state.bulding) {
      case '1':
        data = building1Config;
        break;
      case 'main':
        data = camerasConfig;
        break;
      case '2':
        data = building2Config;
        break;
      default:
        data = camerasConfig;
        break;
    }
  }

  return data[state.activeItem as keyof typeof camerasConfig];
});

export const selectActiveData = createSelector(selectCarousel, (state) => {
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';
  let data;
  if (isItSecondVersion) {
    switch (state.bulding) {
      case '1':
        data = version2Building1Config;
        break;
      case 'main':
        data = mainviewConfig;
        break;
      case '2':
        data = version2Building2Config;
        break;
      case '3':
        data = version2Building3Config;
        break;
      default:
        data = mainviewConfig;
        break;
    }
  } else {
    switch (state.bulding) {
      case '1':
        data = building1Config;
        break;
      case 'main':
        data = camerasConfig;
        break;
      case '2':
        data = building2Config;
        break;
      default:
        data = camerasConfig;
        break;
    }
  }

  return Object.values(data).map((i) => ({ id: i.camera_name, src: i.image }));
});

export const $carousel_actions = carouselSlice.actions;
export default carouselSlice.reducer;
