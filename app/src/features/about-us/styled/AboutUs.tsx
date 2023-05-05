import styled from 'styled-components'

export const AboutUs = styled.div`
  .color1 {
    color: ${(props) => props.theme.css.theme1stColor};
  }
  .color2 {
    color: ${(props) => props.theme.css.theme2ndColor};
  }
  .color3 {
    color: ${(props) => props.theme.css.theme3rdColor};
  }
  .color4 {
    color: ${(props) => props.theme.css.theme4thColor};
  }
  .color5 {
    color: ${(props) => props.theme.css.theme5thColor};
  }
  .color6 {
    color: ${(props) => props.theme.css.theme6thColor};
  }
  .color7 {
    color: ${(props) => props.theme.css.theme7thColor};
  }

  .intro {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    p {
      max-width: unset;
    }
  }

  .warn {
    color: ${(props) => props.theme.css.themeWarningColor};
    font-weight: bold;
  }

  .center {
    text-align: center;
    padding: 1rem 0 0 0;
  }

  > div.story {
    padding: 1rem;
    background-color: ${(props) => props.theme.css.themeSecondaryColor};
    color: ${(props) => props.theme.css.primaryBkColor};
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1rem;

    > div {
      flex: 1 1 0;
      min-width: 300px;
    }

    div.image {
      border-radius: 1rem;
      background-image: url('/assets/background-09.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }

    ul {
      margin-top: 1rem;
      background-color: ${(props) => props.theme.css.primaryBkColor};
      border-radius: 1rem;
      color: ${(props) => props.theme.css.black};
      list-style: disc;
      padding: 1rem 2rem;

      li {
        padding: 0.25rem;
        margin: 0.5em 0;
        border-radius: 0.25rem;
      }
    }
  }

  > div.process {
    display: flex;
    flex-flow: column;
    align-items: center;

    > section {
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 1rem;
      max-width: 60%;
      padding: 1rem;

      @media only screen and (max-width: 1024px) {
        max-width: 80%;
      }

      @media only screen and (max-width: 600px) {
        max-width: unset;
      }

      > h1 {
        color: ${(props) => props.theme.css.secondaryColor};
        font-size: 1.75rem;
      }

      > article {
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        gap: 1rem;
        column-gap: 5rem;
        width: 100%;
        min-height: 130px;
        justify-content: center;

        h2 {
          color: ${(props) => props.theme.css.theme3rdColor};
        }

        > div:nth-child(1) {
          > svg {
            width: 100px;
            height: 100px;
          }
        }

        > div:nth-child(2) {
          flex: 1;
          min-width: 300px;
        }
      }
    }
  }
`
