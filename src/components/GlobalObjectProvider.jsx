// this component holds all the global variables/states
import { createContext, useRef, useState } from 'react';
const GlobalObjectsContext = createContext();

const GlobalObjectsProvider = ({ children }) => {
    const [splatFile, setSplatFile] = useState(null); // State for the uploaded splat file
    const [gltfFile, setGltfFile] = useState(null); // State for the uploaded GLTF file
    
  
    const contextValue = {
        splatFile,setSplatFile,
        gltfFile,setGltfFile
      };
    
      return <GlobalObjectsContext.Provider value={contextValue}>{children}</GlobalObjectsContext.Provider>;
    };
    
    export { GlobalObjectsProvider, GlobalObjectsContext };