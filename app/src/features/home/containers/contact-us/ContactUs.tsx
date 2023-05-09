import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as styled from './styled'

export interface IContactUs {}

export const ContactUs = () => {
  const navigate = useNavigate()

  return (
    <styled.ContactUs className="box">
      <div className="contact-us">
        <div className="pad">
          <p>Looking to design, develop, and support your next software project, we can help.</p>
          <p>Touch base with us and find out how we can help your business.</p>
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
