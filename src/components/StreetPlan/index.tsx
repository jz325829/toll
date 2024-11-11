import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../UI/Modal";
import { useMediaQuery, Box, Image } from "@chakra-ui/react";
import { MathUtils, Vector3 } from 'three';
import { Position } from "../../pages/Main/panoView";
import UnitTooltip from '../../components/UI/UnitTooltip';

interface BuildingPosition {
  buildingNumber: number;
  position: [number, number];
}

// Positions data with panorama images
const buildingPositions: BuildingPosition[] = [
  { buildingNumber: 1, position: [50, 20]},
  { buildingNumber: 2, position: [70, 20]},
  { buildingNumber: 3, position: [60, 40]},
  { buildingNumber: 4, position: [60, 60]},
  { buildingNumber: 5, position: [50, 80]},
  { buildingNumber: 6, position: [70, 80]},
];


interface Props {
  handlePositionChange: (id: number) => void
  rotation: THREE.Euler;
  currentPosition: Position;
  toggleBuildingOne: (id: number) => void
  isOpenPopUp: boolean;
  togglePopup: () => void
}

const StreetPlan = ({
  handlePositionChange, rotation, currentPosition, toggleBuildingOne, isOpenPopUp, togglePopup
}: Props) => {
  
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
          top="25px" 
          right="55px" 
          padding="5px"
          paddingBottom="0px"
          rounded={2}
          zIndex={1000} 
          cursor={'pointer'} 
          backgroundColor="#ffffff">
            <Image
              src="images/street_plan.png"
              alt="Chakra UI"
              height="120px"
              onClick={togglePopup}
              />
        </Box>
      }
      <Modal
        isOpen={isOpenPopUp}
        togglePopup={togglePopup}
        maxWidth={isSmallerThan768 ? '660px' : '1280px'}
        width="100%"
        paddingTop="25px"
        id="street-plan-modal"
        cursor={'default'}
      >
        <Image
          src="images/street_plan.png"
          width="100%"
          height="100%"
          />
        { currentPosition.id == 1 ?
          <>
            <Image
              src="images/ellipse.png"
              position="absolute" 
              top="15%" 
              right="47.5%"
              width="50px"
              onClick={() => togglePosition(1)}
            />
            <Image
              src="images/direction.png"
              position="absolute"
              top="18%"
              right="47%"
              width="60px"
              transform={`rotate(${MathUtils.radToDeg(-rotation.y)}deg)`}
              transformOrigin="top"
              />
          </>
          :
          <Image
            src="images/ellipse.png"
            position="absolute" 
            top="15%" 
            right="48.3%"
            onClick={() => togglePosition(1)}
            cursor={'pointer'}
            _hover={{ width: '50px', marginTop: '-6px', marginRight: '-6px'}}
          />
        }
        { currentPosition.id == 3 ?
          <>
            <Image
              objectFit="cover"
              src="images/ellipse.png"
              position="absolute" 
              top="27%"
              right="25%"
              width="50px"
              onClick={() => togglePosition(3)}
              />
            <Image
              src="images/direction.png"
              position="absolute"
              top="30%"
              right="25%"
              width="50px"
              transform={`rotate(${MathUtils.radToDeg(-rotation.y)}deg)`}
              transformOrigin="top"
              />
          </>
          :
          <Image
            objectFit="cover"
            src="images/ellipse.png"
            position="absolute" 
            top="27.5%"
            right="26%"
            onClick={() => togglePosition(3)}
            cursor={'pointer'}
            _hover={{ width: '50px', marginTop: '-6px', marginRight: '-6px'}}
            />
        }
        { currentPosition.id == 2 ?
          <>
            <Image
              objectFit="cover"
              src="images/ellipse.png"
              position="absolute" 
              top="21%" 
              right="78%"
              width="50px"
              onClick={() => togglePosition(2)}
              />
            <Image
              src="images/direction.png"
              position="absolute"
              top="24%"
              right="78%"
              width="50px"
              transform={`rotate(${MathUtils.radToDeg(-rotation.y)}deg)`}
              transformOrigin="top"
              />
          </>
          :
            <Image
              objectFit="cover"
              src="images/ellipse.png"
              position="absolute" 
              top="22%" 
              right="78%"
              onClick={() => togglePosition(2)}
              cursor={'pointer'}
              _hover={{ width: '50px', marginTop: '-6px', marginRight: '-6px'}}
            />
        }
        { currentPosition.id == 4 ?
          <>
            <Image
              objectFit="cover"
              src="images/ellipse.png"
              position="absolute" 
              top="83%" 
              right="63%"
              width="50px"
              onClick={() => togglePosition(4)}
            />
            <Image
              src="images/direction.png"
              position="absolute"
              top="86%"
              right="63%"
              width="50px"
              transform={`rotate(${MathUtils.radToDeg(-rotation.y) + 180}deg)`}
              transformOrigin="top"
              />
          </>
          :
          <Image
            objectFit="cover"
            src="images/ellipse.png"
            position="absolute" 
            top="84%" 
            right="63.5%"
            onClick={() => togglePosition(4)}
            cursor={'pointer'}
            _hover={{ width: '50px', marginTop: '-6px', marginRight: '-6px'}}
          />
        }
        { currentPosition.id == 5 ?
          <>
            <Image
              objectFit="cover"
              src="images/ellipse.png"
              position="absolute" 
              top="83%" 
              right="33%"
              width="50px"
              onClick={() => togglePosition(5)}
              />
            <Image
              src="images/direction.png"
              position="absolute"
              top="86.5%"
              right="33%"
              width="50px"
              transform={`rotate(${MathUtils.radToDeg(-rotation.y) + 180}deg)`}
              transformOrigin="top"
              />
          </>
          :
          <Image
            objectFit="cover"
            src="images/ellipse.png"
            position="absolute" 
            top="84%" 
            right="33.5%"
            onClick={() => togglePosition(5)}
            cursor={'pointer'}
            _hover={{ width: '50px', marginTop: '-6px', marginRight: '-6px'}}
          />
        }
        {buildingPositions
          .map((buildingPosition, index) => (
            <Box
              key={index}
              position={'absolute'}
              top={`${buildingPosition.position[0]}%`}
              left={`${buildingPosition.position[1]}%`}
            >
              <UnitTooltip
                title={`Building ${buildingPosition.buildingNumber}`}
                hoveredText={``}
                hoveredText2={``}
                onClick={() => toggleBuildingOne(buildingPosition.buildingNumber)}
                />
            </Box>
        ))}
      </Modal>
    </>
  );
};

export default StreetPlan;