import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalObjectsProvider } from './components/GlobalObjectProvider.jsx'
import { GlobalObjectsContext } from './components/GlobalObjectProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalObjectsProvider>
      <App />
    </GlobalObjectsProvider>
  </React.StrictMode>,
)
