import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/App.css'

import App from './App.jsx'
import Menu from './Menu.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
