/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Valo Niskanen (https://sketchfab.com/Valo.Niskanen)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/bookshelf-3b5ddd7b35f747d19a1cc85d7c07e64a
title: Bookshelf
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../../../models/bookshelf/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group name="Cube001_1" position={[6.86, -0.92, 1.11]}>
            <mesh geometry={nodes.mesh_1.geometry} material={materials.Material} />
          </group>
          <group position={[7.14, -0.33, 0.87]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials['Material.001']} />
          </group>
          <group position={[7.14, -0.33, 0.87]}>
            <mesh geometry={nodes.mesh_2.geometry} material={materials.None} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/bookshelf/scene.gltf')
