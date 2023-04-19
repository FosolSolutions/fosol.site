import styled from 'styled-components'

export const Story = styled.div`
  background-color: ${(props) => props.theme.css.primaryBackgroundColor};
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

  .logo {
    height: auto;
    max-width: 300px;
    max-height: 100px;
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
      > h1 {
        color: ${(props) => props.theme.css.themePrimaryColor};
        text-transform: uppercase;
      }
    }

    .picture {
      > img {
        width: 100%;
        height: auto;
      }
    }
  }
`
