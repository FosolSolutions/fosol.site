import styled from 'styled-components'

export const Clients = styled.section`
  &.clients {
    max-width: 100vw;
    overflow: hidden;
    background-color: ${(props) => props.theme.css.primaryBkColor};

    > .client-list {
      display: flex;
      flex-flow: row;
      gap: 0.5rem;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      background-color: ${(props) => props.theme.css.theme5thColor};
      padding: 0.5rem;
      border-radius: 0.75rem;

      > article {
        flex: 1 1 0;
        display: flex;
        flex-flow: column;
        align-content: stretch;
        padding: 1rem;
        background-color: ${(props) => props.theme.css.primaryBkColor};
        border-radius: 0.5rem;
        min-width: 120px;
        border: solid 1px ${(props) => props.theme.css.theme5thColor};

        > h2 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        > * {
          flex: 1;
        }

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${(props) => props.theme.css.primaryBkColor};
          border-radius: 0.5rem;
          min-height: 75px;
        }
      }
    }
  }

  h1 {
    color: ${(props) => props.theme.css.themePrimaryColor};
  }
`
