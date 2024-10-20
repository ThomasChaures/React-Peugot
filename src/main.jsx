import { StrictMode } from 'react' // react
import { createRoot } from 'react-dom/client' 
import App from './App.jsx' // App
import './index.css'

createRoot(document.getElementById('root')).render( // renderizamos en #root //
  // obliga a nuestro componente para se renderice mas de una sola vez strictMode
  <StrictMode> 
    <App />
  </StrictMode>,
)
