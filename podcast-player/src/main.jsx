import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from "./context/ThemeContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AudioPlayerProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AudioPlayerProvider>
  </StrictMode>,
)
