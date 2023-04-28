import { Button } from '@/components'
import { FaHandPaper } from 'react-icons/fa'
import * as styled from './styled'

export interface IContactUs {
  children?: React.ReactNode
}

export const ContactUs = ({ children }: IContactUs) => {
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
            Send us an email to{' '}
            <a href="mailto:sales@fosol.ca?subject=Project Inquiry">sales@fosol.ca</a> or fill out
            our contact form.
          </p>
          <div className="center">
            <Button label="Contact Us" />
          </div>
        </div>
        <div className="photo-contact-us"></div>
      </div>
    </styled.ContactUs>
  )
}
