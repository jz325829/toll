/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  Card, CardHeader, CardBody, CardFooter, Flex,
  SimpleGrid, Box, Image, Text, useMediaQuery, useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Slider from 'react-slick';
import CancelIcon from '../UI/SvgIcons/CancelIcon';
import ZoomInIcon from '../UI/SvgIcons/ZoomInIcon';
import ButtonGroup from '../UI/ButtonGroup';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import useOrientation from '../../hooks/useOrientation';
import ArrowLeftIcon from '../UI/SvgIcons/ArrowLeftIcon';
import ArrowRightIcon from '../UI/SvgIcons/ArrowRightIcon';
import WhiteCancelIcon from '../UI/SvgIcons/WhiteCloseIcon.svg';
import SideBar from '../UI/SideBar';
import { formatNumberWithCommas } from '../../helpers/formatNumberWithCommas';

interface Props extends React.HTMLAttributes<HTMLElement> {
  togglePopup: () => void;
  isOpen: boolean;
  bedrooms: number;
  bathrooms: number;
  square: number;
  price: number;
  unitNumber: number;
  isModalMobileOpen: boolean;
  setIsModalMobileOpen: (isOpen: boolean) => void;
}

const galletyPhotos = [
  'images/gallery-photo.png',
  'images/gallery-photo.png',
  'images/gallery-photo.png',
  'images/gallery-photo.png',
  'images/gallery-photo.png',
  'images/gallery-photo.png',
];

