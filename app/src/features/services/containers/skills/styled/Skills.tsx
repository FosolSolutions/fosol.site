import styled from 'styled-components'

export const Skills = styled.div`
  display: flex;
  flex-flow: column;
  align-items: stretch;
  border-bottom: solid 1px #000;
  max-width: 100%;

  > h2 {
    overflow: hidden;
    background-color: ${(props) => props.theme.css.theme2ndColor};
    color: #fff;
    text-align: center;
    padding: 0.25em;
    margin: 0;
  }

  > div {
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  .shift {
    text-align: center;
    font-size: 2em;
    color: ${(props) => props.theme.css.themePrimaryColor};

    &:hover {
      color: rgb(188, 51, 52, 0.5);
      cursor: pointer;
    }
  }

  .skills {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 1em;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    background-color: rgb(255, 255, 255, 0.5);
    color: #000;
    /* text-shadow: 1px 1px 5px #000; */
    font-size: 1.25em;
    border-radius: 0.5em;
    padding: 0 1em;
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    .hr {
      background-color: ${(props) => props.theme.css.theme2ndColor};
    }

    & > div > img {
      height: 50px;
    }

    & > div {
      display: flex;
      flex-flow: row;
      flex-wrap: nowrap;
      align-items: center;
      gap: 0.25em;
      padding-right: 0.25em;

      &:hover:not(.hr) {
        cursor: pointer;
        color: ${(props) => props.theme.css.theme3rdColor};
        box-shadow: 0 0 10px ${(props) => props.theme.css.theme3rdColor};
        border-radius: 0.5em;
      }
    }
  }
`
