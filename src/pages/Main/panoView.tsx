import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import UnitTooltip from '../../components/UI/UnitTooltip';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import { useSelector, useDispatch } from 'react-redux';
import StreetPlan from "../../components/StreetPlan";

// Define the type for positions
interface Position {
  id: number;
  image: string;
  position: [number, number, number];
  name: string;
}

// Positions data with panorama images
const positions: Position[] = [
  { id: 1, image: "/images/main_street_P.jpg", position: [0, 0, 0], name: "Main Street"},
  { id: 2, image: "/images/park1_P.jpg", position: [500, 0, 0], name: "Park 1" },
  { id: 3, image: "/images/park2_P.jpg", position: [-500, 0, 0], name: "Park 2" },
  { id: 4, image: "/images/street2_P.jpg", position: [-250, 500, 0], name: "Street 1" },
  { id: 5, image: "/images/street3_P.jpg", position: [250, 500, 0], name: "Street 2" },
];

interface ToolTipPosition {
  buildingNumber: number;
  position: [number, number, number];
  panoramaId: number;
}

// Positions data with panorama images
const toolTipPositions: ToolTipPosition[] = [
  { buildingNumber: 4, position: [-65, 50, -105], panoramaId: 1},
  { buildingNumber: 3, position: [65, 50, -105], panoramaId: 1},
  { buildingNumber: 5, position: [-200, 50, -105], panoramaId: 1},
  { buildingNumber: 1, position: [200, 50, -105], panoramaId: 1},
  { buildingNumber: 1, position: [0, 80, -105], panoramaId: 2},
  { buildingNumber: 4, position: [-200, 80, -105], panoramaId: 2},
  { buildingNumber: 3, position: [-450, 80, -105], panoramaId: 2},
  { buildingNumber: 5, position: [-800, 80, -105], panoramaId: 2},
  { buildingNumber: 4, position: [200, 105, -105], panoramaId: 3},
  { buildingNumber: 3, position: [450, 105, -105], panoramaId: 3},
  { buildingNumber: 1, position: [800, 105, -105], panoramaId: 3},
  { buildingNumber: 5, position: [0, 105, -105], panoramaId: 3},
  { buildingNumber: 6, position: [800, 125, -105], panoramaId: 4},
  { buildingNumber: 4, position: [400, 125, -105], panoramaId: 4},
  { buildingNumber: 3, position: [100, 125, -105], panoramaId: 4},
  { buildingNumber: 2, position: [-200, 125, -105], panoramaId: 4},
  { buildingNumber: 6, position: [200, 125, -105], panoramaId: 5},
  { buildingNumber: 4, position: [-100, 125, -105], panoramaId: 5},
  { buildingNumber: 3, position: [-400, 125, -105], panoramaId: 5},
  { buildingNumber: 2, position: [-600, 125, -105], panoramaId: 5}
];

// Define hotspot positions and associate them with panorama positions
interface Hotspot {
  position: [number, number, number];
  targetPositionId: number;
  panoramaId: number; // The panorama this hotspot belongs to
}

// Update hotspots to include a reference to the panorama they belong to
const hotspots: Hotspot[] = [
  { position: [100, 0, -20], targetPositionId: 2, panoramaId: 1 },
  { position: [-100, 0, -20], targetPositionId: 3, panoramaId: 1 },
  { position: [-100, 0, 20], targetPositionId: 1, panoramaId: 2 },
  { position: [100, 0, -80], targetPositionId: 4, panoramaId: 2 },
  { position: [0, 0, -100], targetPositionId: 2, panoramaId: 4 },
  { position: [100, 0, 0], targetPositionId: 5, panoramaId: 4 },
  { position: [-100, 0, 0], targetPositionId: 4, panoramaId: 5 },
  { position: [0, 0, -100], targetPositionId: 3, panoramaId: 5 },
  { position: [100, 0, 40], targetPositionId: 1, panoramaId: 3 },
  { position: [-100, 0, -40], targetPositionId: 5, panoramaId: 3 },
];

// Component to render a panorama
interface PanoramaProps {
  image: string;
  visible: boolean;
  setIsPageLoading: (loading: boolean) => void;
}

const Panorama: React.FC<PanoramaProps> = ({ image, visible, setIsPageLoading }) => {
  const mesh = useRef<THREE.Mesh>(null);

  // Use state to track when the texture is loaded
  const [isTextureLoaded, setIsTextureLoaded] = useState(false);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.visible = visible;
    }
  });

  // Load the texture and trigger setIsPageLoading(false) after it's fully loaded
  const texture = new THREE.TextureLoader().load(
    image,
    () => {
      // Callback for when the texture has fully loaded
      setIsTextureLoaded(true);
      setIsPageLoading(false); // Set loading to false when texture is fully loaded
    },
    undefined, 
    (error) => {
      console.error("An error occurred loading the texture:", error);
    }
  );

  texture.wrapS = THREE.RepeatWrapping;
  texture.repeat.x = -1;

  // Return mesh only if texture is loaded
  return isTextureLoaded ? (
    <mesh ref={mesh} rotation={[0, Math.PI / 2, 0]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  ) : null; // Optionally, you can return null or a placeholder while the texture is loading
};


// Hotspot component for clickable spots
interface HotspotProps {
  position: [number, number, number];
  onClick: () => void;
}

