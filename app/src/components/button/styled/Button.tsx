import styled from 'styled-components'
import { IButtonProps } from '..'

export const Button = styled.div<IButtonProps>`
  display: inline-block;
  border-radius: 0.75em;
  margin: 0;
  padding: 10px 15px;
  font-size: 1.05em;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  overflow: auto;
  white-space: normal;
  user-select: none;

  background-color: ${(props) => {
    switch (props.variant) {
      case 'secondary':
        return props.theme.css.btnSecondaryColor
      case 'info':
        return props.theme.css.btnInfoColor
      case 'link':
        return props.theme.css.btnLinkColor
      case 'success':
        return props.theme.css.btnSuccessColor
      case 'warning':
        return props.theme.css.btnWarningColor
      case 'error':
        return props.theme.css.btnErrorColor
      case 'primary':
      default:
        return props.theme.css.btnPrimaryColor
    }
  }};
  border: solid 1px
    ${(props) => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.css.btnSecondaryColor
        case 'info':
          return props.theme.css.btnInfoColor
        case 'link':
          return props.theme.css.btnLinkColor
        case 'success':
          return props.theme.css.btnSuccessColor
        case 'warning':
          return props.theme.css.btnWarningColor
        case 'error':
          return props.theme.css.btnErrorColor
        case 'primary':
        default:
          return props.theme.css.btnPrimaryColor
      }
    }};
  color: ${(props) => {
    switch (props.variant) {
      case 'info':
      case 'link':
      case 'success':
      case 'error':
        return props.theme.css.black
      case 'warning':
      case 'primary':
      case 'secondary':
      default:
        return props.theme.css.white
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.css.btnSecondaryHoverColor
        case 'info':
          return props.theme.css.btnInfoHoverColor
        case 'link':
          return props.theme.css.btnLinkHoverColor
        case 'success':
          return props.theme.css.btnSuccessHoverColor
        case 'warning':
          return props.theme.css.btnWarningHoverColor
        case 'error':
          return props.theme.css.btnErrorHoverColor
        case 'primary':
        default:
          return props.theme.css.btnPrimaryHoverColor
      }
    }};
  }

  &:active {
    box-shadow: unset;
    transform: scale(0.98);
  }

  input {
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
    margin: 0;
    padding: 0;
  }
`
