/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Valo Niskanen (https://sketchfab.com/Valo.Niskanen)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/folded-newspaper-8f2a04cbcf3741088978399924b46a92
title: Folded Newspaper
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../models/newspaper/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[0.21, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials['Material.001']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/newspaper/scene.gltf')
