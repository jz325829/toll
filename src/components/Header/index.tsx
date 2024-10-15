/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable max-len */
import {
  Box, Flex, Text, useMediaQuery, SimpleGrid, Image,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonGroup from '../UI/ButtonGroup';
import FilterIcon from '../UI/SvgIcons/FilterIcon';
import HelpIcon from '../UI/SvgIcons/HelpIcon';
import styles from './styles.module.css';
import FilterTag from '../UI/FilterTag';
import { RootState } from '../../store/store';
import { convertFiltersToArray } from '../../helpers/converFiltersToArray';
import Modal from '../UI/Modal';
import CancelIcon from '../UI/SvgIcons/CancelIcon';
import ArrowLeftIcon from '../UI/SvgIcons/ArrowLeftIcon';
import { $carousel_actions } from '../../store/carousel/carouselSlice';

interface Props {
  toggleFilterPopup: () => void;
  toggleTableModalPopup: () => void;
  toggleTableModal: () => void
}

export default function Header({
  toggleFilterPopup, toggleTableModalPopup, toggleTableModal,
}: Props) {
  const dispatch = useDispatch();
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const filters = useSelector((state: RootState) => state.filters);
  const isFilterStarted = useSelector((state: RootState) => state.filters.isFilterStarted);
  const isFirstPartLoaded = useSelector((state: RootState) => state.carousel.isLoadedFirstImages);
  const isNoDataFound = useSelector((state: RootState) => state.carousel.isNoDataFound);

  const isZoomed = useSelector((state: RootState) => state.carousel.isZoomed);
  const [convertedFiltersValue, setConvertedFiltersValue] = useState(convertFiltersToArray(filters));

  const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    setConvertedFiltersValue(convertFiltersToArray(filters));
  }, [filters]);

  useEffect(() => {
    const resizeModalWidth = () => {
      const modal = document.getElementById('help-modal');
      const modalContent = document.getElementById('header-modal-wrapper');
      if (modal && modalContent) {
        modalContent.style.maxWidth = `${modal.getBoundingClientRect().width - 98}`;
      }
    };
    window.addEventListener('resize', resizeModalWidth);
    return () => {
      window.removeEventListener('resize', resizeModalWidth);
    };
  }, [filters]);

  // useEffect(() => {
  //   if (!isFirstPartLoaded) {
  //     setIsOpenPopUp(true);
  //   }
  // }, [isFirstPartLoaded]);

  const togglePopup = () => setIsOpenPopUp(!isOpenPopUp);

  const handleGoBack = () => {
    dispatch($carousel_actions.setZoomed(false));
    dispatch($carousel_actions.setBuildingId('main'));
    dispatch($carousel_actions.updateBuildingDataNumber(0));
    dispatch($carousel_actions.setIsGotBack(true));
    dispatch($carousel_actions.setToolTip(false));

    // @ts-ignore
    window.GLOBAL_CACHE.setManualyScale(0, 0, 0, 0, 0);
  };

  const handleClickFilter = () => {
    if (isFilterStarted && !isNoDataFound) {
      toggleTableModal();
    } else {
      toggleFilterPopup();
    }
  };

  return (
    <>
      <Flex position="absolute" top="15px" left="20px" zIndex={4} gap="15px" flexDirection={{ base: 'column', md: 'row', lg: 'row' }}>
        <Flex>
          {isZoomed
            && (
              <ButtonGroup
                icon={<ArrowLeftIcon />}
                mr={['15px', '15px', '15px']}
                onClick={handleGoBack}
                secondary
              />
            )}
          <ButtonGroup
            icon={<FilterIcon />}
            title="Filters"
            onClick={handleClickFilter}
            secondary
            padding={{ base: '10px', md: '10px', lg: '10px 20px' }}
            width="130px !important"
            minWidth="130px !important"
          />
        </Flex>

        {isFilterStarted
          ? (
            <Flex className={styles['filters-tags']}>
              {convertedFiltersValue.map((item) => (
                <FilterTag title={item.value} key={item.value} stateName={item.name} />
              ))}
            </Flex>
          ) : null}

      </Flex>
      <Box position="absolute" bottom="15px" right="20px" zIndex={2}>
        <ButtonGroup primary icon={<HelpIcon />} onClick={togglePopup} />
      </Box>

      <Modal
        isOpen={isOpenPopUp}
        togglePopup={togglePopup}
        maxWidth={isSmallerThan768 ? '440px' : '820px'}
        height={isSmallerThan900 ? '100%' : '75%'}
        width="100%"
        id="help-modal"
      >
        <Box className={styles['head-container']} id="header-modal-wrapper">
          <Box className={styles.head} pb="20px" borderBottom="#E9EDF0 1px solid">
            <Text>How it works</Text>
            <CancelIcon onClick={togglePopup} fill="#8195A2" />
          </Box>
          <SimpleGrid
            columns={{ base: 1, md: isSmallerThan820 ? 1 : 2, lg: 2 }}
            spacing={6}
            pt="85px"
            maxW={{ base: 'inherit', md: isSmallerThan768 ? '366px' : '100%', lg: '100%' }}
          >
            <Box mt="16px!important">
              <Flex
                justifyContent="center"
                alignItems="center"
                borderRadius="16px"
                border="1px solid #E9EDF0"
                flexDirection="column"
                maxW="366px"
                width="100%"
              >
                <Box
                  width={{ base: 'inherit', md: '100%', lg: '364px' }}
                  height={{ base: 'inherit', md: '200px', lg: '200px' }}
                >
                  <Image
                    objectFit="cover"
                    src="images/help-modal/img_1.png"
                    alt="Chakra UI"
                    width="100%"
                    height="100%"
                    borderTopRadius="16px"
                  />
                </Box>
                <Flex
                  justifyContent="flex-start"
                  padding="26px 22px"
                  fontWeight={700}
                  fontSize="18px"
                  width="100%"
                  alignItems="center"
                  backgroundColor="#E9EDF0"
                  borderBottomRadius="16px"
                >
                  <Text color="#0C223F">
                    Interact with 3D map
                  </Text>
                </Flex>
              </Flex>
              <Text mt="16px!important">
                Click and drag anywhere on the screen to rotate the map. Navigate through the residence complex, and pinpoint the exact location of available residences.
              </Text>
            </Box>
            <Box mt="16px!important">
              <Flex justifyContent="center" alignItems="center" borderRadius="16px" border="1px solid #E9EDF0" flexDirection="column" maxW="366px" width="100%">
                <Box width={{ base: 'inherit', md: '100%', lg: '364px' }} height={{ base: 'inherit', md: '200px', lg: '200px' }}>
                  <Image
                    objectFit="cover"
                    src="images/help-modal/img_2.png"
                    alt="Chakra UI"
                    width="100%"
                    height="100%"
                    borderTopRadius="16px"
                  />
                </Box>
                <Flex
                  justifyContent="flex-start"
                  padding="16px 22px"
                  fontWeight={700}
                  fontSize="18px"
                  width="100%"
                  alignItems="center"
                  backgroundColor="#E9EDF0"
                  borderBottomRadius="16px"
                >
                  <Text color="#0C223F">
                    Select park, residence on the map
                  </Text>
                </Flex>
              </Flex>
              <Text mt="16px!important">
                To see more information about an available building or residence, just click on it! Make your residence hunting experience not just efficient, but also engaging.
              </Text>
            </Box>
            <Box mt="16px!important">
              <Flex justifyContent="center" alignItems="center" borderRadius="16px" border="1px solid #E9EDF0" flexDirection="column" maxW="366px" width="100%">
                <Box width={{ base: 'inherit', md: '100%', lg: '364px' }} height={{ base: 'inherit', md: '200px', lg: '200px' }}>
                  <Image
                    objectFit="cover"
                    src="images/help-modal/img_3.png"
                    alt="Chakra UI"
                    width="100%"
                    height="100%"
                    borderTopRadius="16px"
                  />
                </Box>
                <Flex
                  justifyContent="flex-start"
                  padding="26px 22px"
                  fontWeight={700}
                  fontSize="18px"
                  width="100%"
                  alignItems="center"
                  backgroundColor="#E9EDF0"
                  borderBottomRadius="16px"
                >
                  <Text color="#0C223F">
                    Search with the filters
                  </Text>
                </Flex>
              </Flex>
              <Text mt="16px!important">
                Easily narrow down your search with our intuitive filters. Customize your preferences for price range, number of bedrooms, and amenities to quickly discover the residence that perfectly suits your lifestyle.
              </Text>
            </Box>
            <Box mt="16px!important">
              <Flex justifyContent="center" alignItems="center" borderRadius="16px" border="1px solid #E9EDF0" flexDirection="column" maxW="366px" width="100%">
                <Box width={{ base: 'inherit', md: '100%', lg: '364px' }} height={{ base: 'inherit', md: '200px', lg: '200px' }}>
                  <Image
                    objectFit="cover"
                    src="images/help-modal/img_4.png"
                    alt="Chakra UI"
                    width="100%"
                    height="100%"
                    borderTopRadius="16px"
                  />
                </Box>
                <Flex
                  justifyContent="flex-start"
                  padding="26px 22px"
                  fontWeight={700}
                  fontSize="18px"
                  width="100%"
                  alignItems="center"
                  backgroundColor="#E9EDF0"
                  borderBottomRadius="16px"
                >
                  <Text color="#0C223F">
                    Discover the floorplan
                  </Text>
                </Flex>
              </Flex>
              <Text mt="16px!important">
                Dive into the details with our 2D floorplans. Explore the layout, room dimensions, and design features of each residence, giving you a comprehensive understanding before you even step through the door.
              </Text>
            </Box>
            <Box pt="16px">
              <Text color="#0C223F" fontWeight={700}>Disclaimer</Text>
              {' '}
              <br />

              <Text className={styles.title2} fontSize="11px" lineHeight="16px" align="justify">
                All dimensions and areas shown are approximate and subject to field conditions. Dimensions should not be relied upon to calculate square footage. Any plans or lot images do not identify any easements, stormwater management areas, or other restrictions on particular lots or in the community as a whole. Wooded areas, landscaping and recreational facilities shown are for illustrative purposes only and are not to be relied upon for actual field conditions once constructed.
              </Text>
            </Box>
            <Box pt="36px">
              {' '}
              <br />
              <Text fontSize="11px" lineHeight="16px" align="justify">
                Photos are images only and should not be relied upon to confirm applicable features. Pricing subject to change without notice. Please consult with your Toll Brothers Sales Representative for additional information. This is not an offering where prohibited by law.
              </Text>
            </Box>
          </SimpleGrid>

        </Box>

      </Modal>
    </>

  );
}
