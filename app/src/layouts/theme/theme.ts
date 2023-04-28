import { createTheme } from '@mui/material'
import css from '../../css/_variables.module.scss'

export const theme = createTheme({
  css,
  palette: {
    primary: {
      main: '#bc3334',
      contrastText: '#fff',
    },
    secondary: {
      main: '#003049',
      contrastText: '#fff',
    },
  },
})
