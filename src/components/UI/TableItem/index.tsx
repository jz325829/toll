import {
  Box, Flex, Image, Text,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ExtraDataValue } from '../../../webgl/MainBuildings/types';
import { formatNumberWithCommas } from '../../../helpers/formatNumberWithCommas';
import { $carousel_actions } from '../../../store/carousel/carouselSlice';
import ArrowRightTableIcon from '../SvgIcons/ArrowRightTableIcon';

interface Props {
  unitData: ExtraDataValue;
  toggleTableModal: () => void
}

const TableItem: React.FC<Props> = ({ unitData, toggleTableModal }) => {
  const {
    unit, price, bedrooms, bathrooms, square, buildingName,
  } = unitData;

  const buildingNumber = buildingName === 'Bulding 1' ? 1 : 2;
  const dispatch = useDispatch();
  const handleClickView = () => {
    // toggleTableModal();
    dispatch($carousel_actions.updateBuildingDataNumber(buildingNumber));

    dispatch($carousel_actions.setToolTipInfo({ toolTipId: unit.toString(), unitNumber: unitData.unitNumber?.toString() || '0' }));
    dispatch($carousel_actions.setUnitCard(true));
  };

  return (
    <Flex color="black" border="1px solid #E9EDF0" p="10px 20px" borderRadius="16px">
      <Flex m="8px 0" justifyContent="center">
        <Image alt={`${unit + price}`} src="images/unit108.png" w="43px" h="75px" />
      </Flex>
      <Flex flexDirection="column" pl="20px">
        <Flex justifyContent="space-between" pt="5px">
          <Box color="#0C223F">
            <Text fontSize="18px" fontWeight={700} color="#0C223F">{unit}</Text>
            <Text fontSize="14px" fontWeight={500} color="#0C223F" lineHeight="20px">Build.name</Text>
          </Box>
          <Flex alignItems="flex-start" pt="3px">
            <Text fontWeight={700} fontSize="18px" color="#0C223F">
              $
              {formatNumberWithCommas(price.toString())}
            </Text>
          </Flex>
          <Flex
            mt="7px"
            borderRadius="32px"
            bgColor="#0070CD"
            justifyContent="center"
            alignItems="center"
            w="38px"
            h="38px"
            ml="10px"
          >
            <ArrowRightTableIcon
              cursor="pointer"
              mt="2px"
              onClick={handleClickView}
            />
          </Flex>
        </Flex>

        <Flex pt="10px" gap="30px">
          <Flex gap="8px">
            <Text color="#606A70" fontSize="14px" fontWeight={500}>Sq.ft</Text>
            <Text color="#0C223F" pt="1px" fontSize="14px" fontWeight={700}>{square}</Text>
          </Flex>
          <Flex gap="8px">
            <Text color="#606A70" fontSize="14px" fontWeight={500}>Bedr.</Text>
            <Text color="#0C223F" pt="1px" fontSize="14px" fontWeight={700}>{bedrooms}</Text>
          </Flex>
          <Flex gap="8px">
            <Text color="#606A70" fontSize="14px" fontWeight={500}>Baths</Text>
            <Text color="#0C223F" pt="1px" fontSize="14px" fontWeight={700}>{bathrooms}</Text>
          </Flex>
        </Flex>
      </Flex>

    </Flex>
  );
};

export default TableItem;
