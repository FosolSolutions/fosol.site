import styled from 'styled-components'

export const Footer = styled.footer`
  min-width: 300px;

  p {
    margin: 0;
    padding: 0;
    word-wrap: normal;
  }

  div.row {
    white-space: nowrap;
  }

  div.contact {
    display: flex;
    flex-flow: column;

    @media only screen and (max-width: 600px) {
      margin-left: unset;
    }
  }

  & > div.row:last-of-type {
    align-items: center;

    & > div {
      flex: 1;
    }
  }

  .logo {
    background-color: ${(props) => props.theme.css.primaryBkColor};
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.25em;
    width: 52px;
    height: 52px;

    > img {
      width: 50px;
      height: 50px;
    }
  }

  .white {
    color: #fff;
  }
`
