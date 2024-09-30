import {
  List,
  ListItem,
  Icon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  SimpleGrid,
  Box,
  Image,
  Text,
  useMediaQuery,
  useBreakpointValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import CancelIcon from '../UI/SvgIcons/CancelIcon';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import useOrientation from '../../hooks/useOrientation';
import styles from './styles.module.css';

const BuildingCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => setIsOpen(!isOpen);

  const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const orientation = useOrientation();

  const isDeviceRotated = orientation === 'Landscape';

  const height = useBreakpointValue({ base: '90vh', md: (isDeviceRotated && isSmallerThan480) ? '90vh' : '87vh', lg: '84vh' });
  const marginLeft = useBreakpointValue({ base: 0, md: 0, lg: '50px' });
  const marginTop = useBreakpointValue({ base: 0, md: 0, lg: '50px' });

  return (
    <Modal
      isOpen={isOpen}
      togglePopup={togglePopup}
      isCard
      isFilter
      style={{
        height, marginRight: 'auto', marginLeft, marginTop,
      }}
    >
      <Card maxW={isDeviceRotated ? '844px' : isSmallerThan820 ? '754px' : '430px'} width="100%" borderRadius="16px" color="#0C223F">
        <CardHeader padding="20px 32px">
          <Flex padding="10px 0 20px" justifyContent="flex-end" opacity={0.4}>
            <CancelIcon fill="#8195A2" onClick={togglePopup} style={{ cursor: 'pointer' }} />
          </Flex>
          <Flex justifyContent="center" alignItems="center" borderRadius="16px" border="1px solid #E9EDF0" flexDirection="column">
            <Box className={styles['image-wrapper']} maxWidth={{ base: '326px', md: '754px', lg: '366px' }} maxHeight={{ base: '180px', md: '270px', lg: '200px' }}>
              <Image
                borderTopRadius="16px"
                width="100%"
                objectFit="cover"
                src="images/building.png"
                alt="Gallery"
              />
            </Box>
            <Flex
              justifyContent="space-between"
              padding="20px"
              fontWeight={700}
              fontSize="18px"
              width="100%"
              alignItems="center"
              backgroundColor="#E9EDF0"
              borderBottomRadius="16px"
            >
              <Text>
                Emerson Park
              </Text>
            </Flex>
          </Flex>
          <Box paddingTop="16px">
            <Text fontSize="14px" color="#606A70" fontWeight={500}>
              Emerson Park at Metro Crossings features only 48 homes
              with 2-3 bedrooms and 2-3 bathrooms ranging from 1,700-2800+
              square feet, each with a luxury outdoor living spaces and exclusive
              access to resort-style amenities.
            </Text>
          </Box>
        </CardHeader>
        <CardBody padding={{ base: '0px 32px 20px 32px', md: '0px 32px 15px 32px', lg: '20px 32px' }}>
          <SimpleGrid
            columns={{ base: 3, md: 3, lg: 1 }}
            spacing={{ base: '5px', md: '5px', lg: '16px' }}
            border="1px solid #E9EDF0"
            padding={{ base: '20px', md: '20px', lg: '30px' }}
            borderRadius="16px"
            fontSize="14px"
            lineHeight="20px"
            gridTemplateColumns={{ base: '1fr', md: '1fr 1.5fr 1fr', lg: '1fr' }}
          >
            <Box>
              <Text color="#606A70" fontWeight={500}>
                Total residences
              </Text>
              <Text fontWeight={700} marginTop="4px">
                48
              </Text>
            </Box>
            <Box>
              <Text color="#606A70" fontWeight={500}>
                Location
              </Text>
              <Text fontWeight={700} marginTop="4px" whiteSpace={{ base: 'nowrap', md: 'nowrap', lg: 'normal' }}>
                Fremont, CA | Alameda County
              </Text>
            </Box>
            <Box>
              <Text color="#606A70" fontWeight={500}>
                Numbers of floors
              </Text>
              <Text fontWeight={700} marginTop="4px">
                3
              </Text>
            </Box>
          </SimpleGrid>
        </CardBody>
        <CardFooter padding="10px 32px 30px">
          <Flex justifyContent="center" borderRadius="16px" flexDirection="column">
            <Text fontWeight={700} fontSize="18px" paddingBottom="15px">
              Amenities
            </Text>
            <List spacing={3} mb="24px">
              {amenities.map((amenty, index) => (
                <ListItem key={index}>
                  <Flex>
                    <Icon as={StarIcon} color="#F8D447" mr="7px" mt="3px" />
                    <Text fontWeight={500} fontSize="14px" color="#606A70" lineHeight="20px">{amenty}</Text>
                  </Flex>

                </ListItem>
              ))}
            </List>
            <Button title="Contact for more" />
          </Flex>
        </CardFooter>
      </Card>
    </Modal>

  );
};

export default BuildingCard;

const amenities = [
  'Exclusive access to the resort-style community recreation center with a fitness center boasting complimentary Wi-Fi, indoor/outdoor entertainment areas, cabanas, outdoor barbecue, and many more amenities',
  'Toll Brothers superior designs and quality craftsmanship',
  'Located directly adjacent to BART Warm Springs/South Fremont Station offering convenient access to much of the San Francisco Bay Area',
  'Public education will be available through Fremont Unified School District, including a brand-new, state-of-the-art elementary school within walking distance to the community',
  'Private two-car parking spaces and separate ample storage provided per home',
];
