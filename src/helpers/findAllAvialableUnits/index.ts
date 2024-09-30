import { BuildingData } from '../../webgl/MainBuildings/types';

export const findAllAvialableUnits = (dummyData: BuildingData) => {
  const building1Data = Object.values(dummyData.building1);
  const building2Data = Object.values(dummyData.building2);
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  const countBuilding1Available: number = building1Data.reduce((count, obj) => {
    if (obj.category === 'available') {
      return count + 1;
    }
    return count;
  }, 0);

  const countBuilding1: number = building1Data.length;

  const countBuilding2Available: number = building2Data.reduce((count, obj) => {
    if (obj.category === 'available') {
      return count + 1;
    }
    return count;
  }, 0);

  const countBuilding2: number = building2Data.length;

  if (isItSecondVersion) {
    const building3Data = Object.values(dummyData.building3);
    const countBuilding3Available: number = building3Data.reduce((count, obj) => {
      if (obj.category === 'available') {
        return count + 1;
      }
      return count;
    }, 0);

    const countBuilding3 = building3Data.length;

    return {
      countBuilding1Available,
      countBuilding1,
      countBuilding2,
      countBuilding3,
      countBuilding2Available,
      countBuilding3Available,
    };
  }

  return {
    countBuilding1Available, countBuilding1, countBuilding2, countBuilding2Available,
  };
};
