/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unstable-nested-components */
import React, {
  ReactNode, useRef, useState,
} from 'react';
import {
  Box,
  Flex,
  Text,
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useMediaQuery,
} from '@chakra-ui/react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useDispatch } from 'react-redux';
import { findOffsets } from '../../webgl/helpers/findOffsets';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import { ExtraDataValue } from '../../webgl/MainBuildings/types';
import { formatNumberWithCommas } from '../../helpers/formatNumberWithCommas';
import ArrowRightTableIcon from '../UI/SvgIcons/ArrowRightTableIcon';
import { UNIT_TO_RENDER_BUILDING_1, UNIT_TO_RENDER_BUILDING_2, UnitToRenderBuilding } from '../../constants/cameras';
import { VERSION2_TO_RENDER_BUILDING_1, VERSION2_TO_RENDER_BUILDING_2, VERSION2_TO_RENDER_BUILDING_3 } from '../../constants/version2-cameras';

interface Props {
  data: ExtraDataValue[];
  toggleTableModal: () => void;
  closeTableModal: () => void;
  setIsUnitModalMobileOpen: (isOpen: boolean) => void;

}

const Table: React.FC<Props> = ({
  data, toggleTableModal, closeTableModal, setIsUnitModalMobileOpen,
}) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';
  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const dispatch = useDispatch();
  const [isLoadingUnit, setIsloadingUnit] = useState(false);

  const handleClickView = async (buildingNumber: 0 | 1 | 2 | 3, unitNumber: number, unit: number, updatedBuildingNumber: '1' | '2' | 'main' | '3', isSmallerThan481: boolean, isSmallerThan820: boolean) => {
    if (isSmallerThan820) {
      closeTableModal();
      setIsUnitModalMobileOpen(false);
    }

    const updatedUnit = unitNumber < 10 ? `0${unitNumber}` : `${unitNumber}`;

    let unitToRenderBuilding: UnitToRenderBuilding;

    let updaetedUnitModel: string;
    if (isItSecondVersion) {
      switch (updatedBuildingNumber) {
        case '1':
          updaetedUnitModel = `SM_Building_1_Part_${updatedUnit}`;
          break;
        case '2':
          updaetedUnitModel = `SM_Building_2_Part_${updatedUnit}`;
          break;
        case '3':
          updaetedUnitModel = `SM_Building_3_Part_${updatedUnit}`;
          break;
        default:
          updaetedUnitModel = `SM_Building_1_Part_${updatedUnit}`;
          break;
      }
    } else {
      switch (updatedBuildingNumber) {
        case '1':
          updaetedUnitModel = `Build1_Part_${unitNumber < 10 ? '0' : ''}${unitNumber}`;
          break;
        case '2':
          updaetedUnitModel = `Build2_Part_${unitNumber < 10 ? '0' : ''}${unitNumber}`;
          break;
        default:
          updaetedUnitModel = `Build1_Part_${unitNumber < 10 ? '0' : ''}${unitNumber}`;
          break;
      }
    }

    if (isItSecondVersion) {
      switch (updatedBuildingNumber) {
        case '1':
          unitToRenderBuilding = VERSION2_TO_RENDER_BUILDING_1;
          break;
        case '2':
          unitToRenderBuilding = VERSION2_TO_RENDER_BUILDING_2;
          break;
        case '3':
          unitToRenderBuilding = VERSION2_TO_RENDER_BUILDING_3;
          break;
        default:
          unitToRenderBuilding = VERSION2_TO_RENDER_BUILDING_1;
          break;
      }
    } else {
      switch (updatedBuildingNumber) {
        case '1':
          unitToRenderBuilding = UNIT_TO_RENDER_BUILDING_1;
          break;
        case '2':
          unitToRenderBuilding = UNIT_TO_RENDER_BUILDING_2;
          break;
        default:
          unitToRenderBuilding = UNIT_TO_RENDER_BUILDING_1;
          break;
      }
    }

    setIsloadingUnit(true);

    const { offsetY, offsetX } = findOffsets(
      buildingNumber,
      unit,
      isSmallerThan481,
      isSmallerThan820,
    );
    dispatch($carousel_actions.updatedUnitCardInfo(unit));

    dispatch($carousel_actions.setBuildingNumber(updatedBuildingNumber));
    dispatch($carousel_actions.setZoomed(true));

    dispatch($carousel_actions.updateBuildingDataNumber(buildingNumber));

    dispatch($carousel_actions.updatedLoadingRender(true));
    dispatch($carousel_actions.setToolTipInfo({ toolTipId: unit.toString(), unitNumber: unitNumber.toString() }));
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
      window.GLOBAL_CACHE.ttt(updaetedUnitModel, -offsetX, offsetY);
    }, 400);
    setIsloadingUnit(false);
  };

  const columns = React.useMemo<ColumnDef<unknown>[]>(
    () => [
      {
        header: () => <span>Home</span>,
        accessorKey: 'unit',
        size: isSmallerThan844 ? (isSmallerThan480 ? 70 : 50) : 110,
        cell: (cell) => {
          const { buildingName, unit, unitNumber } = cell.row.original;
          const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
          const [isSmallerThan481] = useMediaQuery('(max-width: 480px)');
          let buildingNumber: 1 | 2 | 3;
          let updatedBuildingNumber: '1' | '2' | '3';
          switch (buildingName) {
            case 'Building 1':
              buildingNumber = 1;
              updatedBuildingNumber = '1';
              break;
            case 'Building 2':
              updatedBuildingNumber = '2';
              buildingNumber = 3;
              break;
            case 'Building 3':
              updatedBuildingNumber = '3';
              buildingNumber = 3;
              break;
            default:
              updatedBuildingNumber = '1';
              buildingNumber = 1;
              break;
          }

          return (
            <Box onClick={(isSmallerThan481 && !isLoadingUnit) ? () => handleClickView(buildingNumber, unitNumber, unit, updatedBuildingNumber, isSmallerThan481, isSmallerThan820) : undefined}>
              <Flex fontSize="12px" fontWeight={500} color="#0C223F">
                <Text>
                  Residence
                </Text>
                <Text pl="3px">
                  {unitNumber}
                </Text>
              </Flex>
              <Text fontSize="12px" color="#73777E" fontWeight={300}>
                {buildingName}
              </Text>
            </Box>

          );
        },
      },
      {
        header: () => <span>Bed</span>,
        accessorKey: 'bedrooms',
        size: isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 17,
        cell: (cell) => {
          const value = cell.getValue();
          const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
          const { unit, buildingName, unitNumber } = cell.row.original;
          const [isSmallerThan481] = useMediaQuery('(max-width: 480px)');
          let buildingNumber: 1 | 2 | 3;
          let updatedBuildingNumber: '1' | '2' | '3';
          switch (buildingName) {
            case 'Building 1':
              buildingNumber = 1;
              updatedBuildingNumber = '1';
              break;
            case 'Building 2':
              updatedBuildingNumber = '2';
              buildingNumber = 3;
              break;
            case 'Building 3':
              updatedBuildingNumber = '3';
              buildingNumber = 3;
              break;
            default:
              updatedBuildingNumber = '1';
              buildingNumber = 1;
              break;
          }
          return (
            <Box onClick={(isSmallerThan481 && !isLoadingUnit) ? () => handleClickView(buildingNumber, unitNumber, unit, updatedBuildingNumber, isSmallerThan481, isSmallerThan820) : undefined}>
              <Text
                fontSize="12px"
                color="#0C223F"
                fontWeight={500}
                textAlign="center"
                pb="7px"
              >
                {(value) as ReactNode}
              </Text>
            </Box>

          );
        },
      },
      {
        header: () => <span>Bath</span>,
        accessorKey: 'bathrooms',
        isNumeric: true,
        size: isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 17,
        cell: (cell) => {
          const value = cell.getValue();
          const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
          const { unit, buildingName, unitNumber } = cell.row.original;
          const [isSmallerThan481] = useMediaQuery('(max-width: 480px)');
          let buildingNumber: 1 | 2 | 3;
          let updatedBuildingNumber: '1' | '2' | '3';
          switch (buildingName) {
            case 'Building 1':
              buildingNumber = 1;
              updatedBuildingNumber = '1';
              break;
            case 'Building 2':
              updatedBuildingNumber = '2';
              buildingNumber = 3;
              break;
            case 'Building 3':
              updatedBuildingNumber = '3';
              buildingNumber = 3;
              break;
            default:
              updatedBuildingNumber = '1';
              buildingNumber = 1;
              break;
          }

          return (
            <Box onClick={(isSmallerThan481 && !isLoadingUnit) ? () => handleClickView(buildingNumber, unitNumber, unit, updatedBuildingNumber, isSmallerThan481, isSmallerThan820) : undefined}>
              <Text
                fontSize="12px"
                color="#0C223F"
                fontWeight={500}
                textAlign="center"
                pb="7px"
              >
                {(value) as ReactNode}
              </Text>
            </Box>

          );
        },
      },
      {
        header: () => <span>Sq.ft</span>,
        accessorKey: 'square',
        size: isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 50,
        cell: (cell) => {
          const value = cell.getValue();
          const [isSmallerThan481] = useMediaQuery('(max-width: 480px)');
          const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
          const { unit, buildingName } = cell.row.original;
          let buildingNumber: 1 | 2 | 3;
          let updatedBuildingNumber: '1' | '2' | '3';
          switch (buildingName) {
            case 'Building 1':
              buildingNumber = 1;
              updatedBuildingNumber = '1';
              break;
            case 'Building 2':
              updatedBuildingNumber = '2';
              buildingNumber = 3;
              break;
            case 'Building 3':
              updatedBuildingNumber = '3';
              buildingNumber = 3;
              break;
            default:
              updatedBuildingNumber = '1';
              buildingNumber = 1;
              break;
          }

          return (
            <Box onClick={(isSmallerThan481 && !isLoadingUnit) ? () => handleClickView(buildingNumber, unitNumber, unit, updatedBuildingNumber, isSmallerThan481, isSmallerThan820) : undefined}>
              <Text
                pb="7px"
                fontSize="12px"
                color="#0C223F"
                fontWeight={500}
                textAlign="center"
              >
                {(formatNumberWithCommas(value as string)) as ReactNode}
              </Text>
            </Box>

          );
        },
      },
      {
        header: () => <span>Price</span>,
        accessorKey: 'price',
        isNumeric: true,
        size: isSmallerThan844 ? 40 : 130,
        cell: (cell) => {
          const [isSmallerThan481] = useMediaQuery('(max-width: 480px)');
          const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');

          const value = `$${cell.getValue()}`;
          const { unit, buildingName, unitNumber } = cell.row.original;
          let buildingNumber: 1 | 2 | 3;
          let updatedBuildingNumber: '1' | '2' | '3';
          switch (buildingName) {
            case 'Building 1':
              buildingNumber = 1;
              updatedBuildingNumber = '1';
              break;
            case 'Building 2':
              updatedBuildingNumber = '2';
              buildingNumber = 3;
              break;
            case 'Building 3':
              updatedBuildingNumber = '3';
              buildingNumber = 3;
              break;
            default:
              updatedBuildingNumber = '1';
              buildingNumber = 1;
              break;
          }
          const updatedUnit: number = unit;
          return (
            <Flex
              onClick={(isSmallerThan481 && !isLoadingUnit) ? () => handleClickView(buildingNumber, unitNumber, updatedUnit, updatedBuildingNumber, isSmallerThan481, isSmallerThan820) : undefined}
              justifyContent={isSmallerThan844 ? isSmallerThan480 ? 'flex-start' : 'space-around' : 'space-between'}
              pr="10px"
            >
              <Text fontSize="12px" color="#0C223F" fontWeight={500} pb="7px">
                {(formatNumberWithCommas(value)) as ReactNode}
              </Text>
              {!isSmallerThan481 && (
                <Flex
                  mt="7px"
                  borderRadius="32px"
                  bgColor="#0070CD"
                  justifyContent="center"
                  alignItems="center"
                  w="20px"
                  h="20px"
                >
                  <ArrowRightTableIcon
                    cursor="pointer"
                    mt="2px"
                    onClick={!isLoadingUnit ? () => handleClickView(buildingNumber, unitNumber, updatedUnit, updatedBuildingNumber, isSmallerThan481, isSmallerThan820) : undefined}
                  />
                </Flex>
              )}
            </Flex>
          );
        },
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (

    <Box ref={tableContainerRef}>
      <ChakraTable color="black" height="100%">
        <Thead color="black">
          {table.getHeaderGroups().map(
            (headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  let padding: string;
                  let size: number;
                  switch (header.id) {
                    case 'unit':
                      padding = isSmallerThan480 ? '10px 0px 10px 40px' : '10px 20px 10px 40px';
                      size = isSmallerThan844 ? (isSmallerThan480 ? 70 : 50) : 110;
                      break;
                    case 'bedrooms':
                      padding = '10px 5px 10px 10px';
                      size = isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 17;
                      break;
                    case 'bathrooms':
                      padding = '10px 5px 10px 10px';
                      size = isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 17;
                      break;
                    case 'square':
                      padding = isSmallerThan844 ? '10px 0px 10px 10px' : '10px 0px 10px 15px';
                      size = isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 50;
                      break;
                    case 'price':
                      padding = isSmallerThan480 ? '10px 20px 10px 40px' : '10px 20px 10px 40px';
                      size = isSmallerThan844 ? 40 : 120;
                      break;
                    default:
                      padding = '0';
                      size = isSmallerThan844 ? (isSmallerThan480 ? 30 : 100) : 17;
                      break;
                  }
                  const isUnit = header.id === 'unit';
                  const isPrice = header.id === 'price';

                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      backgroundColor="#E9EDF0"
                      p={padding}
                      width={`${size}px`}
                      fontSize="12px"
                      fontWeight={300}
                      textTransform="none"
                      color="#0C223F"
                      textAlign={(isSmallerThan844 && !isUnit && !isPrice) ? 'center' : 'unset'}
                    >
                      {header.isPlaceholder ? null : (
                        <Box
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </Box>
                      )}
                    </Th>
                  );
                })}
              </Tr>
            ),
          )}
        </Thead>
        <Tbody color="black" pt="20px">
          {
            table
              .getRowModel()
              .rows
              .map((row) => {
                return (
                  <Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      const { id } = cell.column;
                      let padding: string;

                      switch (id) {
                        case 'unit':
                          padding = isSmallerThan480 ? '6px 0px 5px 40px' : '6px 10px 5px 40px';
                          break;
                        case 'bedrooms':
                          padding = '1px 5px 10px 15px';
                          break;
                        case 'bathrooms':
                          padding = '1px 5px 10px 15px';
                          break;
                        case 'square':
                          padding = '1px 5px 10px 15px';
                          break;
                        case 'price':
                          padding = isSmallerThan480 ? '1px 7px 10px 25px' : '1px 0px 10px 12px';
                          break;
                        default:
                          padding = '0';
                          break;
                      }

                      return (
                        <Td key={cell.id} padding={padding} borderBottom="1px solid #C6C8C7">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })
          }
        </Tbody>
      </ChakraTable>
    </Box>
  );
};

export default Table;
