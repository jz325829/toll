import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import UnitTooltip from '../../components/UI/UnitTooltip';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import { useSelector, useDispatch } from 'react-redux';
import StreetPlan from "../../components/StreetPlan";

// Define the type for positions
export interface Position {
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
  { position: [50, 0, -60], targetPositionId: 4, panoramaId: 1 },
  { position: [-60, 0, -60], targetPositionId: 5, panoramaId: 1 },
  { position: [-100, 0, 20], targetPositionId: 1, panoramaId: 2 },
  { position: [-60, 0, -50], targetPositionId: 4, panoramaId: 2 },
  { position: [0, 0, -100], targetPositionId: 2, panoramaId: 4 },
  { position: [100, 0, 0], targetPositionId: 5, panoramaId: 4 },
  { position: [-100, 0, 0], targetPositionId: 4, panoramaId: 5 },
  { position: [0, 0, -100], targetPositionId: 3, panoramaId: 5 },
  { position: [100, 0, 40], targetPositionId: 1, panoramaId: 3 },
  { position: [50, 0, -60], targetPositionId: 5, panoramaId: 3 },
];

// Component to render a panorama
interface PanoramaProps {
  image: string;
  visible: boolean;
  setIsPageLoading: (loading: boolean) => void;
}

const Panorama = React.memo(({ image, visible, setIsPageLoading }: PanoramaProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [isTextureLoaded, setIsTextureLoaded] = useState(false);

  // Load and cache textures
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(
      image,
      () => {
        setIsTextureLoaded(true);
        setIsPageLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.x = -1;
    return tex;
  }, [image, setIsPageLoading]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.visible = visible;
    }
  });

  return isTextureLoaded ? (
    <mesh ref={mesh} rotation={[0, Math.PI / 2, 0]}>
      <sphereGeometry args={[500, 30, 20]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  ) : null;
});



// Hotspot component for clickable spots
interface HotspotProps {
  position: [number, number, number];
  onClick: () => void;
}

const Hotspot = React.memo(({ position, onClick }: HotspotProps) => {
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerCircleRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame(() => {
    if (outerRingRef.current && innerCircleRef.current) {
      outerRingRef.current.lookAt(camera.position);
      innerCircleRef.current.lookAt(camera.position);
    }
  });

  return (
    <group position={position} onClick={onClick}>
      <mesh ref={outerRingRef} scale={[4, 4, 1]} userData={{ isHotspot: true }}>
        <ringGeometry args={[0.8, 1.1, 16]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>

      <mesh ref={innerCircleRef} scale={[2.5, 2.5, 1]} position={[0, 0, 0.01]} userData={{ isHotspot: true }}>
        <circleGeometry args={[0.8, 16]} />
        <meshBasicMaterial color="white" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
});

// Component to handle raycasting inside the canvas
const RaycasterHelper = ({ handlePositionChange }: { handlePositionChange: (id: number) => void }) => {
  const { raycaster, mouse, camera, scene, gl } = useThree();
  const [hoveredHotspot, setHoveredHotspot] = useState<boolean>(false);

  const handleMouseMove = (event: MouseEvent) => {
    const canvasBounds = gl.domElement.getBoundingClientRect();
    const x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
    const y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

    mouse.set(x, y);
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children, true);
    const hotspotHovered = intersects.some(intersect => intersect.object.userData.isHotspot);

    setHoveredHotspot(hotspotHovered);
  };

  useEffect(() => {
    gl.domElement.addEventListener("mousemove", handleMouseMove);
    return () => {
      gl.domElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, [gl, camera, scene, raycaster, mouse]);

  useEffect(() => {
    gl.domElement.style.cursor = hoveredHotspot ? "pointer" : 'url(icons/rotate-icon.png) 25 25, auto';
  }, [hoveredHotspot, gl.domElement]);

  return null;
};

interface CameraCaptureProps {
  setRotation: (direction: THREE.Euler) => void;
}

const CameraCapture = ({ setRotation }: CameraCaptureProps) => {
  const { camera } = useThree();
  const lastRotation = useRef(new THREE.Euler());
  const updateTime = useRef<number>(0);
  const throttleInterval = 1500; // Increased throttle interval

  useFrame(({ clock }) => {
    const currentTime = clock.getElapsedTime();
    if (currentTime - updateTime.current >= throttleInterval / 1000) {
      const currentRotation = camera.rotation.clone();
      const roundRotation = (value: number) => Math.round(value * 100) / 100;

      const significantRotation =
        Math.abs(roundRotation(currentRotation.x) - roundRotation(lastRotation.current.x)) > 0.15 ||
        Math.abs(roundRotation(currentRotation.y) - roundRotation(lastRotation.current.y)) > 0.15;

      if (significantRotation) {
        lastRotation.current.copy(currentRotation);
        updateTime.current = currentTime;
        setRotation(currentRotation); 
      }
    }
  });

  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      rotateSpeed={-0.5}
      minAzimuthAngle={-Math.PI / 3}
      maxAzimuthAngle={Math.PI / 3}
      dampingFactor={0.1}
      enableDamping={true}
    />
  );
};

interface Props {
  setIsPageLoading: (loading: boolean) => void;
}

const PanoView: React.FC<Props> = ({ setIsPageLoading }) => {
  const [currentPosition, setCurrentPosition] = useState<Position>(positions[0]);
  const [rotation, setRotation] = useState<THREE.Euler>(new THREE.Euler());
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
        <CameraCapture setRotation={setRotation} />
        {positions.map((pos) => (
          <Panorama
            key={pos.id}
            image={pos.image}
            visible={pos.id === currentPosition.id} 
            setIsPageLoading={setIsPageLoading}
            />
        ))}
        {/* <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={-0.5} minAzimuthAngle={-Math.PI / 4} maxAzimuthAngle={Math.PI / 4}/> */}

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
      <StreetPlan handlePositionChange={handlePositionChange} rotation={rotation} currentPosition={currentPosition}/>
    </div>
  );
};

export default PanoView;
