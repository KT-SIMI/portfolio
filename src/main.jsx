import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// const images = import.meta.globEager('./assets/*.png')
// for (const path in images) {
//   const img = new Image()
//   img.src = images[path].default
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
