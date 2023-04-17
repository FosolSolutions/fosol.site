import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import css from './css/_variables.module.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ css }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
