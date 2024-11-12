import * as THREE from 'three';
import React, { useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import { BuildingData, UnitData } from '../types';
import { Filters } from '../../../constants/filters';
import filterUnit from '../../../helpers/filterUnit';
import { RootState } from '../../../store/store';

interface Props {
  model: THREE.Object3D<THREE.Object3DEventMap>;
  dummyData: BuildingData | null | undefined;
  filters: Filters;
  buildingNumber: string;
  materials: MaterialsCategorized,
  material: THREE.MeshBasicMaterial
  materialDisabled: THREE.MeshBasicMaterial,
  zoomMaterial: THREE.MeshBasicMaterial,
}

export interface MaterialsCategorized {
  'divider': THREE.MeshBasicMaterial,
  'available': THREE.MeshBasicMaterial,
  'unavailable': THREE.MeshBasicMaterial,
  'sold': THREE.MeshBasicMaterial,
  'deposit': THREE.MeshBasicMaterial,
  'coming_soon': THREE.MeshBasicMaterial,
  'future_phase': THREE.MeshBasicMaterial,
  'quick_delivery': THREE.MeshBasicMaterial,
}

const BuildingModel: React.FC<Props> = ({
  model, dummyData, filters, buildingNumber, material, materialDisabled, zoomMaterial, materials,
}) => {
  const zoomedUnit = useSelector((state: RootState) => state.carousel.zoomedUnit);
  const inputString = model.name;
  const parts = inputString.split('_');
  let unitNumber = +parts[parts.length - 1];
  switch (buildingNumber) {
    case 'building1':
      unitNumber = unitNumber - 200;
      break;
    case 'building2':
      unitNumber = unitNumber - 100;
      break;
    case 'building3':
      unitNumber = unitNumber - 300;
      break;
    case 'building4':
      unitNumber = unitNumber - 400;
      break;
    case 'building5':
      unitNumber = unitNumber - 600;
      break;
    case 'building6':
      unitNumber = unitNumber - 500;
      break;
  }
  const buildingData = dummyData && dummyData[buildingNumber];
  const unitData: UnitData | undefined = buildingData ? buildingData[unitNumber] : undefined;

  const isZoomedUnit = unitNumber.toString() === zoomedUnit;
  const primitiveRef = useRef(null);

  const isAvailable = useMemo(() => {
    return unitData ? filterUnit(unitData, filters) : false;
  }, [unitData, filters, dummyData]);

  const targetMaterial = useMemo(() => {
    if (unitData?.category) {
      const categoryMaterial = materials[unitData.category as keyof typeof materials];

      if (categoryMaterial) {
        return categoryMaterial;
      }
    }

    if (isAvailable) {
      if (isZoomedUnit) {
        return zoomMaterial;
      }
      return material;
    }
    return materialDisabled;
  }, [isAvailable, zoomedUnit]);

  return (
    <primitive
      object={model}
      ref={primitiveRef}
      userData={{ n: unitNumber.toString(), unitNumber: unitData?.unitNumber?.toString() || '', isAvailable }}
      material={targetMaterial}
    />

  );
};

export default BuildingModel;
