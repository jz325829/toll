import MainBuildings from './MainBuildings';
import { BuildingData } from './MainBuildings/types';

interface Props {
  isVisibleRooms: boolean;
  setPageLoaded: () => void;
  dummyData: BuildingData | null | undefined
  isPageLoaded: boolean;
  setPageLoadedTrue: () => void;
}

function Scene({
  isVisibleRooms, setPageLoaded, isPageLoaded, dummyData, setPageLoadedTrue,
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
      />
    </>
  );
}

export default Scene;
