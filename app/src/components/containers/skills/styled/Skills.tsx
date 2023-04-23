import styled from 'styled-components'

export const Skills = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  border-bottom: solid 1px #000;

  > h2 {
    overflow: hidden;
    background-color: #000;
    color: #fff;
    width: 100%;
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
    max-width: calc(100vw - 120px);
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

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.css.primaryBackgroundColor};
        border-radius: 0.5em;
      }
    }
  }
`
