import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import UnitTooltip from '../../components/UI/UnitTooltip';
import { $carousel_actions } from '../../store/carousel/carouselSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Image } from "@chakra-ui/react";
import StreetPlan from "../../components/StreetPlan";
import ArrowLeftIcon from "../../components/UI/SvgIcons/ArrowLeftIcon";
import ArrowRightIcon from "../../components/UI/SvgIcons/ArrowRightIcon";
import ButtonGroup from "../../components/UI/ButtonGroup";
import BottomMenu from "../../components/BottomMenu";

// Define the type for positions
export interface Position {
  id: number;
  image: string;
  position: [number, number, number];
  name: string;
  arrowCamera: [number, number];
}

// Positions data with panorama images
const positions: Position[] = [
  { id: 1, image: "/images/main_street_P.jpg", position: [0, 0, 0], name: "Main Street", arrowCamera: [0.2, -0.2]},
  { id: 2, image: "/images/park1_P.jpg", position: [500, 0, 0], name: "Park 1", arrowCamera: [0.5, 3.14]},
  { id: 3, image: "/images/park2_P.jpg", position: [-500, 0, 0], name: "Park 2", arrowCamera: [-3.14, -0.6]},
  { id: 4, image: "/images/street2_P.jpg", position: [-250, 500, 0], name: "Street 1", arrowCamera: [-3.14, -0.5]},
  { id: 5, image: "/images/street3_P.jpg", position: [250, 500, 0], name: "Street 2", arrowCamera: [0.5, 3.14]},
];

interface ToolTipPosition {
  buildingNumber: number;
  position: [number, number, number];
  panoramaId: number;
}

// Positions data with panorama images
const toolTipPositions: ToolTipPosition[] = [
  { buildingNumber: 4, position: [-65, 30, -105], panoramaId: 1},
  { buildingNumber: 3, position: [65, 30, -105], panoramaId: 1},
  { buildingNumber: 5, position: [-200, 30, -105], panoramaId: 1},
  { buildingNumber: 1, position: [200, 30, -105], panoramaId: 1},
  { buildingNumber: 1, position: [0, 40, -105], panoramaId: 2},
  { buildingNumber: 4, position: [-200, 40, -105], panoramaId: 2},
  { buildingNumber: 3, position: [-450, 40, -105], panoramaId: 2},
  { buildingNumber: 5, position: [-800, 40, -105], panoramaId: 2},
  { buildingNumber: 4, position: [200, 50, -105], panoramaId: 3},
  { buildingNumber: 3, position: [450, 50, -105], panoramaId: 3},
  { buildingNumber: 1, position: [800, 50, -105], panoramaId: 3},
  { buildingNumber: 5, position: [0, 50, -105], panoramaId: 3},
  { buildingNumber: 6, position: [800, 60, -105], panoramaId: 4},
  { buildingNumber: 4, position: [400, 60, -105], panoramaId: 4},
  { buildingNumber: 3, position: [100, 60, -105], panoramaId: 4},
  { buildingNumber: 2, position: [-200, 60, -105], panoramaId: 4},
  { buildingNumber: 6, position: [200, 60, -105], panoramaId: 5},
  { buildingNumber: 4, position: [-100, 60, -105], panoramaId: 5},
  { buildingNumber: 3, position: [-400, 60, -105], panoramaId: 5},
  { buildingNumber: 2, position: [-600, 60, -105], panoramaId: 5}
];

// Define hotspot positions and associate them with panorama positions
interface Hotspot {
  position: [number, number, number];
  targetPositionId: number;
  panoramaId: number; // The panorama this hotspot belongs to
}

// Update hotspots to include a reference to the panorama they belong to
const hotspots: Hotspot[] = [
  { position: [100, 0, -30], targetPositionId: 2, panoramaId: 1 },
  { position: [-100, 0, -20], targetPositionId: 3, panoramaId: 1 },
  { position: [50, 5, -60], targetPositionId: 4, panoramaId: 1 },
  { position: [-50, 5, -60], targetPositionId: 5, panoramaId: 1 },
  { position: [-100, 0, 20], targetPositionId: 1, panoramaId: 2 },
  { position: [-60, 5, -50], targetPositionId: 4, panoramaId: 2 },
  { position: [-10, 0, -100], targetPositionId: 2, panoramaId: 4 },
  { position: [100, 0, 0], targetPositionId: 5, panoramaId: 4 },
  { position: [-100, 0, 0], targetPositionId: 4, panoramaId: 5 },
  { position: [10, 0, -100], targetPositionId: 3, panoramaId: 5 },
  { position: [100, 0, 40], targetPositionId: 1, panoramaId: 3 },
  { position: [50, 5, -60], targetPositionId: 5, panoramaId: 3 },
];

