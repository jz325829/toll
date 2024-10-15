import { useState, useEffect } from 'react';
import './App.scss';
import Main from './pages/Main';
import { BuildingData } from './webgl/MainBuildings/types';

export default function App() {
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';
  
  const [dummyData, setDummyData] = useState<BuildingData | null>(null);

  useEffect(() => {
    const filePath: string = '/data/units.json';
    const { unitData } = window.swellData;

    if (unitData) {
      setDummyData(unitData);
    } else {
      fetch(filePath)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Couldn"t load data ');
          }
          return response.json();
        })
        .then((data) => {
          setDummyData(data);
        })
        .catch((error) => {
          console.error('Error happend while fetching file:', error);
        });
    }
  }, [isItSecondVersion]);


  if (!dummyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Main dummyData={dummyData} />
    </div>
  );
}