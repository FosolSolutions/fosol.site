import styled from 'styled-components'

export const Skills = styled.div`
  &.skills-section {
    display: flex;
    flex-flow: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0;

    > h2 {
      overflow: hidden;
    }

    > .shift {
      text-align: center;
      font-size: 2em;
      color: ${(props) => props.theme.css.themePrimaryColor};

      &:hover {
        color: rgb(188, 51, 52, 0.5);
        cursor: pointer;
      }
    }

    > .skills {
      display: flex;
      flex-flow: row;
      flex-wrap: nowrap;
      align-items: center;
      gap: 1em;
      overflow-x: scroll;
      overflow-y: hidden;
      max-width: calc(100vw - 120px - 5em);
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
          background-color: rgb(255, 255, 255, 0.5);
          border-radius: 0.5em;
        }
      }
    }
  }
`
