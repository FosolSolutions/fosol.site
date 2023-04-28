import { Banner } from '@/components'
import { parseValues } from '@/utils'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { IContactUsForm } from './IContactUsForm'
import * as styled from './styled'

const defaultValues: IContactUsForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
}

export const ContactUs = () => {
  const [form, setForm] = React.useState<IContactUsForm>(defaultValues)

  return (
    <styled.ContactUs>
      <Banner title="Contact Us">
        <p>We would love to hear from you</p>
      </Banner>
      <section>
        <p>We'll response to your inquiry as soon as possible.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.target as HTMLFormElement
            const values = parseValues<IContactUsForm>(form)

            console.debug(values)
            setForm(values)
          }}
        >
          <TextField
            name="name"
            label="Name"
            required
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            name="company"
            label="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
          <div className="row stretch">
            <TextField
              name="email"
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <TextField
              name="phone"
              label="Phone"
              type="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <TextField
            name="message"
            label="Message"
            value={form.message}
            multiline
            rows="5"
            placeholder="Tell us what you would like to know"
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </section>
    </styled.ContactUs>
  )
}
