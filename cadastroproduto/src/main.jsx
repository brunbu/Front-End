import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProdutoProvider } from './context/ProdutoProvider.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProdutoProvider>
    <App />
    </ProdutoProvider>
  </StrictMode>,
)
