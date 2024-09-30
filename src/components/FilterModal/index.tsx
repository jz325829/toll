/* eslint-disable no-nested-ternary */
import {
  FC, useEffect, useRef, useState,
} from 'react';
import {
  Box, Flex, Text, useMediaQuery,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import CancelIcon from '../UI/SvgIcons/CancelIcon';
import SliderInput from '../UI/SliderInput';
import MultiSelect from '../UI/MultiSelect';
import { RootState } from '../../store/store';
import {
  updateBathrooms,
  updateBedrooms,
  updatePrice,
  updateFloorsNumber,
  startFilter,
  updateSquare,
  clearFilters,
} from '../../store/filter/filterSlice';
import { SliderFilter, clearedFilterState, updatedFilterState } from '../../constants/filters';
import SideBar from '../UI/SideBar';
import Button from '../UI/Button';
import ButtonGroup from '../UI/ButtonGroup';
import TableModal from '../TableModal';
import { BuildingData } from '../../webgl/MainBuildings/types';
import { findMinMaxValues } from '../../helpers/findMinMaxValues';

interface Props {
  isOpen: boolean;
  togglePopup: () => void;
  isOpenTableModal: boolean;
  toggleTableModalPopup: () => void;
  closeTableModal: () => void
  dummyData: BuildingData;
  setIsUnitModalMobileOpen: (isOpen: boolean) => void;
}

const FilterModal: FC<Props> = ({
  isOpen,
  isOpenTableModal,
  toggleTableModalPopup,
  togglePopup,
  closeTableModal,
  dummyData,
  setIsUnitModalMobileOpen,
}) => {
  const dispatch = useDispatch();

  const selectFilteredProperties = useSelector((state: RootState) => {
    const { isFilterStarted, ...filteredProperties } = state.filters;
    return filteredProperties;
  });
  const statePriceValue = useSelector((state: RootState) => state.filters.price);
  const filters = useSelector((state: RootState) => state.filters);

  const stateSquareValue = useSelector((state: RootState) => state.filters.square);
  const bathrooms = useSelector((state: RootState) => state.filters.bathrooms);
  const bedrooms = useSelector((state: RootState) => state.filters.bedrooms);
  const floorsNumber = useSelector((state: RootState) => state.filters.floorsNumber);

  const building = useSelector((state: RootState) => state.carousel.bulding);
  const [priceMinMax, setPriceMinMax] = useState([0, 100]);
  const [squareMinMax, setSquareMinMax] = useState([0, 100]);
  const [priceValue, setPriceValue] = useState(
    [
      statePriceValue ? statePriceValue.minValue : updatedFilterState.price.minValue,
      statePriceValue ? statePriceValue.maxValue : updatedFilterState.price.maxValue,
    ],
  );

  const [squareValue, setSquareValue] = useState(
    [
      stateSquareValue ? stateSquareValue.minValue : updatedFilterState.square.minValue,
      stateSquareValue ? stateSquareValue.maxValue : updatedFilterState.square.maxValue,
    ],
  );

  const [isModalMobileOpen, setIsModalMobileOpen] = useState(false);

  const modalContentRef = useRef<HTMLDivElement>(null);

  const [bedroomValue, setBedroomValue] = useState(bedrooms);
  const [bathroomValue, setBathroomValue] = useState(bathrooms);
  const [floorsValue, setFloorsValue] = useState(floorsNumber);

  const selectValues = ['Any', 1, 2, 3, 4];
  const floorsValues = ['Any', 1, 2];

  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    setPriceValue(
      [
        statePriceValue ? statePriceValue.minValue : priceMinMax[0],
        statePriceValue ? statePriceValue.maxValue : priceMinMax[1],
      ],
    );

    setSquareValue(
      [
        stateSquareValue ? stateSquareValue.minValue : squareMinMax[0],
        stateSquareValue ? stateSquareValue.maxValue : squareMinMax[1],
      ],
    );

    setBedroomValue(bedrooms);
    setBathroomValue(bathrooms);
    setFloorsValue(floorsNumber);
  }, [statePriceValue, stateSquareValue, bathrooms, bedrooms, floorsNumber]);

  useEffect(() => {
    if (dummyData) {
      const { price, square } = findMinMaxValues(dummyData, building);
      setPriceMinMax([price.min, price.max]);
      setSquareMinMax([square.min, square.max]);
      const updatedMinMaxPrice = {
        minValue: price.min,
        maxValue: price.max,
        ...price,
      };

      const updatedMinMaxSquare = {
        minValue: square.min,
        maxValue: square.max,
        ...square,
      };

      dispatch(updatePrice(updatedMinMaxPrice));
      dispatch(updateSquare(updatedMinMaxSquare));
    }
  }, [dummyData]);

  const togleMobileModal = (open: boolean) => setIsModalMobileOpen(open);

  const handlePriceValueChange = (num: [number, number]) => {
    const distance = num[1] - num[0] <= 10;
    if (distance) {
      if (priceValue[0] !== num[0]) {
        const updatedPriceValue = {
          ...statePriceValue,
          minValue: num[1] - 10,
          maxValue: num[1],
        } as SliderFilter;

        dispatch(updatePrice(updatedPriceValue));
        setPriceValue(num);
      } else if (priceValue[1] !== num[1]) {
        const updatedPriceValue = {
          ...statePriceValue,
          minValue: num[0],
          maxValue: num[0] + 10,
        } as SliderFilter;

        dispatch(updatePrice(updatedPriceValue));
        setPriceValue(num);
      }
    } else {
      const updatedPriceValue = {
        ...statePriceValue,
        minValue: num[0],
        maxValue: num[1],
      } as SliderFilter;
      dispatch(updatePrice(updatedPriceValue));
      setPriceValue(num);
    }
  };

  const handleSquareValueChange = (num: [number, number]) => {
    const distance = num[1] - num[0] <= 10;
    if (distance) {
      if (squareValue[0] !== num[0]) {
        const updatedPriceValue = {
          ...stateSquareValue,
          minValue: num[1] - 10,
          maxValue: num[1],
        } as SliderFilter;
        dispatch(updateSquare(updatedPriceValue));
        setSquareValue(num);
      } else if (squareValue[1] !== num[1]) {
        const updatedPriceValue = {
          ...stateSquareValue,
          minValue: num[0],
          maxValue: num[0] + 10,
        } as SliderFilter;
        dispatch(updateSquare(updatedPriceValue));
        setSquareValue(num);
      }
    } else {
      const updatedSquareValue = {
        ...stateSquareValue,
        minValue: num[0],
        maxValue: num[1],
      } as SliderFilter;
      dispatch(updateSquare(updatedSquareValue));
      setSquareValue(num);
    }
  };

  const handleBathroomsValue = (options: Array<string>) => {
    const updatedBathroomsValue = options.includes('Any') ? null : options;
    if (updatedBathroomsValue) {
      const newValue = updatedBathroomsValue.map((option) => +option);
      setBathroomValue(newValue);
      dispatch(updateBathrooms(newValue));
    } else {
      setBathroomValue(null);
      dispatch(updateBathrooms(null));
    }
  };

  const handleBedroomValue = (options: Array<string>) => {
    const updatedBedroomsValue = options.includes('Any') ? null : options;
    if (updatedBedroomsValue) {
      const newValue = updatedBedroomsValue.map((option) => +option);
      setBedroomValue(newValue);
      dispatch(updateBedrooms(newValue));
    } else {
      setBedroomValue(null);
      dispatch(updateBedrooms(null));
    }
  };

  const handleFloorsValue = (options: Array<string>) => {
    const updatedFloorsValue = options.includes('Any') ? null : options;
    if (updatedFloorsValue) {
      const newValue = updatedFloorsValue.map((option) => +option);
      setFloorsValue(newValue);
      dispatch(updateFloorsNumber(newValue));
    } else {
      setFloorsValue(null);
      dispatch(updateFloorsNumber(null));
    }
  };

  const toggleFilters = () => {
    const { isFilterStarted: defaultFilter, ...clearedFilter } = clearedFilterState;
    const { price, square } = findMinMaxValues(dummyData, building);
    if (modalContentRef.current) {
      modalContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (clearedFilter.price === selectFilteredProperties.price) {
      const updatedPriceValue = {
        ...stateSquareValue,
        minValue: price.min,
        maxValue: price.max,
      } as SliderFilter;
      dispatch(updatePrice(updatedPriceValue));
    }
    if (clearedFilter.square === selectFilteredProperties.square) {
      const updatedPriceValue = {
        ...stateSquareValue,
        minValue: square.min,
        maxValue: square.max,
      } as SliderFilter;
      dispatch(updateSquare(updatedPriceValue));
    }

    dispatch(startFilter(true));

    togleMobileModal(false);
    togglePopup();
    toggleTableModalPopup();
  };

  const toggleClearFilter = () => {
    const clearedSquare: SliderFilter = {
      min: squareMinMax[0],
      max: squareMinMax[1],
      minValue: squareMinMax[0],
      maxValue: squareMinMax[1],
    };
    const clearedPrice: SliderFilter = {
      min: priceMinMax[0],
      max: priceMinMax[1],
      minValue: priceMinMax[0],
      maxValue: priceMinMax[1],
    };
    dispatch(clearFilters({ price: clearedPrice, square: clearedSquare }));
  };

  return (

    <>
      <SideBar
        isOpen={isOpen}
        togglePopup={togglePopup}
        isHoveredOver
        setIsModalMobileOpen={togleMobileModal}
        isModalMobileOpen={isModalMobileOpen}
        style={{ padding: isSmallerThan844 ? isSmallerThan480 ? '0 0 22px' : '0px 0 22px' : '0 0 22px' }}
      >
        <Box
          style={{
            // maxWidth: (isDeviceRotated && isSmallerThan900) ? '100%' : '820px',
            fontFamily: 'GothamSSm',
            color: '#0C223F',
            width: '100%',
            padding: isSmallerThan844 ? isSmallerThan480 ? '0 0 0' : '0 0 0' : '0',
          }}
          className={styles['head-wrapper']}
          ref={modalContentRef}
        >
          <Box className={styles.head}>
            <Flex
              flexDirection={(isSmallerThan844 && !isSmallerThan480) ? 'row' : 'column'}
              justifyContent={isSmallerThan844 ? 'space-between' : 'center'}
              alignItems={isSmallerThan480 ? 'flex-start' : 'normal'}
              gap="7px"
            >
              <Box>
                <Text color="#0C223F" fontWeight={700} fontSize="18px" lineHeight="22px">Residence availability</Text>
              </Box>
              <Flex
                gap={['5px', '15px', '15px']}
                pt={isSmallerThan844 ? '0' : '5px'}
              >
                <Flex gap="5px" alignItems="center">
                  <Box w="16px" h="16px" borderRadius="50%" border="1px solid #E9EDF0" />
                  <Text color="#0C223F" opacity={0.4} fontWeight={500} fontSize="14px" lineHeight="20px">Available</Text>
                </Flex>
                <Flex gap="5px" alignItems="center">
                  <Box w="16px" h="16px" backgroundColor="#0C223F" opacity={0.4} borderRadius="50%" />
                  <Text color="#0C223F" opacity={0.4} fontWeight={500} fontSize="14px" lineHeight="20px">Unavailable</Text>
                </Flex>
              </Flex>
              {(isSmallerThan844 && isModalMobileOpen) && (
                <Box
                  opacity={1}
                  position="absolute"
                  top={!isSmallerThan480 ? isSmallerThan844 ? '20%' : '4%' : '25%'}
                  right={!isSmallerThan480 ? '4%' : '5%'}
                  zIndex={99999}
                >
                  <CancelIcon onClick={togglePopup} cursor="pointer" />
                </Box>
              )}
            </Flex>
            {!isSmallerThan844 && <ButtonGroup icon={<CancelIcon />} onClick={togglePopup} />}
          </Box>
          <Flex justifyContent="space-between" className={styles['modal-content']}>
            <Box className={styles.filters} width="100%">
              <Box className={styles.filter}>
                <Box>
                  <Text className={styles['input-title']} p="0">Price</Text>
                </Box>
                <Box padding="5px 22px 15px 10px">
                  <SliderInput
                    min={priceMinMax[0]}
                    max={priceMinMax[1]}
                    minValue={priceValue[0]}
                    maxValue={priceValue[1]}
                    onChange={handlePriceValueChange}
                  />
                </Box>
              </Box>
            </Box>
            {(isSmallerThan844 && !isSmallerThan480) && (
              <Box className={styles.filters} width="100%">
                <Box className={styles.filter} pr={isSmallerThan844 ? '15px' : 0}>
                  <Box className={styles.price}>
                    <Text className={styles['input-title']}>Square Feet</Text>
                  </Box>
                  <Box padding="5px 22px 15px 10px">
                    <SliderInput
                      min={squareMinMax[0]}
                      max={squareMinMax[1]}
                      minValue={squareValue[0]}
                      maxValue={squareValue[1]}
                      onChange={handleSquareValueChange}
                      isSquareInput
                    />
                  </Box>
                </Box>
              </Box>
            )}
          </Flex>

          <Box display={(isSmallerThan844 && !isSmallerThan480) ? 'flex' : 'block'}>
            <MultiSelect
              title="Bedrooms"
              items={selectValues}
              onValueChange={handleBedroomValue}
              defaultValue={bedroomValue}
            />
            <MultiSelect
              title="Bathrooms"
              items={selectValues}
              onValueChange={handleBathroomsValue}
              defaultValue={bathroomValue}
              isBothBorder
            />
          </Box>

          {(!isSmallerThan844 || isSmallerThan480) && (
            <Box className={styles.filters}>
              <Box className={styles.filter}>
                <Box className={styles.price}>
                  <Text className={styles['input-title']}>Square Feet</Text>
                </Box>
                <Box padding="5px 22px 15px 10px">
                  <SliderInput
                    min={squareMinMax[0]}
                    max={squareMinMax[1]}
                    minValue={squareValue[0]}
                    maxValue={squareValue[1]}
                    onChange={handleSquareValueChange}
                    isSquareInput
                  />
                </Box>
              </Box>
            </Box>
          )}
          <Box>
            <MultiSelect
              title="Stories"
              items={floorsValues}
              onValueChange={handleFloorsValue}
              defaultValue={floorsValue}
              isBothBorder
            />
          </Box>

          <Flex
            padding="20px 28.5px 0"
            gap={['7px', '15px', '15px']}
            flexDirection={{ base: 'row', md: 'row', lg: 'row' }}
            justifyContent="space-between"
          >
            <Button title="Reset all" secondary onClick={toggleClearFilter} />
            <Button title="Apply filters" onClick={toggleFilters} />
          </Flex>
        </Box>

      </SideBar>
      <TableModal
        setIsUnitModalMobileOpen={setIsUnitModalMobileOpen}
        closeTableModal={closeTableModal}
        toggleFilterModal={togglePopup}
        isOpenTable={isOpenTableModal}
        toggleTableModal={toggleTableModalPopup}
        dummyData={dummyData}
      />
    </>
  );
};

export default FilterModal;
