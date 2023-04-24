import styled from 'styled-components'
import { IButtonProps } from '..'

export const Button = styled.div<IButtonProps>`
  input {
    display: inline-block;
    border-radius: 0.75em;
    margin: 0;
    padding: 10px 15px;
    font-size: 1.05em;
    font-weight: normal;
    cursor: pointer;
    text-align: center;

    background-color: ${(props) => {
      switch (props.variant) {
        case 'secondary':
          return props.theme.css.btnPrimaryColor
        case 'info':
          return props.theme.css.btnPrimaryColor
        case 'link':
          return props.theme.css.btnPrimaryColor
        case 'success':
          return props.theme.css.btnPrimaryColor
        case 'warning':
          return props.theme.css.btnPrimaryColor
        case 'error':
          return props.theme.css.btnPrimaryColor
        case 'primary':
        default:
          return props.theme.css.btnPrimaryColor
      }
    }};
    border: solid 1px
      ${(props) => {
        switch (props.variant) {
          case 'secondary':
            return props.theme.css.btnPrimaryColor
          case 'info':
            return props.theme.css.btnPrimaryColor
          case 'link':
            return props.theme.css.btnPrimaryColor
          case 'success':
            return props.theme.css.btnPrimaryColor
          case 'warning':
            return props.theme.css.btnPrimaryColor
          case 'error':
            return props.theme.css.btnPrimaryColor
          default:
            return props.theme.css.btnPrimaryColor
        }
      }};
    color: ${(props) => {
      switch (props.variant) {
        case 'info':
        case 'link':
        case 'success':
        case 'warning':
        case 'error':
          return props.theme.css.black
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
            return props.theme.css.btnPrimaryHoverColor
          case 'info':
            return props.theme.css.btnPrimaryHoverColor
          case 'link':
            return props.theme.css.btnPrimaryHoverColor
          case 'success':
            return props.theme.css.btnPrimaryHoverColor
          case 'warning':
            return props.theme.css.btnPrimaryHoverColor
          case 'error':
            return props.theme.css.btnPrimaryHoverColor
          case 'primary':
          default:
            return props.theme.css.btnPrimaryHoverColor
        }
      }};
    }
  }
`
