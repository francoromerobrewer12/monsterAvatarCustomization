import { OrbitControls } from "@react-three/drei"
import { createElement } from "react"


const Experience = ({ modelPosition, selectedMonster }) => {

    return (
        <>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={2} position={[-5, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />

            <group position={modelPosition}>
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