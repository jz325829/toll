import { BuildingData } from '../../webgl/MainBuildings/types';

export const findAllAvialableUnits = (dummyData: BuildingData) => {
  const building1Data = Object.values(dummyData.building1);
  const building2Data = Object.values(dummyData.building2);

  const countBuilding1Available: number = building1Data.reduce((count, unit) => {
    if (unit.category && (unit.category === 'available' || unit.category === 'quick_delivery')) {
      return count + 1;
    }
    return count;
  }, 0);

  const countBuilding1: number = building1Data.length;

  const countBuilding2Available: number = building2Data.reduce((count, unit) => {
    if (unit.category && (unit.category === 'available' || unit.category === 'quick_delivery')) {
      return count + 1;
    }
    return count;
  }, 0);

  const countBuilding2: number = building2Data.length;

  const building3Data = Object.values(dummyData.building3);
  
  const countBuilding3Available: number = building3Data.reduce((count, unit) => {
    if (unit.category && (unit.category === 'available' || unit.category === 'quick_delivery')) {
      return count + 1;
    }
    return count;
  }, 0);
  
  const countBuilding3 = building3Data.length;

  const building4Data = Object.values(dummyData.building4);
  
  const countBuilding4Available: number = building4Data.reduce((count, unit) => {
    if (unit.category && (unit.category === 'available' || unit.category === 'quick_delivery')) {
      return count + 1;
    }
    return count;
  }, 0);
  
  const countBuilding4 = building4Data.length;

  const building5Data = Object.values(dummyData.building5);
  
  const countBuilding5Available: number = building5Data.reduce((count, unit) => {
    if (unit.category && (unit.category === 'available' || unit.category === 'quick_delivery')) {
      return count + 1;
    }
    return count;
  }, 0);
  
  const countBuilding5 = building5Data.length;

  const building6Data = Object.values(dummyData.building6);
  
  const countBuilding6Available: number = building5Data.reduce((count, unit) => {
    if (unit.category && (unit.category === 'available' || unit.category === 'quick_delivery')) {
      return count + 1;
    }
    return count;
  }, 0);
  
  const countBuilding6 = building6Data.length;

  return {
    countBuilding1,
    countBuilding2,
    countBuilding3,
    countBuilding4,
    countBuilding5,
    countBuilding6,
    countBuilding1Available,
    countBuilding2Available,
    countBuilding3Available,
    countBuilding4Available,
    countBuilding5Available,
    countBuilding6Available,
  };
};
