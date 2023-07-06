import './App.css'
import { useState } from 'react'
import { Suspense, useEffect } from 'react'
import Experience from './components/Experience'
import { Canvas, useThree } from '@react-three/fiber'
import LoadingScreen from './components/LoadingScreen'
import CustomizationInterface from './components/CustomizationInterface'
import CustomizationInstructions from './components/CustomizationInstructions'

import colorsList from './components/monsters/colorsList'
import monstersList from './components/monsters/monstersList'

const CameraSetup = () => {
  const { camera } = useThree();

  useEffect(() => {
    // Adjust camera position based on screen width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        camera.position.set(0, 3, 8); // Set camera position further away on smaller screens
      } else {
        camera.position.set(0, 1, 5); // Set camera position closer on larger screens
      }
    };

    // Initial call to handleResize
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, [camera]);

  return null;
};

function App() {

  const [modelPosition, setModelPosition] = useState([0,-1,0])
  const [startedExperience, setStartedExperience]  = useState(false)

  // Customization State
  const [selectedMonster, setSelectedMonster]  = useState(0)
  const [avatarSelectedIndex, setAvatarSelectedIndex]  = useState(0)
  const [skinColorIndex, setSkinColorIndex]  = useState(0)
  const [headDetailColorIndex, setHeadDetailColorIndex]  = useState(0)

  // Selected data
  let selectedSkinColor = null
  let selectedHeadDetailColor = null

   useEffect(() => {
      setSelectedMonster(monstersList.find(monster => monster.id === avatarSelectedIndex))
   },[avatarSelectedIndex])

   // Update selectedMonster when skinColorIndex changes
   useEffect(() => {
    selectedSkinColor = colorsList.find(color => color.id === skinColorIndex).color

    if (selectedMonster && selectedSkinColor) {
      setSelectedMonster(prevMonster => ({
        ...prevMonster,
        skinColor: selectedSkinColor
      }));
    }
  }, [skinColorIndex]);

  // Update selectedMonster when headDetailColorIndex changes
  useEffect(() => {
    selectedHeadDetailColor = colorsList.find(color => color.id === headDetailColorIndex).color

    if (selectedMonster && selectedHeadDetailColor) {
      setSelectedMonster(prevMonster => ({
        ...prevMonster,
        headDetailColor: selectedHeadDetailColor
      }));
    }
  }, [headDetailColorIndex]);

  // Adjust model position based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setModelPosition([0,0.5,0])
      } else {
        setModelPosition([0,-1.5,0])
      }
    };

    // Initial call to handleResize
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='App d-flex justify-content-center'>
      <Canvas>
        <CameraSetup />
        <Suspense fallback={null}>
        {
          startedExperience && <Experience
              modelPosition={modelPosition}
              selectedMonster={selectedMonster} />
        }
        </Suspense>
      </Canvas>
      <LoadingScreen startedExperience={startedExperience} setStartedExperience={() => setStartedExperience(true)}/>
      <CustomizationInterface
        avatarSelectedIndex={avatarSelectedIndex}
        setAvatarSelectedIndex={setAvatarSelectedIndex}
        skinColorIndex={skinColorIndex}
        setSkinColorIndex={setSkinColorIndex}
        headDetailColorIndex={headDetailColorIndex}
        setHeadDetailColorIndex={setHeadDetailColorIndex}
      />
      <CustomizationInstructions startedExperience={startedExperience}/>
    </div>
  )
}

export default App
