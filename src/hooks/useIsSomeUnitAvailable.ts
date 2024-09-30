import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import { BuildingDataBuilding, UnitData } from '../webgl/MainBuildings/types';
import filterUnit from '../helpers/filterUnit';

const useIsSomeUnitAvailable = (data: BuildingDataBuilding) => {
  const filters = useSelector((state: RootState) => state.filters);

  if (data) {
    return Object.values(data).some((unit: UnitData) => {
      return filterUnit(unit, filters);
    });
  }

  return true;
};

export default useIsSomeUnitAvailable;
