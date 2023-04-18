import styled from 'styled-components'

export const Banner = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.css.themePrimaryColor};
  color: ${(props) => props.theme.css.white};
  height: 200px;

  h1 {
    color: ${(props) => props.theme.css.white};
    text-transform: uppercase;
  }

  p {
    font-size: 1.25em;
  }
`
