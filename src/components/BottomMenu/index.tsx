import { Box, Image,Text } from "@chakra-ui/react";

interface Props {
  toggleBuildingOne: (id: number) => void
  togglePopup: () => void,
  handlePositionChange: (id: number) => void
  positionId: number
}

interface Menu {
  name: string;
  image: string;
  positionId: number;
  buildingNumber?: number;
}

// Positions data with panorama images
const menus: Menu[] = [
  { name: "Entry", image: "images/entry-1.png", positionId: 1},
  { name: "Building 1", image: "./renders/spin1/spin1_0001.jpg", positionId: 1, buildingNumber: 1},
  { name: "Building 3", image: "./renders/spin3/spin3_0001.jpg", positionId: 1, buildingNumber: 3},
  { name: "Building 4", image: "./renders/spin4/spin4_0001.jpg", positionId: 1, buildingNumber: 4},
  { name: "Building 5", image: "./renders/spin5/spin5_0001.jpg", positionId: 1, buildingNumber: 5},
  { name: "Legend", image: "images/street_plan.png", positionId: 1},
  { name: "Entry", image: "images/entry-1.png", positionId: 2},
  { name: "Building 1", image: "./renders/spin1/spin1_0001.jpg", positionId: 2, buildingNumber: 1},
  { name: "Building 3", image: "./renders/spin3/spin3_0001.jpg", positionId: 2, buildingNumber: 3},
  { name: "Building 4", image: "./renders/spin4/spin4_0001.jpg", positionId: 2, buildingNumber: 4},
  { name: "Building 5", image: "./renders/spin5/spin5_0001.jpg", positionId: 2, buildingNumber: 5},
  { name: "Legend", image: "images/street_plan.png", positionId: 2},
  { name: "Entry", image: "images/entry-1.png", positionId: 3},
  { name: "Building 5", image: "./renders/spin5/spin5_0001.jpg", positionId: 3, buildingNumber: 5},
  { name: "Building 4", image: "./renders/spin4/spin4_0001.jpg", positionId: 3, buildingNumber: 4},
  { name: "Building 3", image: "./renders/spin3/spin3_0001.jpg", positionId: 3, buildingNumber: 3},
  { name: "Building 1", image: "./renders/spin1/spin1_0001.jpg", positionId: 3, buildingNumber: 1},
  { name: "Legend", image: "images/street_plan.png", positionId: 3},
  { name: "Entry", image: "images/entry-1.png", positionId: 4},
  { name: "Building 2", image: "./renders/spin2/spin2_0001.jpg", positionId: 4, buildingNumber: 2},
  { name: "Building 3", image: "./renders/spin3/spin3_0001.jpg", positionId: 4, buildingNumber: 3},
  { name: "Building 4", image: "./renders/spin4/spin4_0001.jpg", positionId: 4, buildingNumber: 4},
  { name: "Building 6", image: "./renders/spin6/spin6_0001.jpg", positionId: 4, buildingNumber: 6},
  { name: "Legend", image: "images/street_plan.png", positionId: 4},
  { name: "Entry", image: "images/entry-1.png", positionId: 5},
  { name: "Building 6", image: "./renders/spin6/spin6_0001.jpg", positionId: 5, buildingNumber: 6},
  { name: "Building 4", image: "./renders/spin4/spin4_0001.jpg", positionId: 5, buildingNumber: 4},
  { name: "Building 3", image: "./renders/spin3/spin3_0001.jpg", positionId: 5, buildingNumber: 3},
  { name: "Building 2", image: "./renders/spin2/spin2_0001.jpg", positionId: 5, buildingNumber: 2},
  { name: "Legend", image: "images/street_plan.png", positionId: 5},
];

const BottomMenu = ({ toggleBuildingOne, togglePopup, handlePositionChange, positionId }: Props) => {

  const toggleImage = (menu: Menu) => {
    if (menu.name == "Legend") {
      togglePopup();
    } else {
      menu.buildingNumber && toggleBuildingOne(menu.buildingNumber);
    }
  };

  return (
    <Box
      position={'absolute'}
      bottom="0px"
      display={"flex"}
      left="50%"
      padding="10px"
      paddingBottom={"30px"}
      transform= 'translateX(-50%)'
      rounded={2}
      cursor={'default'} 
      backgroundColor="#00000030">
      {menus
        .filter((menu) => menu.positionId === positionId)
        .map((menu, index) => (
          <Box
            padding="5px"
          >
            <Text
              fontSize="16px"
              fontWeight="700"
              textAlign={"center"}
            >
              {menu.name}
            </Text>
            {menu.name == "Entry" ?
              <>
                {positionId == 1 ?
                  <Image
                    key={index}
                    width={"10vw"}
                    height={"10vh"}
                    src={menu.image}
                    cursor={'defult'}
                    borderRadius="md"
                    border="4px solid"
                    borderColor="#110d89"
                  />
                  :
                  <Image
                    key={index}
                    width={"10vw"}
                    height={"10vh"}
                    src={menu.image}
                    cursor={'pointer'}
                    borderRadius="md"
                    onClick={() => handlePositionChange(1)}
                  />
                }
              </>
              :
              <Image
                key={index}
                width={"10vw"}
                height={"10vh"}
                src={menu.image}
                cursor={'pointer'}
                borderRadius="md"
                onClick={() => toggleImage(menu)}
              />
            }
            
          </Box>
        ))}
    </Box>
  );
};

export default BottomMenu;