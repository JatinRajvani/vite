import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ludo from './Ludo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Ludo/>
  </StrictMode>,
)
