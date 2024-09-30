import * as THREE from 'three';

export type UnitData = {
  price: number;
  category?: string;
  square: number;
  bedrooms: number;
  bathrooms: number;
  floors: number;
  available: boolean;
  unitNumber: number;
};

export interface BuildingDataBuilding {
  [key: number]: UnitData
}
export type ExtraDataValue = UnitData & {
  unit: number,
  unitNumber: number,
  buildingName: string
};
export type ExtraData = BuildingDataBuilding & {
  [key: number]: ExtraDataValue
};

export type BuildingData = {
  building1: BuildingDataBuilding
  building2: BuildingDataBuilding
  building3: BuildingDataBuilding
};

export type FullUnitData = THREE.Object3D<THREE.Object3DEventMap> & UnitData;
