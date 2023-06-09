import styled from 'styled-components'

export const ContactUs = styled.div`
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
    }
  }
`
