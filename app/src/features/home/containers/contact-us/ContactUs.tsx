import { Button } from '@mui/material'
import { FaHandPaper } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import * as styled from './styled'

export interface IContactUs {}

export const ContactUs = () => {
  const navigate = useNavigate()

  return (
    <styled.ContactUs className="box">
      <div className="contact-us">
        <div className="pad">
          <h1>
            <FaHandPaper /> Contact Us
          </h1>
          <p>
            If you're looking for help to design, develop, and support your next software
            development project, reach out to us.
          </p>
          <p>
            Send us an email{' '}
            <a href="mailto:sales@fosol.ca?subject=Request for Information">sales@fosol.ca</a> or
            fill out our contact form.
          </p>
          <div className="center">
            <Button variant="contained" onMouseUp={() => navigate('/contact-us')}>
              Contact Us
            </Button>
          </div>
        </div>
        <div className="photo-contact-us"></div>
      </div>
    </styled.ContactUs>
  )
}
