import { Banner } from '@/components'
import { Button, TextField } from '@mui/material'
import * as styled from './styled'

export const ContactUs = () => {
  return (
    <styled.ContactUs>
      <Banner title="Contact Us">
        <p>We'd love to answer your questions</p>
      </Banner>
      <section>
        <form>
          <TextField label="Name" required placeholder="Your name" />
          <TextField label="Company" />
          <TextField label="Email" type="email" required />
          <TextField label="Phone" type="phone" />
          <TextField
            label="Message"
            multiline
            rows="5"
            placeholder="Tell us what you would like to know"
          />
          <Button variant="contained">Submit</Button>
        </form>
      </section>
    </styled.ContactUs>
  )
}
