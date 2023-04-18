import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import css from './css/_variables.module.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{ css }}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
