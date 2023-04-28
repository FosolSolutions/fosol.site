import styled from 'styled-components'

export const Projects = styled.section`
  .containers {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1em;
    align-items: stretch;

    .container {
      display: flex;
      flex-flow: column;
      flex: 1 1 0;
      margin: 0.25em 0 0 0;
      min-width: 300px;
      min-height: 200px;
      border-radius: 0.75em;
      background-color: rgba(188, 51, 52, 0.9);
      color: #fff;
      overflow: hidden;

      & h2 {
        padding: 1em;
        font-size: 1em;
      }

      &:hover > :first-child {
        background-color: #4b2626;
        transition: background-color 0.5s ease;
      }

      & > div:first-child {
        display: flex;
        flex-flow: row;
        align-items: center;
      }

      .icon {
        height: 35px;
        margin: 0.25em;
        padding: 0.25em;
      }

      .icon-bk {
        border-radius: 0.5em;
        background-color: rgb(255, 255, 255, 0.25);
      }

      & > div:nth-child(2) {
        flex: 1 1 auto;
        display: flex;
        flex-flow: column;
        padding: 1em;
        background-color: rgb(255, 255, 255, 0.5);

        & > p:last-of-type {
          flex: 1;
        }
      }

      .logo {
        height: 50px;
      }
    }

    .work-mmia {
      background-image: url('/assets/projects/bc-gov/citz/mmia/mmia-01.png');
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 200px;
    }

    .work-coevent {
      background-image: url('/assets/projects/coevent/coevent-02.png');
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 200px;
    }

    .work-rpi-cluster {
      flex: 2;
      background-image: url('/assets/projects/rpi/rpi-cluster-01.jpg');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 200px;
    }
  }

  h1 {
    color: ${(props) => props.theme.css.themePrimaryColor};
  }
`
