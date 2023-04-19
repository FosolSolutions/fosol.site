import styled from 'styled-components'

export const Services = styled.div`
  display: flex;
  flex-flow: column;

  .banner-01 {
    background-image: url('/assets/background-06.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: repeat;
    height: 500px;
  }

  > div:nth-child(2) {
    display: flex;
    flex-flow: column;
    gap: 1em;
    margin: 1em 0;

    > section {
      display: flex;
      flex-flow: column;
      margin: 0 1em;
      padding: 1em;
      background-color: ${(props) => props.theme.css.primaryBackgroundColor};
      border-radius: 0.5em;

      h1 {
        color: ${(props) => props.theme.css.themePrimaryColor};
      }

      > div {
        padding: 0 1em;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        gap: 1em;
        max-width: 80%;
        margin: auto;

        > div {
          flex: 1 1 auto;
          padding: 0.5em;
          border: solid 1px ${(props) => props.theme.css.themePrimaryColor};
          border-radius: 0.5em;
          text-align: center;
        }
      }
    }
  }
`
