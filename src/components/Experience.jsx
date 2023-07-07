import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { useEffect } from "react"
import { createElement } from "react"


const Experience = ({ modelPosition, selectedMonster, rotationSelected }) => {

    const model = useRef()

    // Apply rotation when rotationSelected changes
    useEffect(() => {
        const rotationAngle = rotationSelected ? 0 : Math.PI;
        model.current.rotation.set(0, rotationAngle, 0);
      }, [rotationSelected]);

    return (
        <>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.3} />
            <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />

            <group ref={model} position={modelPosition}>
                {
                    createElement(
                        selectedMonster.component,
                        {
                            'headDetailColor': selectedMonster.headDetailColor,
                            'skinColor': selectedMonster.skinColor
                        }
                    )
                }
            </group>
        </>
    )
}

export default Experience