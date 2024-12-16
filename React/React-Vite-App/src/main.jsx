import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import AppProps from './AppProps'
import AppContext from './AppContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppProps/> */}
    <AppContext/>
  </StrictMode>,
)
