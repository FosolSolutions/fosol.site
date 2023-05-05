import styled from 'styled-components'

export const Articles = styled.section`
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: ${(props) => props.theme.css.theme7thColor};
  padding: 0 5%;

  > article {
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 2rem;
    font-size: 1.15rem;
    color: ${(props) => props.theme.css.secondaryColor};

    .icon {
      display: flex;

      svg {
        height: 25px;
        width: auto;
        color: ${(props) => props.theme.css.primaryColor};
      }
    }

    > h1 {
      font-size: 1.25rem;
      color: ${(props) => props.theme.css.secondaryColor};
    }
  }
`
