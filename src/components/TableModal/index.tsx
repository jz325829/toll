/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from '@reduxjs/toolkit';
import SideBar from '../UI/SideBar';
import CancelIcon from '../UI/SvgIcons/CancelIcon';
import ButtonGroup from '../UI/ButtonGroup';
import { RootState } from '../../store/store';
import { BuildingData, ExtraDataValue } from '../../webgl/MainBuildings/types';
import { convertDataToArray } from '../../helpers/convertDataToArray';
import Table from '../Table';
import styles from './styles.module.css';
import Dropdown from '../UI/DropDown';
import SolidIcon from '../UI/SvgIcons/SolidIcon';
import GridIcon from '../UI/SvgIcons/GridIcon';
import TableListItem from '../UI/TableListItem';
import ArrowLeftIcon from '../UI/SvgIcons/ArrowLeftIcon';

import { $carousel_actions } from '../../store/carousel/carouselSlice';

interface Props {
  isOpenTable: boolean;
  toggleTableModal: () => void;
  toggleFilterModal: () => void;
  closeTableModal: () => void
  dummyData: BuildingData;
  setIsUnitModalMobileOpen: (isOpen: boolean) => void;

}

const TableModal: React.FC<Props> = ({
  isOpenTable,
  toggleTableModal,
  dummyData,
  toggleFilterModal,
  closeTableModal,
  setIsUnitModalMobileOpen,
}) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);
  const buildingId = useSelector((state: RootState) => state.carousel.buildingId);
  const isZoomed = useSelector((state: RootState) => state.carousel.isZoomed);

  const buildingIndex = useSelector((state: RootState) => state.carousel.buildingDataNumber);

  const [viewMode, setViewMode] = useState('list');
  const [convertedData, setConvertedData] = useState<ExtraDataValue[]>([]);
  const [sorting, setSorting] = useState('Sort by $$$-$');
  const [isModalMobileOpen, setIsModalMobileOpen] = useState(false);
  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const selectItems = [
    '$$$ - $',
    '$ - $$$',
    'Max - Min Sq Ft',
    'Min - Max Sq Ft',
  ];

  useEffect(() => {
    if (dummyData) {
      setConvertedData(convertDataToArray(dummyData, buildingId, sorting, filters));
    }
  }, [
    dummyData,
    buildingId,
    isOpenTable,
    sorting,
    filters,
    buildingIndex,
    isZoomed,
  ]);

  useEffect(() => {
    if (!isSmallerThan844) {
      setIsModalMobileOpen(true);
    }
  }, [isSmallerThan844]);

  const data = React.useMemo(
    () => {
      let sortedData: ExtraDataValue[] = convertedData.sort((a, b) => b.price - a.price);
      switch (sorting) {
        case '$$$ - $':
          sortedData = convertedData.sort((a, b) => b.price - a.price);
          break;
        case '$ - $$$':
          sortedData = convertedData.sort((a, b) => a.price - b.price);
          break;
        case 'Max - Min Sq Ft':
          sortedData = convertedData.sort((a, b) => b.square - a.square);
          break;
        case 'Min - Max Sq Ft':
          sortedData = convertedData.sort((a, b) => a.square - b.square);
          break;
        default:
          sortedData = convertedData;
      }
      return sortedData;
    },
    [
      dummyData,
      convertedData,
      buildingId,
      isOpenTable,
      sorting,
      filters,
      buildingIndex,
    ],
  );

  useEffect(() => {
    if (data.length === 0) {
      dispatch($carousel_actions.updateNoDataStatus(true));
    } else {
      dispatch($carousel_actions.updateNoDataStatus(false));
    }
  }, [data]);

  const changeViewToList = () => {
    setViewMode('list');
  };

  const changeViewToIcons = () => {
    setViewMode('icons');
  };

  const handleSelectSort = (value: string) => {
    setSorting(value);
  };

  const togleMobileModal = (open: boolean) => setIsModalMobileOpen(open);

  const toggleSideBar = () => {
    if (isSmallerThan844 && !isModalMobileOpen) {
      setIsModalMobileOpen(true);
    } else if (isSmallerThan844 && isModalMobileOpen) {
      setIsModalMobileOpen(false);
    }
    toggleTableModal();
  };

  const toggleGoBack = () => {
    togleMobileModal(false);
    toggleTableModal();
    toggleFilterModal();
  };

  return (
    <SideBar
      isOpen={isOpenTable}
      isUsingScrollBar
      togglePopup={toggleTableModal}
      style={{
        width: '100%',
        overflowY: (isModalMobileOpen || !isSmallerThan844) ? 'auto' : 'hidden',
        padding: '0',
      }}
      setIsModalMobileOpen={togleMobileModal}
      isModalMobileOpen={isModalMobileOpen}
    >
      <Box className={styles['head-wrapper']}>
        <Box
          style={{
            fontFamily: 'GothamSSm',
            color: '#0C223F',
            width: '100%',
          }}
          className={styles.head}
        >
          <Flex gap="5px" p={isSmallerThan844 ? '15px 30px 0' : '0 30px'}>
            <Box pt="5px">
              <ButtonGroup icon={<ArrowLeftIcon />} onClick={toggleGoBack} backgroundColor="#fff !important" border="1px solid #E9EDF0" />
            </Box>
            <Flex justifyContent="space-between" width="100%" ml="10px">
              <Flex
                backgroundColor="#fff"
                color="#0C223F"
                flexDirection="column"
                padding="8px 0"
                gap="3px"
                fontSize="18px"
                lineHeight="22px"
                display="inline-flex"
                justifyContent="space-between"
                fontWeight={700}
              >
                <Text>Results for </Text>
                <Text>applied filters</Text>
              </Flex>
              <Box pt="5px">
                <ButtonGroup icon={<CancelIcon />} onClick={toggleSideBar} backgroundColor="#fff !important" border="1px solid #E9EDF0" />
              </Box>
            </Flex>

          </Flex>
        </Box>
        <Flex justifyContent="space-between" pr="6px" gap={isSmallerThan480 ? '10px' : '10px'} p={isSmallerThan844 ? '95px 30px 15px' : '105px 30px 25px'}>
          <Box width="100%">
            <Dropdown items={selectItems} callback={handleSelectSort} defaulValue="$$$-$" />
          </Box>
          <Flex gap="5px">
            <Box
              p={isSmallerThan480 ? '12.5px 14.5px 11px' : '13.5px 14.5px 11px'}
              border="1px solid #E9EDF0"
              cursor="pointer"
              onClick={changeViewToList}
              _hover={{ opacity: 0.8 }}
              bgColor={viewMode === 'list' ? '#0070CD33' : '#fff'}
              borderRadius="32px"
            >
              <SolidIcon fill={viewMode === 'list' ? '#0070CD' : '#000'} stroke={viewMode === 'list' ? '#0070CD' : '#000'} />
            </Box>
            <Box
              p={isSmallerThan480 ? '12.5px 14.5px 11px' : '13.5px 14.5px 11px'}
              _hover={{ opacity: 0.8 }}
              border="1px solid #E9EDF0"
              cursor="pointer"
              onClick={changeViewToIcons}
              borderRadius="32px"
              bgColor={viewMode === 'icons' ? '#0070CD33' : '#fff'}
            >
              <GridIcon fill="none" stroke={viewMode === 'icons' ? '#000' : '#73777E'} />
            </Box>
          </Flex>
        </Flex>
        <Box display={viewMode === 'list' ? 'block' : 'none'}>
          <Table
            data={data}
            toggleTableModal={toggleTableModal}
            closeTableModal={closeTableModal}
            setIsUnitModalMobileOpen={setIsUnitModalMobileOpen}
          />
        </Box>
        <Box display={viewMode === 'list' ? 'none' : 'block'}>
          <SimpleGrid columns={isSmallerThan844 ? isSmallerThan480 ? 1 : 2 : 1} gap="22px" padding="0 30px">
            {data.map((unitData) => (
              <TableListItem
                key={nanoid()}
                setIsUnitModalMobileOpen={setIsUnitModalMobileOpen}
                unitData={unitData}
                closeTableModal={closeTableModal}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Box>

    </SideBar>
  );
};

export default TableModal;
