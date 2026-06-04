import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './assets/css/style.css'
import './assets/css/pavanity-theme.css' // Pavanity B2B Theme
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>,
)
