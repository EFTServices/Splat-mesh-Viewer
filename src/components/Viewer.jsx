import { Box, CameraControls, Gltf, OrbitControls, PivotControls, Splat } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useContext, useEffect, useMemo, useRef } from 'react'
import './Viewer.css'
import { Physics, RigidBody } from '@react-three/rapier'
import { GlobalObjectsContext } from './GlobalObjectProvider'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';


function Viewer() {
    const {gltfFile,splatFile} = useContext(GlobalObjectsContext) 
    const groupRef = useRef()
    const { nodes, materials } = useGLTF('./mesh2.gltf')
    useEffect(()=>{
        // console.log(gltfFile);
        console.log(nodes.mesh_0.geometry);
    })
    const material = useMemo(() => new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 ,depthTest: false, }), []);

  return (
    <>
        <Canvas>
            <CameraControls makeDefault/>
            <PivotControls>

            {/* only render splat if the file is upload  */}
            {splatFile &&
                <Splat src={URL.createObjectURL(splatFile)}/>
            }
            
            {/* only render gltf mesh if the file is upload  */}
            {gltfFile && 
                <Physics>
                    <RigidBody enabledRotations="false" enabledTranslations="false" colliders={"trimesh"}>

                        {/* <Gltf src={URL.createObjectURL(gltfFile)}/> */}
                        <group ref={groupRef} {...props} dispose={null}>
                            <mesh geometry={nodes.mesh_0.geometry} />
                            <meshBasicMaterial color={'red'}/>
                        </group>
                        
                    </RigidBody>
                </Physics>
            }
            <Physics debug>
                    <RigidBody enabledRotations="false" enabledTranslations="false" colliders={"trimesh"}>
                        <group ref={groupRef} dispose={null}>
                            <mesh geometry={nodes.mesh_0.geometry} material={material}/>
                        </group>
                        
                    </RigidBody>
                </Physics>
            </PivotControls>
            
            
        </Canvas>
    </>
  )
}

export default Viewer