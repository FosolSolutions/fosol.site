import styled from 'styled-components'

export const Services = styled.div`
  display: flex;
  flex-flow: column;

  section.services {
    padding: 1em;
    background-color: ${(props) => props.theme.css.theme4thColor};

    h1 {
      color: ${(props) => props.theme.css.theme6thColor};
    }

    > div {
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      gap: 1em;

      > div:nth-child(1) {
        flex: 1 1 0;
        min-width: 300px;
        padding: 1em;
        color: ${(props) => props.theme.css.theme6thColor};
        font-size: 1.15em;
      }

      > div:nth-child(2) {
        flex: 3 3 0;
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        gap: 1em;
        align-items: stretch;
        justify-content: stretch;

        > div {
          flex-grow: 1;
          width: calc(33% - 4em);
          min-width: 300px;
          background-color: hsl(0, 0%, 85%);
          border-radius: 0.5em;
          padding: 1em;
          display: flex;
          flex-flow: row;
          align-items: center;
          gap: 1em;

          h2 {
            font-size: 1.5em;
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
`
