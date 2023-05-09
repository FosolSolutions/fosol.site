import styled from 'styled-components'

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  flex: 1 1 1;
  display: flex;
  flex-flow: row wrap;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.palette.background.default};
  border-bottom: solid 1px hwb(210 98% 12%);

  & > div {
    flex: 1;
  }

  .menu {
    flex: 1;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-end;

    .MuiListItemText-root {
      text-align: center;
    }
  }

  .company-logo-small {
    & > a {
      display: flex;
      flex-flow: row;
      flex-wrap: nowrap;
      gap: 1rem;
      align-items: center;
    }
  }

  @media screen and (max-width: 1290px) and (min-width: 900px) {
    .menu {
      min-width: 500px;
    }
  }
`
