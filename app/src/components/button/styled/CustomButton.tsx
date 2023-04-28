import { Button, ButtonProps } from '@mui/material'
import styled from 'styled-components'

export const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.css.secondaryColor,
}))
