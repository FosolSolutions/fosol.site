import styled from 'styled-components'

export const ClientStories = styled.div`
  .banner-01 {
    background-image: url('/assets/background-07.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${(props) => props.theme.css.black};
  }

  > div:nth-child(2) {
    overflow: auto;
    height: calc(100vh - 420px);
    padding: 1em;
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    gap: 1em;
    align-items: center;
    justify-content: center;

    > article {
      cursor: pointer;
      width: 250px;
      min-height: 200px;
      padding: 1em;
      display: flex;
      flex-flow: column;
      background-color: ${(props) => props.theme.css.primaryBkColor};
      border: solid 1px ${(props) => props.theme.css.themePrimaryColor};
      border-top-right-radius: 1em;
      border-bottom-left-radius: 1em;

      h1 {
        font-weight: 100;
        font-size: 1.25em;
      }

      .logo {
        max-width: 70px;
        height: auto;
      }

      .details {
        flex: 1;
        display: flex;
        flex-flow: row;
        gap: 1em;
        align-items: center;
        justify-content: center;
      }

      .name {
        color: ${(props) => props.theme.css.themePrimaryColor};
      }

      .link {
        font-size: 0.75em;
      }

      &:hover {
        box-shadow: 0 0 5px ${(props) => props.theme.css.themePrimaryColor};

        h1 {
          color: ${(props) => props.theme.css.themePrimaryColor};
        }

        .link {
          color: ${(props) => props.theme.css.themePrimaryColor};
        }
      }
    }
  }
`
