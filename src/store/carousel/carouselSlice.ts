/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/naming-convention */
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import {
  Camera, building1Config, building2Config, building3Config, building4Config, building5Config, building6Config,
} from '../../constants/cameras';

interface CaouselState {
  activeItem: string
  isZoomed: boolean
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
  zoomedUnit: string;
  buildingId: string;
}

export const initialState: CaouselState = {
  activeItem: '1',
  isZoomed: false,
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
  buildingId: 'main'
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
    setBuildingId: (state, action: PayloadAction<string>) => {
      state.buildingId = action.payload;
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
    updateBuildingDataNumber: (state, action: PayloadAction<0 | 1 | 2 | 3 | 4 | 5 | 6>) => {
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

  let data;
  switch (state.buildingId) {
    case 'building1':
      data = building1Config;
      break;
    case 'building2':
      data = building2Config;
      break;
    case 'building3':
      data = building3Config;
      break;
    case 'building4':
      data = building4Config;
      break;
    case 'building5':
      data = building5Config;
      break;
    case 'building6':
      data = building6Config;
      break;
    default:
      data = building1Config;
      break;
  }

  return data[state.activeItem as keyof typeof building1Config];
});

export const selectActiveData = createSelector(selectCarousel, (state) => {
  let data;
  
  switch (state.buildingId) {
    case 'building1':
      data = building1Config;
      break;
    case 'building2':
      data = building2Config;
      break;
    case 'building3':
      data = building3Config;
      break;
    case 'building4':
      data = building4Config;
      break;
    case 'building5':
      data = building5Config;
      break;
    case 'building6':
      data = building6Config;
      break;
    default:
      data = building1Config;
      break;
  }

  return Object.values(data).map((i) => ({ id: i.camera_name, src: i.image }));
});

export const $carousel_actions = carouselSlice.actions;
export default carouselSlice.reducer;
