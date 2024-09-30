// import './App.scss';
// import Main from './pages/Main';

// export default function App() {
//   return (
//     <div className="app">
//       <Main />

//     </div>
//   );
// }
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import UnitTooltip from "./components/UI/UnitTooltip";

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
  { buildingNumber: 3, position: [-65, 50, -105], panoramaId: 1},
  { buildingNumber: 4, position: [65, 50, -105], panoramaId: 1},
  { buildingNumber: 1, position: [-200, 50, -105], panoramaId: 1},
  { buildingNumber: 6, position: [200, 50, -105], panoramaId: 1},
  { buildingNumber: 1, position: [0, 70, -105], panoramaId: 2},
  { buildingNumber: 2, position: [100, 105, -105], panoramaId: 4},
  { buildingNumber: 3, position: [-100, 115, -105], panoramaId: 4},
  { buildingNumber: 4, position: [-300, 95, -105], panoramaId: 4},
  { buildingNumber: 2, position: [600, 125, -105], panoramaId: 5},
  { buildingNumber: 3, position: [430, 130, -105], panoramaId: 5},
  { buildingNumber: 4, position: [120, 125, -105], panoramaId: 5},
  { buildingNumber: 5, position: [-100, 105, -105], panoramaId: 5},
  { buildingNumber: 3, position: [-350, 85, -105], panoramaId: 3},
  { buildingNumber: 4, position: [-185, 95, -105], panoramaId: 3},
  { buildingNumber: 6, position: [50, 105, -105], panoramaId: 3},
];

// Define hotspot positions and associate them with panorama positions
interface Hotspot {
  position: [number, number, number];
  targetPositionId: number;
  panoramaId: number; // The panorama this hotspot belongs to
}

// Update hotspots to include a reference to the panorama they belong to
const hotspots: Hotspot[] = [
  { position: [100, 0, -20], targetPositionId: 3, panoramaId: 1 },
  { position: [-100, 0, -20], targetPositionId: 2, panoramaId: 1 },
  { position: [100, 0, 20], targetPositionId: 1, panoramaId: 2 },
  { position: [-100, 0, -80], targetPositionId: 4, panoramaId: 2 },
  { position: [0, 0, -100], targetPositionId: 2, panoramaId: 4 },
  { position: [-100, 0, 0], targetPositionId: 5, panoramaId: 4 },
  { position: [100, 0, 0], targetPositionId: 4, panoramaId: 5 },
  { position: [0, 0, -100], targetPositionId: 3, panoramaId: 5 },
  { position: [-100, 0, 20], targetPositionId: 1, panoramaId: 3 },
  { position: [100, 0, -40], targetPositionId: 5, panoramaId: 3 },
];

// Component to render a panorama
interface PanoramaProps {
  image: string;
  visible: boolean;
}

const Panorama: React.FC<PanoramaProps> = ({ image, visible }) => {
  const mesh = useRef<THREE.Mesh>(null);

  // Update the visibility of the panorama
  useFrame(() => {
    if (mesh.current) {
      mesh.current.visible = visible;
    }
  });

  const texture = new THREE.TextureLoader().load(image);
  return (
    <mesh ref={mesh} rotation={[0, Math.PI / 2, 0]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
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
      <mesh ref={outerRingRef} scale={[5, 5, 1]}>
        <ringGeometry args={[0.9, 1.2, 32]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      {/* Inner Circle - Shift it slightly forward to avoid z-fighting */}
      <mesh ref={innerCircleRef} scale={[3, 3, 1]} position={[0, 0, 0.01]}>
        <circleGeometry args={[0.9, 32]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

// Component to handle raycasting inside the canvas
const RaycasterHelper: React.FC<{ handlePositionChange: (id: number) => void }> = ({ handlePositionChange }) => {
  const { raycaster, mouse, camera, scene, gl } = useThree();

  // Handle the click event
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

  // Attach event listener once when the component mounts
  React.useEffect(() => {
    gl.domElement.addEventListener("click", handleClick);

    return () => {
      gl.domElement.removeEventListener("click", handleClick); // Clean up on unmount
    };
  }, [gl, camera, scene, raycaster, mouse]); // Dependencies to trigger effect when changed

  return null;
};

const App: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<Position>(positions[0]);

  // Function to change panorama position with smooth transition
  const handlePositionChange = (positionId: number) => {
    const newPosition = positions.find((pos) => pos.id === positionId);
    if (newPosition) {
      setCurrentPosition(newPosition);
    }
  };

  return (
    <div className="canvas-container">
      <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ fov: 100, position: [0, 0, 0.1] }}>
        {/* Render the current panorama */}
        {positions.map((pos) => (
          <Panorama
            key={pos.id}
            image={pos.image}
            visible={pos.id === currentPosition.id} />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} />

        {toolTipPositions
          .filter((toolTipPosition) => toolTipPosition.panoramaId === currentPosition.id)
          .map((toolTipPosition) => (
            <mesh visible={false} position={toolTipPosition.position}>
              <meshBasicMaterial color={0xff0000} />
              <boxGeometry args={[1, 1, 1]} />
              <Html>
                <UnitTooltip
                  title={`Building ${toolTipPosition.buildingNumber}`}
                  hoveredText={`Building ${toolTipPosition.buildingNumber}`}
                  hoveredText2={`Building ${toolTipPosition.buildingNumber} Available`}
                 />
              </Html>
            </mesh>
          ))}
        {/* Render hotspots only for the current panorama */}
        {hotspots
          .filter((hotspot) => hotspot.panoramaId === currentPosition.id)
          .map((hotspot, index) => (
            <Hotspot
              key={index}
              position={hotspot.position}
              onClick={() => handlePositionChange(hotspot.targetPositionId)}
            />
          ))}

        {/* Add Raycaster logic inside Canvas */}
        <RaycasterHelper handlePositionChange={handlePositionChange} />
      </Canvas>

      <div style={{ position: "absolute", top: 20, left: 20 }}>
        {positions.map((pos) => (
          <button
            key={pos.id}
            onClick={() => handlePositionChange(pos.id)}
            style={{ margin: "5px", padding: "10px" }}
          >
            Go to {pos.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;