const UnitCard: React.FC<Props> = ({
  togglePopup,
  isOpen,
  bedrooms,
  bathrooms,
  price,
  square,
  unitNumber,
  isModalMobileOpen,
  setIsModalMobileOpen,
}) => {
  const [isOpenUnit, setIsOpenUnit] = useState(false);
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [slider, setSlider] = useState<Slider | null>(null);

  const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');

  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const settings = {
    beforeChange: (_current: number, next: number) => {
      let finalIndex: number;
      if (next + 1 === 0) {
        finalIndex = galletyPhotos.length;
      } else {
        finalIndex = next + 1;
      }
      setCurrentImageIndex(finalIndex);
    },
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const orientation = useOrientation();
  const isDeviceRotated = orientation === 'Landscape';

  const top = useBreakpointValue({ base: '50%', md: '50%' });
  const side = useBreakpointValue({ base: '5px', md: '10px' });
  const popupMargin = useBreakpointValue({ base: '0 10px', lg: '0 30px' });
  const modalPadding = useBreakpointValue({ base: '20px 0', md: (isDeviceRotated && isSmallerThan480) ? '0' : '40px 0', lg: '0' });
  const marginLeft = useBreakpointValue({ base: 0, md: 0, lg: '50px' });

  const toggleUnitImage = () => setIsOpenUnit(!isOpenUnit);
  const toggleUnitGallery = () => setIsOpenGallery(!isOpenGallery);
  const toggleAllPopups = () => {
    setIsOpenGallery(false);
    setIsOpenUnit(false);
    // setIsModalMobileOpen(false);
    togglePopup();
  };

  const togleMobileModal = (open: boolean) => setIsModalMobileOpen(open);

  return (
    <>
      <Modal
        isModalInModal
        isOpen={isOpenUnit}
        togglePopup={toggleUnitImage}
        style={{ opacity: !isOpenUnit ? 0 : 1, transition: 'all 0.4s linear' }}
      >
        <Box height={{ base: '55vh', md: '95vh', lg: '90vh' }} padding="0 10px">
          {!isSmallerThan844 && (
            <Flex justifyContent="flex-end" opacity={0.6} pt="25px">
              <CancelIcon fill="#8195A2" onClick={toggleUnitImage} cursor="pointer" />
            </Flex>
          )}

          {isSmallerThan844 && (
            <Flex
              padding="10px 0"
              justifyContent="flex-end"
              opacity={0.6}
              position="fixed"
              zIndex={9999}
              right={0}
              p={isSmallerThan480 ? '25px 40px' : isSmallerThan844 ? '45px 50px' : '25px 30px'}
            >
              <CancelIcon fill="#8195A2" onClick={toggleUnitImage} cursor="pointer" />
            </Flex>
          )}

          <Box>
            <Image
              objectFit="cover"
              src="images/unit-image.png"
              alt="Chakra UI"
              width="100%"
              height="100%"
            />
          </Box>

        </Box>
      </Modal>

      <Modal
        isModalInModal
        isOpen={isOpenGallery}
        togglePopup={toggleUnitGallery}
        closeButton
        style={{
          width: (isDeviceRotated && !isSmallerThan820) ? '80%' : '100%',
          overflowY: 'hidden',
          position: 'relative',
          margin: popupMargin,
          padding: modalPadding,
          backgroundColor: 'rgba(0, 0, 0, 0.01)',
        }}
      >
        <Box height={{ base: '21vh', md: (isDeviceRotated && !isSmallerThan820) ? '80vh' : '31vh', lg: '90vh' }}>
          <Box
            left={side}
            aria-label="left-arrow"
            position="absolute"
            transform="translate(0%, -50%)"
            zIndex={2000}
            top={top}
          >
            <ButtonGroup icon={<ArrowLeftIcon />} onClick={() => slider?.slickPrev()} />
          </Box>
          {isSmallerThan820
            && (
              <Box opacity={1} position="absolute" top={{ base: '-1%', md: '3%' }} right="0px" zIndex={5000}>
                <WhiteCancelIcon fill="#fff" stroke="white" onClick={toggleUnitGallery} cursor="pointer" />
              </Box>
            )}
          <Box
            right={side}
            aria-label="right-arrow"
            position="absolute"
            transform="translate(0%, -50%)"
            zIndex={2}
            top={top}
          >
            <ButtonGroup icon={<ArrowRightIcon />} onClick={() => slider?.slickNext()} />
          </Box>
          <Flex
            bgColor="#fff"
            color="#0C223F"
            width="72px"
            padding="4px 10px 4px 10px"
            borderRadius="90px"
            position="absolute"
            bottom={{ base: '15px', md: 2, lg: 2 }}
            left="50%"
            transform="translateX(-50%)"
            zIndex={9999}
            gap="4px"
          >
            <Text fontSize="14px">
              0
              {currentImageIndex}
              {' '}
            </Text>
            <Text fontSize="14px" color="#8195A2">  /</Text>
            <Text fontSize="14px" color="#8195A2">
              0
              {galletyPhotos.length}
            </Text>
          </Flex>
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {galletyPhotos.map((url) => (
              <Box
                key={url}
                height={{ base: '55vh', md: '95vh', lg: '90vh' }}
                position="relative"
              >
                <Image
                  src={url}
                  alt="index"
                  width="100%"
                  height={{ base: 'auto', md: 'auto', lg: '100%' }}
                  borderRadius="16px"
                />
              </Box>
            ))}
          </Slider>

        </Box>
      </Modal>
      <SideBar
        isModalMobileOpen={isModalMobileOpen}
        setIsModalMobileOpen={togleMobileModal}
        isOpen={isOpen}
        isUnitCar
        togglePopup={toggleAllPopups}
        style={{
          zIndex: 5,
          padding: isSmallerThan844 ? isSmallerThan480 ? '0 0 ' : '0 0 0px' : '0px 0px 0px',
        }}
      >
        {isSmallerThan844 && (
          <Flex padding="10px 0" justifyContent="flex-end" opacity={0.6} position="fixed" zIndex={9999} right={0} p="25px 30px">
            <CancelIcon fill="#8195A2" onClick={togglePopup} cursor="pointer" />
          </Flex>
        )}

        <Card
          maxW={isDeviceRotated ? '844px' : isSmallerThan820 ? '820px' : '430px'}
          paddingTop={isSmallerThan844 ? isSmallerThan480 ? '22px ' : '42px' : '0'}
          borderRadius="16px"
          width="100%"
          color="#0C223F"
          boxShadow="none"
        >
          <CardHeader padding={isSmallerThan820 ? isSmallerThan480 ? '45px 32px 20px' : '25px 32px 20px' : '20px 32px'} width="100%" height="100%">
            {(isModalMobileOpen && !isSmallerThan820) && (
              <Flex padding="10px 0" justifyContent="flex-end" opacity={0.6}>
                <CancelIcon fill="#8195A2" onClick={togglePopup} cursor="pointer" />
              </Flex>
            )}
            <Flex justifyContent="center" alignItems="center" borderRadius="16px" border="1px solid #E9EDF0" paddingTop="16px" flexDirection="column">
              <Box
                position="absolute"
                left={{ base: 'none', md: 'none', lg: '335px' }}
                right={{ base: '42px', md: '42px', lg: 'none' }}
                top={isSmallerThan480 ? '80px' : isSmallerThan820 ? '85px' : '80px'}
              >
                <ButtonGroup icon={<ZoomInIcon />} primary onClick={toggleUnitImage} />
              </Box>
              <Box width={{ base: '85px', md: '136px', lg: '96px' }} height={{ base: '148px', md: '238px', lg: '168px' }}>
                <Image
                  objectFit="cover"
                  src="images/unit108.png"
                  alt="Chakra UI"
                  width="100%"
                  height="100%"
                />
              </Box>
              <Flex
                justifyContent="space-between"
                padding="22px"
                marginTop="16px"
                fontWeight={700}
                fontSize="18px"
                width="100%"
                alignItems="center"
                backgroundColor="#E9EDF0"
                borderBottomRadius="16px"
              >
                <Text>
                  Residence
                  {' '}
                  {unitNumber}
                </Text>
                <Text>
                  $
                  {formatNumberWithCommas(`${price}`)}
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody padding={{ base: '0px 32px 20px 32px', md: '0px 32px 20px 32px', lg: '0px 32px 10px' }}>
            <SimpleGrid
              columns={{ base: 3, md: 6, lg: 3 }}
              spacing="16px"
              border="1px solid #E9EDF0"
              padding="30px"
              borderRadius="16px"
              fontSize="14px"
              lineHeight="20px"
              whiteSpace="nowrap"
            >
              <Box>
                <Text color="#606A70" fontWeight={500}>
                  Square feet
                </Text>
                <Text fontWeight={700} mt="4px">
                  {square}
                </Text>
              </Box>
              <Box>
                <Text color="#606A70" fontWeight={500}>
                  Bedrooms
                </Text>
                <Text fontWeight={700} mt="4px">
                  {bedrooms}
                </Text>
              </Box>
              <Box>
                <Text color="#606A70" fontWeight={500}>
                  Baths
                </Text>
                <Text fontWeight={700} mt="4px">
                  {bathrooms}
                </Text>
              </Box>
              <Box>
                <Text color="#606A70" fontWeight={500}>
                  Half baths
                </Text>
                <Text fontWeight={700} mt="4px">
                  0
                </Text>
              </Box>
              <Box>
                <Text color="#606A70" fontWeight={500}>
                  Garage
                </Text>
                <Text fontWeight={700} mt="4px">
                  0
                </Text>
              </Box>
              <Box>
                <Text color="#606A70" fontWeight={500}>
                  Story
                </Text>
                <Text fontWeight={700} mt="4px">
                  1
                </Text>
              </Box>
            </SimpleGrid>
          </CardBody>
          <CardFooter padding="10px 32px 30px">
            <Flex justifyContent="center" borderRadius="16px" flexDirection="column" width={{ base: '100%', md: '100%', lg: 'none' }}>
              <Text fontWeight={700} fontSize="18px" paddingBottom="15px">
                Gallery
              </Text>
              <Box
                position="absolute"
                left={{ base: 'none', md: 'none', lg: '335px' }}
                right={{ base: '42px', md: '42px', lg: 'none' }}
                bottom={{ base: '230px', md: '318px', lg: '245px' }}
                top={{ base: 'none', md: 'none', lg: 'none' }}
              >
                <ButtonGroup icon={<ZoomInIcon />} primary onClick={toggleUnitGallery} />
              </Box>
              <Box width="100%" height={{ base: '100%', md: '270px', lg: '200px' }} marginBottom="30px">
                <Image
                  borderRadius="16px"
                  height={{ base: '100%', md: '270px', lg: '200px' }}
                  width="100%"
                  objectFit="cover"
                  src="images/gallery108.png"
                  alt="Gallery"
                />
              </Box>
              <Button title="Contact for more" />
            </Flex>
          </CardFooter>
        </Card>
      </SideBar>
    </>

  );
};

export default UnitCard;
