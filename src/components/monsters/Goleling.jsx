/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/Goleling.gltf
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Gogeling = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Goleling.gltf')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[2]].reset().fadeIn(0.5).play()
  },[])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Goleling">
            <skinnedMesh name="Cube009" geometry={nodes.Cube009.geometry} material={materials.Goleling_Main} skeleton={nodes.Cube009.skeleton}>
                <meshStandardMaterial color={props.skinColor}/>
            </skinnedMesh>
            <skinnedMesh name="Cube009_1" geometry={nodes.Cube009_1.geometry} material={materials.Goleling_Secondary} skeleton={nodes.Cube009_1.skeleton}>
                <meshStandardMaterial color={props.headDetailColor}/>
            </skinnedMesh>
            <skinnedMesh name="Cube009_2" geometry={nodes.Cube009_2.geometry} material={materials.Eye_Black} skeleton={nodes.Cube009_2.skeleton} />
            <skinnedMesh name="Cube009_3" geometry={nodes.Cube009_3.geometry} material={materials.Eye_White} skeleton={nodes.Cube009_3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Gogeling

useGLTF.preload('./models/Goleling.gltf')
