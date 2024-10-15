import { Props } from "@react-three/fiber";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { $carousel_actions } from "src/store/carousel/carouselSlice";
import Modal from "../UI/Modal";
import HelpIcon from "../UI/SvgIcons/HelpIcon";
import ButtonGroup from "../UI/ButtonGroup";
import { useMediaQuery, Box, Image } from "@chakra-ui/react";

interface Props {
  handlePositionChange: (id: number) => void
}

const StreetPlan = ({
  handlePositionChange
}: Props) => {
  const dispatch = useDispatch();
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);

  const togglePopup = () => setIsOpenPopUp(!isOpenPopUp);
  
  const [isSmallerThan820] = useMediaQuery('(max-width: 820px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan768] = useMediaQuery('(max-width: 768px)');

  const togglePosition = (id: number) => {
    handlePositionChange(id)
    togglePopup();
  }
  return (
    <>
      {!isOpenPopUp && 
        <Box 
        position="absolute" 
        top="35px" 
        right="25px" 
        paddingTop="5px" 
        paddingLeft="5px" 
        paddingRight="5px"
        rounded={2}
        zIndex={1000} 
        cursor={'pointer'} 
        backgroundColor="#ffffff">
          <Image
              objectFit="cover"
              src="images/street_plan.png"
              alt="Chakra UI"
              width="200px"
              height="120px"
              onClick={togglePopup}
              />
        </Box>
      }
      <Modal
          isOpen={isOpenPopUp}
          togglePopup={togglePopup}
          maxWidth={isSmallerThan768 ? '660px' : '1020px'}
          height={isSmallerThan900 ? '100%' : '75%'}
          width="100%"
          id="street-plan-modal"
      >
        <Image
          objectFit="cover"
          src="images/street_plan.png"
          width="100%"
          height="100%"
          cursor={'pointer'}
          />
        <Image
          objectFit="cover"
          src="images/ellipse.png"
          position="absolute" 
          top="16%" 
          right="51%"
          onClick={() => togglePosition(1)}
          cursor={'pointer'}
          />
        <Image
          objectFit="cover"
          src="images/ellipse.png"
          position="absolute" 
          top="32%" 
          right="27%"
          onClick={() => togglePosition(2)}
          cursor={'pointer'}
          />
        <Image
          objectFit="cover"
          src="images/ellipse.png"
          position="absolute" 
          top="32%" 
          right="73%"
          onClick={() => togglePosition(3)}
          cursor={'pointer'}
          />
        <Image
          objectFit="cover"
          src="images/ellipse.png"
          position="absolute" 
          top="80%" 
          right="67.5%"
          onClick={() => togglePosition(4)}
          cursor={'pointer'}
          />
        <Image
          objectFit="cover"
          src="images/ellipse.png"
          position="absolute" 
          top="80%" 
          right="36%"
          onClick={() => togglePosition(5)}
          cursor={'pointer'}
          />
      </Modal>
    </>
  );
};

export default StreetPlan;