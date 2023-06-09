import styled from 'styled-components'

export const ContactUs = styled.section`
  .contact-us {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap-reverse;
    overflow: hidden;
    height: 100%;
    border-radius: 0.5rem;

    &:first-child {
      flex: 1;
    }
  }

  .photo-contact-us {
    flex: 1;
    background-image: url('/assets/photo-contact-us-01.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100px;
    min-width: 200px;
  }

  .center {
    text-align: center;
  }

  .pad {
    display: flex;
    flex-flow: column;

    & > div {
      flex: 2;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;

      &:last-child {
        flex: 1;
      }
    }
  }
`
