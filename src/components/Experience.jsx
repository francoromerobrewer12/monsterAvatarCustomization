import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { useEffect } from "react"
import { createElement } from "react"
import { Vector2 } from "three"


const Experience = ({ modelPosition, selectedMonster, rotationSelected }) => {

    const model = useRef()
    const mouse = useRef(new Vector2());


    // Make model follow the cursor
    useEffect(() => {
        const handleMouseMove = (event) => {
          mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);

    useFrame(() => {
    if (rotationSelected) {
        const targetRotationX = mouse.current.y * -Math.PI / 15;
        const targetRotationY = mouse.current.x * Math.PI / 15;
        model.current.rotation.x += (targetRotationX - model.current.rotation.x) * 0.05;
        model.current.rotation.y += (targetRotationY - model.current.rotation.y) * 0.05;
    } else {
        const targetRotationY = Math.PI;
        model.current.rotation.y += (targetRotationY - model.current.rotation.y) * 0.05;
    }
    });

    // Apply rotation when rotationSelected changes
    useEffect(() => {
    const rotationAngle = rotationSelected ? Math.PI : 0;
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