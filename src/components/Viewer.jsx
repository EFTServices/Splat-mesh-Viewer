import { Box, CameraControls, Gltf, OrbitControls, PivotControls, Splat } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useContext, useEffect } from 'react'
import './Viewer.css'
import { Physics, RigidBody } from '@react-three/rapier'
import { GlobalObjectsContext } from './GlobalObjectProvider'

function Viewer() {
    const {gltfFile,splatFile} = useContext(GlobalObjectsContext) 

  return (
    <>
        <Canvas>
            <CameraControls makeDefault/>
            <PivotControls>
            {splatFile &&
                <Splat src={URL.createObjectURL(splatFile)}/>
            }
            
            {gltfFile && 
                <Physics debug>
                    <RigidBody enabledRotations="false" enabledTranslations="false" colliders={"trimesh"}>
                        <Gltf src={URL.createObjectURL(gltfFile)}/>
                    </RigidBody>
                </Physics>
            }
            </PivotControls>
            
            
        </Canvas>
    </>
  )
}

export default Viewer