// Component to render a panorama
interface PanoramaProps {
  image: string;
  visible: boolean;
}

const Panorama = React.memo(({ image, visible }: PanoramaProps) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [isTextureLoaded, setIsTextureLoaded] = useState(false);
  const [progress, setProgress] = useState(1); // For animation progress
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const cachedTexture = THREE.Cache.get(image);
    if (cachedTexture) {
      setIsTextureLoaded(true);
      return cachedTexture;
    }
    const tex = loader.load(
      image,
      () => {
        setIsTextureLoaded(true);
        THREE.Cache.add(image, tex);
      },
      undefined,
      (error) => console.error("Error loading texture:", error)
    );
    tex.wrapS = THREE.RepeatWrapping;
    tex.repeat.x = -1;
    return tex;
  }, [image]);

  useEffect(() => {
    if (visible && materialRef.current) {
      // Start the shader effect when panorama is visible
      setProgress(0);
      // Use tween or similar for smooth animation
      const animation = setInterval(() => {
        setProgress((prev) => Math.min(prev + 0.05, 1)); // Adjust increment for smooth transition
      }, 50);
      return () => clearInterval(animation);
    }
  }, [visible]);

  const fragmentShader = `
    uniform float progress;
    uniform sampler2D tex;
    varying vec2 vUv;
    void main() {
      vec4 textureColor = texture2D(tex, vUv);
      // float alpha = smoothstep(0.0, 1.0, progress);
      gl_FragColor = vec4(textureColor.rgb, 1.0); 
    }
  `;

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  return isTextureLoaded ? (
    <mesh ref={mesh} rotation={[0, Math.PI / 2, 0]} visible={visible}>
      <sphereGeometry args={[500, 100, 100]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      {/* <shaderMaterial
        ref={materialRef}
        uniforms={{
          progress: { value: progress },
          tex: { value: texture },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        side={THREE.DoubleSide}
        transparent={true}
      /> */}
    </mesh>
  ) : null;
});

// Hotspot component for clickable spots
interface HotspotProps {
  position: [number, number, number];
  onClick: () => void;
}

const Hotspot = React.memo(({ position, onClick }: HotspotProps) => {
  return (
    <group position={position}>
      <mesh>
        <Html zIndexRange={[1, 10]}>
          <Image
            src="images/hotspot.png"
            width="60px"
            marginTop={-20}
            marginLeft={-20}
            cursor={"pointer"}
            _hover={{ width: '80px', marginTop: '-30px', marginLeft: '-30px'}}
            onClick={onClick}
            />
        </Html>
      </mesh>
    </group>
  );
});

// Component to handle raycasting inside the canvas
// const RaycasterHelper = ({ handlePositionChange }: { handlePositionChange: (id: number) => void }) => {
//   const { raycaster, mouse, camera, scene, gl } = useThree();
//   const [hoveredHotspot, setHoveredHotspot] = useState<boolean>(false);

  // const handleMouseMove = (event: MouseEvent) => {
  //   const canvasBounds = gl.domElement.getBoundingClientRect();
  //   const x = ((event.clientX - canvasBounds.left) / canvasBounds.width) * 2 - 1;
  //   const y = -((event.clientY - canvasBounds.top) / canvasBounds.height) * 2 + 1;

  //   mouse.set(x, y);
  //   raycaster.setFromCamera(mouse, camera);

  //   const intersects = raycaster.intersectObjects(scene.children, true);
  //   const hotspotHovered = intersects.some(intersect => intersect.object.userData.isHotspot);

  //   setHoveredHotspot(hotspotHovered);
  // };

  // useEffect(() => {
  //   gl.domElement.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     gl.domElement.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, [gl, camera, scene, raycaster, mouse]);

//   useEffect(() => {
//     gl.domElement.style.cursor = hoveredHotspot ? "pointer" : 'url(icons/rotate-icon.png) 25 25, auto';
//   }, [hoveredHotspot, gl.domElement]);

//   return null;
// };

interface CameraCaptureProps {
  setRotation: (direction: THREE.Euler) => void;
  currentPosition: Position;
}

