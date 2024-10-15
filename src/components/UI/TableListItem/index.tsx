/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-nested-ternary */
import {
  Box, Flex, Image, Text, useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { findOffsets } from '../../../webgl/helpers/findOffsets';
import { ExtraDataValue } from '../../../webgl/MainBuildings/types';
import { formatNumberWithCommas } from '../../../helpers/formatNumberWithCommas';
import { $carousel_actions } from '../../../store/carousel/carouselSlice';
import styles from './styles.module.css';
import { UnitToRenderBuilding } from 'src/constants/cameras';

interface Props {
  unitData: ExtraDataValue;
  closeTableModal: () => void
  setIsUnitModalMobileOpen: (isOpen: boolean) => void;

}

const TableListItem: React.FC<Props> = ({
  unitData,
  closeTableModal,
  setIsUnitModalMobileOpen,
}) => {
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  const {
    unit, unitNumber, price, bedrooms, bathrooms, square, buildingName,
  } = unitData;
  const updatedUnit = unitNumber < 10 ? `0${unitNumber}` : `${unitNumber}`;

  const dispatch = useDispatch();
  const [isLoadingUnit, setIsloadingUnit] = useState(false);

  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');
  let buildingNumber: 1 | 2 | 3 | 4 | 5 | 6;
  let updatedBuildingNumber: string;
  switch (buildingName) {
    case 'Building 1':
      buildingNumber = 1;
      updatedBuildingNumber = 'building1';
      break;
    case 'Building 2':
      updatedBuildingNumber = 'building2';
      buildingNumber = 2;
      break;
    case 'Building 3':
      updatedBuildingNumber = 'building3';
      buildingNumber = 3;
      break;
    case 'Building 4':
      updatedBuildingNumber = 'building4';
      buildingNumber = 4;
      break;
    case 'Building 5':
      updatedBuildingNumber = 'building5';
      buildingNumber = 5;
      break;
    case 'Building 6':
      updatedBuildingNumber = 'building6';
      buildingNumber = 6;
      break;
    default:
      updatedBuildingNumber = 'building1';
      buildingNumber = 1;
      break;
  }
  const handleClickView = async () => {
    if (isSmallerThan844) {
      closeTableModal();
      setIsUnitModalMobileOpen(false);
    }

    setIsloadingUnit(true);
    let updaetedUnitModel: string;
    // switch (buildingName) {
    //   case 'Building 1':
    //     updaetedUnitModel = `Build1_Part_${unitNumber < 10 ? '0' : ''}${unitNumber}`;
    //     break;
    //   case 'Building 2':
    //     updaetedUnitModel = `Build2_Part_${unitNumber < 10 ? '0' : ''}${unitNumber}`;
    //     break;
    //   default:
    //     updaetedUnitModel = `Build1_Part_${unitNumber < 10 ? '0' : ''}${unitNumber}`;
    //     break;
    // }

    let unitToRenderBuilding: UnitToRenderBuilding;

    // switch (buildingName) {
    //   case 'Building 1':
    //     unitToRenderBuilding = UNIT_TO_RENDER_BUILDING_1;
    //     break;
    //   case 'Building 2':
    //     unitToRenderBuilding = UNIT_TO_RENDER_BUILDING_2;
    //     break;
    //   default:
    //     unitToRenderBuilding = UNIT_TO_RENDER_BUILDING_1;
    //     break;
    // }

    const { offsetY, offsetX } = findOffsets(
      buildingNumber,
      unit,
      isSmallerThan480,
      isSmallerThan844,
    );
    dispatch($carousel_actions.updatedUnitCardInfo(unit));

    dispatch($carousel_actions.setBuildingId(updatedBuildingNumber));
    dispatch($carousel_actions.setZoomed(true));
    dispatch($carousel_actions.updateBuildingDataNumber(buildingNumber));

    dispatch($carousel_actions.updatedLoadingRender(true));
    dispatch($carousel_actions.setToolTipInfo({ toolTipId: unit.toString(), unitNumber: unitNumber?.toString() || '0' }));
    dispatch($carousel_actions.updatedZoomUnit(unit.toString()));

    await new Promise((r) => { setTimeout(r, 500); });

    setTimeout(() => {
      // @ts-ignore

      window.GLOBAL_CACHE.ttt(updaetedUnitModel, -0, 0, true);
    }, 0);
    setTimeout(() => {
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(unitToRenderBuilding[unit], true);
      dispatch($carousel_actions.updatedLoadingRender(false));

      dispatch($carousel_actions.setUnitCard(true));
      // @ts-ignore

      window.GLOBAL_CACHE.ttt(unitModelName, -offsetX, offsetY);
    }, 400);
    setIsloadingUnit(false);
  };

  return (
    <Box color="black" border="1px solid #E9EDF0" pt="10px" borderRadius="16px">
      <Flex justifyContent="space-between" p="10px 25px 10px 22px">
        <Box color="#0C223F">
          <Text fontSize="18px" fontWeight={700} color="#0C223F">{unit}</Text>
          <Text fontSize="14px" fontWeight={500} color="#0C223F" lineHeight="20px">Building name</Text>
        </Box>
        <Flex alignItems="flex-start" pt="3px">
          <Text fontWeight={700} fontSize="18px" color="#0C223F">
            $
            {formatNumberWithCommas(price.toString())}
          </Text>
        </Flex>

      </Flex>

      <Flex m="8px 0" justifyContent="center">
        <Image alt={`${unit + price}`} src="images/unit108.png" w="96px" h="168px" />
      </Flex>

      <Flex padding="20px 10px 0px 25px" className={styles['info-wrapper']}>
        <Flex gap="5px" flexDirection="column">
          <Text color="#606A70" fontSize="14px" fontWeight={500}>Square feet</Text>
          <Text color="#0C223F" fontSize="14px" fontWeight={700}>{square}</Text>
        </Flex>
        <Flex gap="5px" flexDirection="column">
          <Text color="#606A70" fontSize="14px" fontWeight={500}>Bedrooms</Text>
          <Text color="#0C223F" fontSize="14px" fontWeight={700}>{bedrooms}</Text>
        </Flex>
        <Flex gap="5px" flexDirection="column">
          <Text color="#606A70" fontSize="14px" fontWeight={500}>Baths</Text>
          <Text color="#0C223F" fontSize="14px" fontWeight={700}>{bathrooms}</Text>
        </Flex>
      </Flex>
      <Box p={(isSmallerThan844 && !isSmallerThan480) ? '16px 0 18px' : '16px 0 15px'} bgColor="#0070CD33" mt="22px" borderBottomRadius="16px">
        <Text
          textAlign="center"
          color="#0C223F"
          fontWeight={500}
          fontSize="18px"
          lineHeight="24px"
          cursor="pointer"
          onClick={!isLoadingUnit ? handleClickView : undefined}
        >
          View Home
        </Text>
      </Box>
    </Box>
  );
};

export default TableListItem;
