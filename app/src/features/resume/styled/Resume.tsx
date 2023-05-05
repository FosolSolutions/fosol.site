import styled from 'styled-components'

export const Resume = styled.div`
  section {
    padding: 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;

    > form {
      display: flex;
      flex-flow: column;
      gap: 1rem;
      width: 100%;
      max-width: 50%;

      @media only screen and (max-width: 600px) {
        max-width: unset;
      }

      .address {
        display: flex;
        flex-flow: column;
        gap: 0.25rem;

        > div.row {
          > div {
            flex: 1;
          }
        }
      }

      div.row {
        flex-wrap: wrap;

        > div {
          flex: 1;
        }
      }

      .skill {
        padding: 0.25rem;
        border-radius: 0.5rem;
        border: solid 1px ${(props) => props.theme.palette.primary.light};

        div.row {
          > div {
            flex: 1 1 auto;

            &.trash {
              flex: 0;
            }
          }
        }

        &:nth-child(odd) {
        }
      }
    }
  }
`
