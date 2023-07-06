/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/Demon.gltf
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Demon = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/Demon.gltf')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[2]].reset().fadeIn(0.5).play()
  },[])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <skinnedMesh name="Demon_Flying" geometry={nodes.Demon_Flying.geometry} material={materials.Demon_Main} skeleton={nodes.Demon_Flying.skeleton}>
              <meshStandardMaterial color={props.skinColor}/>
          </skinnedMesh>
          <group name="Demon_Flying001">
            <skinnedMesh name="Cube000" geometry={nodes.Cube000.geometry} material={materials.Black} skeleton={nodes.Cube000.skeleton} />
            <skinnedMesh name="Cube000_1" geometry={nodes.Cube000_1.geometry} material={materials.Eye_Black} skeleton={nodes.Cube000_1.skeleton} />
            <skinnedMesh name="Cube000_2" geometry={nodes.Cube000_2.geometry} material={materials.Eye_White} skeleton={nodes.Cube000_2.skeleton} />
          </group>
          <group name="Demon_Flying002">
            <skinnedMesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.Demon_Main} skeleton={nodes.Cube001.skeleton}>
                <meshStandardMaterial color={props.skinColor}/>
            </skinnedMesh>
            <skinnedMesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials.Black} skeleton={nodes.Cube001_1.skeleton}>
                <meshStandardMaterial color={props.headDetailColor}/>
            </skinnedMesh>
            <skinnedMesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials.Eye_White} skeleton={nodes.Cube001_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Demon

useGLTF.preload('./models/Demon.gltf')