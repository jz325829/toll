import {
  Divider, Flex, Box, useMediaQuery,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import ZoomOutIcon from '../UI/SvgIcons/ZoomOutIcon';
import BlackZoomInIcon from '../UI/SvgIcons/BlackZoomInIcon';
import ButtonGroup from '../UI/ButtonGroup';
import HideIcon from '../UI/SvgIcons/HideIcon';
import styles from './styles.module.css';
import ShowIcon from '../UI/SvgIcons/ShowIcon';
import { RootState } from '../../store/store';

interface Props {
  isVisible: boolean
  handleHideRooms: () => void;
  closeTableModal: () => void;
  isOpenTableModal: boolean
}

const Zoom: React.FC<Props> = ({
  isVisible,
  handleHideRooms,
  closeTableModal,
  isOpenTableModal,
}) => {
  const dispatch = useDispatch();
  const isZoomed = useSelector((state: RootState) => state.carousel.isZoomed);
  const unitCardNumber = useSelector((state: RootState) => state.carousel.unitCardNumber);
  const isOpenUnitCard = useSelector((state: RootState) => state.carousel.isCardOpen);
  const wasUnitCardOpen = unitCardNumber !== 0;
  const [isSmallerThan844] = useMediaQuery('(max-width: 844px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const toggleVisibilitiOfRooms = () => {
    handleHideRooms();
    if (isOpenTableModal) {
      closeTableModal();
    }
    if (isVisible && isOpenUnitCard) {
      dispatch($carousel_actions.setUnitCard(false));
    } else if (!isVisible && wasUnitCardOpen) {
      // dispatch($carousel_actions.setUnitCard(true));
    }
  };

  return (
    <>
      {(isSmallerThan480 && isZoomed) && (
        <Box position="absolute" top="20px" right="20px" zIndex={10}>
          <ButtonGroup icon={isVisible ? <HideIcon /> : <ShowIcon />} onClick={toggleVisibilitiOfRooms} bgColor="#fff !important" />
        </Box>
      )}

      <Flex
        position="absolute"
        bottom={isSmallerThan844 ? '50%' : '20px'}
        left={isSmallerThan844 ? undefined : '20px'}
        right={isSmallerThan844 ? '20px' : undefined}
        flexDirection="column"
        gap="15px"
        zIndex={2}
      >
        {(isZoomed && !isSmallerThan480) && <ButtonGroup icon={isVisible ? <HideIcon /> : <ShowIcon />} onClick={toggleVisibilitiOfRooms} bgColor="#fff !important" />}
        <Flex flexDirection="column" justifyContent="center" alignItems="center" zIndex={2}>
          <Box id="zoom-in" bgColor="#fff" borderTopRadius="90px" maxW="52px" padding="0 6px " _hover={{ opacity: 0.85 }} cursor="pointer">
            <BlackZoomInIcon className={styles['zoom-icon']} style={{ margin: '12.5px 10px' }} />
          </Box>
          <Flex
            id="zoom-out"
            bgColor="#fff"
            borderBottomRadius="90px"
            justifyContent="center"
            alignItems="center"
            padding="0 6px"
            _hover={{ opacity: 0.85 }}
            cursor="pointer"
            boxSizing="border-box"
          >
            <Box borderTop="1px solid #E9EDF0">
              <ZoomOutIcon className={styles['zoom-icon']} style={{ margin: '12.5px 10px' }} />
            </Box>

          </Flex>
        </Flex>

      </Flex>

    </>

  );
};

export default Zoom;

// import { Divider, Flex, Box } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
// import ZoomOutIcon from '../UI/SvgIcons/ZoomOutIcon';
// import BlackZoomInIcon from '../UI/SvgIcons/BlackZoomInIcon';
// import ButtonGroup from '../UI/ButtonGroup';
// import HideIcon from '../UI/SvgIcons/HideIcon';
// import styles from './styles.module.css';
// import ShowIcon from '../UI/SvgIcons/ShowIcon';
// import { RootState } from '../../store/store';

// interface Props {
//   isVisible: boolean
//   handleHideRooms: () => void
// }

// const Zoom: React.FC<Props> = ({ isVisible, handleHideRooms }) => {
//   const isZoomed = useSelector((state: RootState) => state.carousel.isZoomed);

//   return (
//     <Flex position="absolute" bottom="20px"
// left={{ base: '10px', md: '15px', lg: '20px' }} flexDirection="column" gap="15px" zIndex={2}>
//       {
//         isZoomed
//         && <ButtonGroup icon={isVisible ? <HideIcon /> : <ShowIcon />}
// onClick={handleHideRooms} bgColor="#fff !important" />
//       }
//       <Flex
//         flexDirection="column"
//         justifyContent="center"
//         bgColor="#fff"
//         alignItems="center"
//         borderRadius="90px"
//         p="0px 4px"
//         maxW="52px"
//       >
//         <Box id="zoom-in" padding="3px 6px 0 " _hover={{ opacity: 0.85 }} cursor="pointer">
//           <BlackZoomInIcon className={styles['zoom-icon']} style={{ margin: '12.5px 10px' }} />
//         </Box>
//         <Box
//           id="zoom-out"
//           padding="0 0px 3px"
//           _hover={{ opacity: 0.85 }}
//           cursor="pointer"
//           borderTop="1px solid #E9EDF0"
//         >
//           <ZoomOutIcon className={styles['zoom-icon']} style={{ margin: '12.5px 10px' }} />
//         </Box>
//       </Flex>

//     </Flex>

//   );
// };

// export default Zoom;
