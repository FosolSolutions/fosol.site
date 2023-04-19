import styled from 'styled-components'

export const Clients = styled.section`
  &.clients {
    max-width: 100vw;
    overflow: hidden;

    > .client-list {
      display: flex;
      flex-flow: row;
      gap: 1em;
      -webkit-overflow-scrolling: touch;
      overflow: auto;

      > article {
        flex: 1 1 0;
        display: flex;
        flex-flow: column;
        align-content: stretch;
        padding: 1em;
        background-color: rgb(198, 182, 182, 0.5);
        border-radius: 0.5em;
        min-width: 120px;

        > h2 {
          font-size: 1em;
          margin-bottom: 1em;
        }

        > * {
          flex: 1;
        }

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          border-radius: 0.5em;
          min-height: 75px;
        }
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.css.themePrimaryColor};
  }
`
