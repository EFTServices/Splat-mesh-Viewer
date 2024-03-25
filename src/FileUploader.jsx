import React, { useContext, useState } from 'react'
import { GlobalObjectsContext } from './components/GlobalObjectProvider';

function FileUploader() {
    const {setGltfFile,setSplatFile} = useContext(GlobalObjectsContext) 
    
    const handleSplatUpload = (event) => {
        const file = event.target.files[0];
        setSplatFile(file);
      };
    
      const handleGltfUpload = (event) => {
        const file = event.target.files[0];
        setGltfFile(file);
      };
      
  return (
    <div>
        Upload Splat file:<input type="file" onChange={handleSplatUpload} accept=".splat" />
        Upload mesh file:<input type="file" onChange={handleGltfUpload} accept=".gltf,.glb" />
    </div>
  )
}

export default FileUploader