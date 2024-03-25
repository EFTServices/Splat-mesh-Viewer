import { useState } from 'react'
import Viewer from './components/Viewer'
import FileUploader from './FileUploader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileUploader />
      <Viewer/>
    </>
  )
}

export default App
