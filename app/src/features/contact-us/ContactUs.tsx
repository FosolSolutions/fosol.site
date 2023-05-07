import { Banner } from '@/components'
import { IErrorModel } from '@/hooks'
import { Button, CircularProgress, TextField } from '@mui/material'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { IContactUsForm } from './IContactUsForm'
import * as styled from './styled'

const defaultValues: IContactUsForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  text: '',
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  company: yup.string().optional(),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().optional(),
  text: yup.string().required('Message is required'),
})

export const ContactUs = () => {
  const navigate = useNavigate()

  const sendMessage = React.useCallback(async (values: IContactUsForm) => {
    try {
      const res = await fetch('/api/v1/hello/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.status === 201) {
        toast.success(
          `Thank you for your message ${values.name}.  We will respond as soon as possible.`,
        )
        navigate('/')
      } else {
        var error = 'We are terribly sorry but an error has occurred.'
        const contentType = res.headers.get('content-type')
        if (contentType && contentType.indexOf('application/json') !== -1) {
          var json = await res.json()
          error = (json as IErrorModel).error ?? json
        }
        toast.error(
          <div>
            <h2>
              {res.status}: {res.statusText}
            </h2>
            <p>{error}</p>
          </div>,
        )
      }
    } catch (ex) {
      toast.error(
        <div>
          <div>We are terribly sorry but an unexpected error has occurred.</div>
        </div>,
      )
    }
  }, [])

  return (
    <styled.ContactUs>
      <Banner title="Contact Us">
        <p>We would love to hear from you</p>
      </Banner>
      <section>
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await sendMessage(values)
            setSubmitting(false)
          }}
        >
          {({ values, errors, touched, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Name"
                required
                placeholder="Your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ maxLength: 100 }}
                error={touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                disabled={isSubmitting}
              />
              <TextField
                name="company"
                label="Company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ maxLength: 100 }}
                error={touched.company && !!errors.company}
                helperText={touched.company && errors.company}
                disabled={isSubmitting}
              />
              <div className="row stretch">
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  required
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 250 }}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  disabled={isSubmitting}
                />
                <TextField
                  name="phone"
                  label="Phone"
                  type="phone"
                  value={values.phone}
                  placeholder="+1 123 123-1234"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 15 }}
                  error={touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                  disabled={isSubmitting}
                />
              </div>
              <TextField
                name="text"
                label="Message"
                value={values.text}
                multiline
                rows="5"
                placeholder="Tell us what you would like to know"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ maxLength: 2000 }}
                error={touched.text && !!errors.text}
                helperText={touched.text && errors.text}
                disabled={isSubmitting}
              />
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                {!isSubmitting && 'Submit'}
                {isSubmitting && <CircularProgress color="inherit" size="1.5rem" />}
              </Button>
            </form>
          )}
        </Formik>
      </section>
    </styled.ContactUs>
  )
}