const Hotspot: React.FC<HotspotProps> = ({ position, onClick }) => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerCircleRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree(); // Access the camera from useThree

  // useFrame to update rotation so that the hotspot faces the camera
  useFrame(() => {
    if (outerRingRef.current && innerCircleRef.current) {
      // Get the vector direction to the camera
      outerRingRef.current.lookAt(camera.position);
      innerCircleRef.current.lookAt(camera.position);
    }
  });

  return (
    <group position={position} onClick={onClick}>
      {/* Outer Ring */}
      <mesh ref={outerRingRef} scale={[5, 5, 1]} userData={{ isHotspot: true }}>
        <ringGeometry args={[0.9, 1.2, 32]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      {/* Inner Circle - Shift it slightly forward to avoid z-fighting */}
      <mesh ref={innerCircleRef} scale={[3, 3, 1]} position={[0, 0, 0.01]} userData={{ isHotspot: true }}>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// Component to handle raycasting inside the canvas
const RaycasterHelper: React.FC<{ handlePositionChange: (id: number) => void }> = ({ handlePositionChange }) => {
  const { raycaster, mouse, camera, scene, gl } = useThree();
  const [hoveredHotspot, setHoveredHotspot] = useState<boolean>(false); // Track if a hotspot is being hovered

  // Handle the mouse move event for hover detection
  const handleMouseMove = (event: MouseEvent) => {
    const canvasBounds = gl.domElement.getBoundingClientRect();
    const x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    const y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

    // Update the mouse position and raycaster
    mouse.set(x, y);
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with scene objects
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      const intersectedObject = intersects[0].object;
      
      // Check if the intersected object is a hotspot
      if (intersectedObject.userData.isHotspot) {
        setHoveredHotspot(true);
      } else {
        setHoveredHotspot(false);
      }
    } else {
      setHoveredHotspot(false);
    }
  };

  // Handle the click event for position change
  const handleClick = (event: MouseEvent) => {
    const canvasBounds = gl.domElement.getBoundingClientRect();
    const x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    const y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

    // Update the mouse position and raycaster
    mouse.set(x, y);
    raycaster.setFromCamera(mouse, camera);

    // Check for intersections with scene objects
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      hotspots.forEach((hotspot) => {
        // Compare positions using approximate values to avoid floating point precision issues
        const hotspotPosition = new THREE.Vector3(...hotspot.position);
        const clickedPosition = clickedObject.position.clone();

        if (hotspotPosition.distanceTo(clickedPosition) < 1) {
          handlePositionChange(hotspot.targetPositionId);
        }
      });
    }
  };

  // Attach event listeners once when the component mounts
  React.useEffect(() => {
    gl.domElement.addEventListener("mousemove", handleMouseMove); // Listen for mouse move to detect hover

    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove); // Clean up on unmount
    };
  }, [gl, camera, scene, raycaster, mouse]);
  
  // Update cursor style based on whether a hotspot is hovered
  React.useEffect(() => {
    gl.domElement.style.cursor = hoveredHotspot ? "pointer" : 'url(icons/rotate-icon.png) 25 25, auto'; 
  }, [hoveredHotspot, gl.domElement]);

  return null;
};

interface Props {
  setIsPageLoading: (loading: boolean) => void;
}

const PanoView: React.FC<Props> = ({ setIsPageLoading }) => {
  const [currentPosition, setCurrentPosition] = useState<Position>(positions[0]);
  const dispatch = useDispatch();

  // Function to change panorama position with smooth transition
  const handlePositionChange = (positionId: number) => {
    const newPosition = positions.find((pos) => pos.id === positionId);
    if (newPosition) {
      setIsPageLoading(true);
      setCurrentPosition(newPosition);
    }
  };

  const toggleBuildingOne = (id: number) => {
    dispatch($carousel_actions.setZoomed(true));
    dispatch($carousel_actions.setBuildingId(`building${id}`));
    dispatch($carousel_actions.updateBuildingDataNumber(1));

    setTimeout(() => {
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(61, true);
    }, 2000);
  };
  
  return (
    <div className="canvas-container" >
      <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ fov: 100, position: [0, 0, 0.1] }}>
        {positions.map((pos) => (
          <Panorama
            key={pos.id}
            image={pos.image}
            visible={pos.id === currentPosition.id} 
            setIsPageLoading={setIsPageLoading}
            />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} />

        {toolTipPositions
          .filter((toolTipPosition) => toolTipPosition.panoramaId === currentPosition.id)
          .map((toolTipPosition, index) => (
            <mesh key={index} visible={false} position={toolTipPosition.position}>
              <meshBasicMaterial color={0xff0000} />
              <boxGeometry args={[1, 1, 1]} />
              <Html zIndexRange={[1, 10]}>
                <UnitTooltip
                  title={`Building ${toolTipPosition.buildingNumber}`}
                  hoveredText={``}
                  hoveredText2={``}
                  onClick={() => toggleBuildingOne(toolTipPosition.buildingNumber)}
                 />
              </Html>
            </mesh>
          ))}
        {hotspots
          .filter((hotspot) => hotspot.panoramaId === currentPosition.id)
          .map((hotspot, index) => (
            <Hotspot
              key={index}
              position={hotspot.position}
              onClick={() => handlePositionChange(hotspot.targetPositionId)}
            />
          ))}

        <RaycasterHelper handlePositionChange={handlePositionChange} />
      </Canvas>
      <StreetPlan handlePositionChange={handlePositionChange}/>
    </div>
  );
};

export default PanoView;
