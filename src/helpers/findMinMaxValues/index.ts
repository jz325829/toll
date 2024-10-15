/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildingData, UnitData } from '../../webgl/MainBuildings/types';

export function findMinMaxValues(dummyData: BuildingData, buildingId: string) {
  let dataToArray: any = Object.values(dummyData);
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  switch (buildingId) {
    case 'building1':
      dataToArray = Object.values(dummyData.building1);
      break;
    case 'building2':
      dataToArray = Object.values(dummyData.building2);
      break;
    case 'building3':
      dataToArray = Object.values(dummyData.building3);
      break;
    case 'building4':
      dataToArray = Object.values(dummyData.building4);
      break;
    case 'building5':
      dataToArray = Object.values(dummyData.building5);
      break;
    case 'building6':
      dataToArray = Object.values(dummyData.building6);
      break;
    default:
      dataToArray = Object.values(dummyData.building1);
  }

  return dataToArray.reduce((acc, curr) => {
    if (curr.price < acc.price.min || acc.price.min === undefined) {
      acc.price.min = curr.price;
    }
    if (curr.price > acc.price.max || acc.price.max === undefined) {
      acc.price.max = curr.price;
    }

    if (curr.square < acc.square.min || acc.square.min === undefined) {
      acc.square.min = curr.square;
    }
    if (curr.square > acc.square.max || acc.square.max === undefined) {
      acc.square.max = curr.square;
    }

    return acc;
  }, { price: { min: undefined, max: undefined }, square: { min: undefined, max: undefined } });
}
