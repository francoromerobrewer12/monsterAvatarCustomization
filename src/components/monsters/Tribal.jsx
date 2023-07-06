/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/Tribal.gltf
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Tribal = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Tribal.gltf')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[2]].reset().fadeIn(0.5).play()
  },[])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Tribal_Flying">
            <skinnedMesh name="Cube000" geometry={nodes.Cube000.geometry} material={materials.Tribal_Main} skeleton={nodes.Cube000.skeleton}>
                <meshStandardMaterial color={props.skinColor}/>
            </skinnedMesh>
            <skinnedMesh name="Cube000_1" geometry={nodes.Cube000_1.geometry} material={materials.Tribal_Secondary} skeleton={nodes.Cube000_1.skeleton}>
                <meshStandardMaterial color={props.headDetailColor}/>
            </skinnedMesh>
            <skinnedMesh name="Cube000_2" geometry={nodes.Cube000_2.geometry} material={materials.Tribal_Gold} skeleton={nodes.Cube000_2.skeleton} />
            <skinnedMesh name="Cube000_3" geometry={nodes.Cube000_3.geometry} material={materials.Eye_White} skeleton={nodes.Cube000_3.skeleton} />
            <skinnedMesh name="Cube000_4" geometry={nodes.Cube000_4.geometry} material={materials.Eye_Black} skeleton={nodes.Cube000_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Tribal

useGLTF.preload('./models/Tribal.gltf')
