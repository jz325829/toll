import MainBuildings from './MainBuildings';
import { BuildingData } from './MainBuildings/types';

interface Props {
  isVisibleRooms: boolean;
  setPageLoaded: () => void;
  dummyData: BuildingData | null | undefined
  isPageLoaded: boolean;
  setPageLoadedTrue: () => void;
  building1: THREE.Object3D<THREE.Object3DEventMap>[];
  building2: THREE.Object3D<THREE.Object3DEventMap>[];
  building3: THREE.Object3D<THREE.Object3DEventMap>[];
  building4: THREE.Object3D<THREE.Object3DEventMap>[];
  building5: THREE.Object3D<THREE.Object3DEventMap>[];
  building6: THREE.Object3D<THREE.Object3DEventMap>[];
  divider1: THREE.Object3D<THREE.Object3DEventMap>[];
  divider2: THREE.Object3D<THREE.Object3DEventMap>[];
  divider3: THREE.Object3D<THREE.Object3DEventMap>[];
  divider4: THREE.Object3D<THREE.Object3DEventMap>[];
  divider5: THREE.Object3D<THREE.Object3DEventMap>[];
  divider6: THREE.Object3D<THREE.Object3DEventMap>[];
}

function Scene({
  isVisibleRooms, setPageLoaded, isPageLoaded, dummyData, setPageLoadedTrue, building1,
  building2, building3, building4, building5, building6, divider1, divider2, divider3, divider4, divider5, divider6
}: Props) {
  return (
    <>
      <directionalLight
        castShadow
        position={[-22, 10, 25]}
        intensity={0.7}
        shadow-mapSize={1024}
        shadow-camera-top={-20}
        shadow-camera-bottom={20}
        shadow-camera-left={-35}
        shadow-camera-right={35}
      />
      <directionalLight
        position={[18, 8, -25]}
        intensity={0.3}
        shadow-mapSize={1024}
        shadow-camera-top={-20}
        shadow-camera-bottom={20}
        shadow-camera-left={-35}
        shadow-camera-right={35}
      />

      <MainBuildings
        isVisibleRooms={isVisibleRooms}
        isPageLoaded={isPageLoaded}
        setPageLoaded={setPageLoaded}
        dummyData={dummyData}
        setPageLoadedTrue={setPageLoadedTrue}
        building1={building1}
        building2={building2}
        building3={building3}
        building4={building4}
        building5={building5}
        building6={building6}
        divider1={divider1}
        divider2={divider2}
        divider3={divider3}
        divider4={divider4}
        divider5={divider5}
        divider6={divider6}
      />
    </>
  );
}

export default Scene;
