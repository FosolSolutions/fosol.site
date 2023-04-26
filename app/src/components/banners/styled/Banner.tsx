import styled from 'styled-components'
import { IBanner } from '..'

export const Banner = styled.div<IBanner>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
  background-color: ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return props.theme.css.themeSecondaryColor
      case 'info':
        return props.theme.css.themeInfoColor
      case 'success':
        return props.theme.css.themeSuccessColor
      case 'warning':
        return props.theme.css.themeWarningColor
      case 'error':
        return props.theme.css.themeErrorColor
      case 'primary':
      default:
        return props.theme.css.themePrimaryColor
    }
  }};
  color: ${(props) => props.theme.css.white};
  height: ${(props) => props.height ?? props.theme.css.bannerSize};
  min-width: 300px;
  overflow: hidden;

  h1 {
    color: ${(props) => props.theme.css.white};
    text-transform: uppercase;
  }

  p {
    text-align: center;
    max-width: 50%;
  }

  @media only screen and (max-width: 600px) {
    p {
      max-width: unset;
    }
  }
`
