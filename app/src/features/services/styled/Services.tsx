import styled from 'styled-components'

export const Services = styled.div`
  display: flex;
  flex-flow: column;

  section.services {
    padding: 1rem;
    background-color: ${(props) => props.theme.css.theme2ndColor};

    h1 {
      color: ${(props) => props.theme.css.theme6thColor};
    }

    > div {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      gap: 1rem;

      > div:nth-child(1) {
        flex: 1 1 0;
        min-width: 300px;
        padding: 1rem;
        color: ${(props) => props.theme.css.theme6thColor};
        font-size: 1.15rem;
      }

      > div:nth-child(2) {
        flex: 3 3 0;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: stretch;
        justify-content: stretch;

        > div {
          flex-grow: 1;
          width: calc(33% - 4em);
          min-width: 300px;
          background-color: ${(props) => props.theme.css.primaryBkColor};
          border-radius: 0.5rem;
          padding: 1rem;
          display: flex;
          flex-flow: row;
          align-items: center;
          gap: 1rem;

          h2 {
            font-size: 1.5rem;
          }
          .icon {
            flex: 1;
            img {
              max-height: 50px;
              width: auto;
            }
          }
        }
      }
    }
  }

  section.skill {
    padding: 2rem;
  }

  .center {
    padding-top: 1rem;
    text-align: center;
  }
`