const CameraCapture = ({ setRotation, currentPosition }: CameraCaptureProps) => {
  const { camera, gl } = useThree();
  const lastRotation = useRef(new THREE.Euler());
  const updateTime = useRef<number>(0);
  const throttleInterval = 1000;
  const [showArrowRight, setShowArrowRight] = useState(false);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const rotationStep = 0.2;
  const controls = useRef<any>(null);
  
  useEffect(() => {
    gl.toneMapping = THREE.NoToneMapping;
    gl.toneMappingExposure = 1.5;
  }, [gl]);

  useFrame(({ clock }) => {
    const currentTime = clock.getElapsedTime();
    // setShowArrowRight(camera.rotation.y < currentPosition.arrowCamera[0]);
    // setShowArrowLeft(camera.rotation.y > currentPosition.arrowCamera[1]);
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

  const rotateRight = () => {
    if (camera.rotation.y + rotationStep <= Math.PI / 3) {
      camera.position.x += rotationStep;
      controls.current.update();
    }
  };

  const rotateLeft = () => {
    if (camera.rotation.y - rotationStep >= -Math.PI / 3) {
      camera.position.x -= rotationStep;
      controls.current.update();
    }
  };

  return (
    <>
      <OrbitControls
        ref={controls}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={-0.3}
        minAzimuthAngle={-Math.PI / 3}
        maxAzimuthAngle={Math.PI / 3}
        dampingFactor={0.05}
        enableDamping={true}
        enableRotate={true}
      />

      {/* {showArrowRight && <ArrowRight onClick={rotateRight} />}
      {showArrowLeft && <ArrowLeft onClick={rotateLeft} />} */}
    </>
  );
};

const ArrowLeft = ({ onClick }: { onClick: () => void }) => {
  return (
    <Html position={[0, 0, 0]} zIndexRange={[1, 10]} style={{ position: "fixed", left: "45vw", top: "50%", transform: "translateY(-50%)" }}>
      <ButtonGroup icon={<ArrowRightIcon />} onClick={onClick} />
    </Html>
  );
};

const ArrowRight = ({ onClick }: { onClick: () => void }) => {
  return (
    <Html position={[0, 0, 0]} zIndexRange={[1, 10]} style={{ position: "fixed", right: "45vw", top: "50%", transform: "translateY(-50%)" }}>
      <ButtonGroup icon={<ArrowLeftIcon />} onClick={onClick} />
    </Html>
  );
};

interface Props {
  setIsPageLoading: (loading: boolean) => void;
}

const PanoView: React.FC<Props> = ({ setIsPageLoading }) => {
  const [currentPosition, setCurrentPosition] = useState<Position>(positions[0]);
  const [rotation, setRotation] = useState<THREE.Euler>(new THREE.Euler());
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const togglePopup = () => setIsOpenPopUp(!isOpenPopUp);
  const dispatch = useDispatch();

  // Function to change panorama position with smooth transition
  const handlePositionChange = (positionId: number) => {
    const newPosition = positions.find((pos) => pos.id === positionId);
    if (newPosition) {
      setCurrentPosition(newPosition);
    }
  };

  const toggleBuildingOne = (id:  0 | 1 | 2 | 3 | 4 | 5 | 6) => {
    dispatch($carousel_actions.setZoomed(true));
    dispatch($carousel_actions.setBuildingId(`building${id}`));
    dispatch($carousel_actions.updateBuildingDataNumber(id));
    setIsPageLoading(true);
    setTimeout(() => {
      // @ts-ignore asd
      window.GLOBAL_CACHE.updateCurrentSlide(16, true);
      setIsPageLoading(false);
    }, 2000);
  };
  
  return (
    <div className="canvas-container" >
      <Canvas style={{ height: "100vh", width: "100vw" }} camera={{ fov: 82, position: [0, 0, 0.1] }} >
        <CameraCapture setRotation={setRotation} currentPosition={currentPosition}/>
        {positions.map((pos) => (
          <Panorama
            key={pos.id}
            image={pos.image}
            visible={pos.id === currentPosition.id} 
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

        {/* <RaycasterHelper handlePositionChange={handlePositionChange} /> */}
      </Canvas>
      <BottomMenu
        toggleBuildingOne={toggleBuildingOne}
        togglePopup={togglePopup}
        handlePositionChange={handlePositionChange} 
        positionId={currentPosition.id}
      />
      <StreetPlan 
        handlePositionChange={handlePositionChange} 
        rotation={rotation} currentPosition={currentPosition}
        toggleBuildingOne={toggleBuildingOne}
        isOpenPopUp={isOpenPopUp}
        togglePopup={togglePopup}
      />

    </div>
  );
};

export default PanoView;
