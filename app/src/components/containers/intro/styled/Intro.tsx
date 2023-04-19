import styled from 'styled-components'

export const Intro = styled.section`
  &.intro {
    display: flex;
    flex-wrap: wrap-reverse;
    align-items: stretch;
    flex: 2 1 0;
    min-width: 300px;
    overflow: hidden;

    .text {
      flex: 1;
      min-width: 300px;
    }
  }

  .photo-info {
    flex: 1 1 0;
    background-image: url('/assets/photo-meeting-01.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 200px;
    min-width: 300px;
  }

  h1 {
    color: ${(props) => props.theme.css.themePrimaryColor};
  }
`
