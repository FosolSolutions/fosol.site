import styled from 'styled-components'

export const Story = styled.div`
  background-color: ${(props) => props.theme.css.primaryBkColor};
  height: 100%;

  .banner {
    > div {
      gap: 1em;

      > *:nth-child(1) {
        flex: 2;
      }
      > *:nth-child(2) {
        flex: 1;
      }
    }
  }

  .intro {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap-reverse;
    align-items: center;

    > div:nth-child(1) {
      flex: 2;
    }

    > div:nth-child(2) {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .logo {
      height: auto;
      max-width: 300px;
      max-height: 100px;
    }

    .company-name {
      font-weight: bold;
    }
  }

  > div:nth-child(2) {
    margin: 1em;
  }

  article {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1em;

    > div {
      flex: 1;
    }

    section {
      min-width: 330px;
      > h1 {
        color: ${(props) => props.theme.css.themePrimaryColor};
        text-transform: uppercase;
      }
    }

    .picture {
      > img {
        width: 100%;
        min-width: 300px;
        height: auto;
        box-shadow: 0 0 10px ${(props) => props.theme.css.black};
      }
    }
  }
`
