import { Banner } from '@/components'
import { IErrorModel } from '@/hooks'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  Collapse,
  FormControlLabel,
  FormGroup,
  IconButton,
  TextField,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { Formik } from 'formik'
import React from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { IStartProjectForm } from './IStartProjectForm'
import * as styled from './styled'

const defaultValues: IStartProjectForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  description: '',
  isStarted: false,
  techStack: [],
  startDate: null,
  endDate: null,
  address: '',
  city: '',
  region: '',
  country: '',
  allowRemote: false,
  budget: '',
}

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  company: yup.string().optional(),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().optional(),
  description: yup.string().required('Description is required'),
  isStarted: yup.boolean().required('Is started is required'),
  techStack: yup.array().required(),
  startDate: yup.string().optional().nullable(),
  endDate: yup.string().optional().nullable(),
  address: yup.string().optional(),
  city: yup.string().optional(),
  region: yup.string().optional(),
  country: yup.string().optional(),
  allowRemote: yup.boolean().required('Allow remote is required'),
  budget: yup.string().optional(),
})

export const Start = () => {
  const navigate = useNavigate()

  const [locationExpanded, setLocationExpanded] = React.useState(false)
  const [detailExpanded, setDetailExpanded] = React.useState(false)

  const sendMessage = React.useCallback(async (values: IStartProjectForm) => {
    try {
      const form = {
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        text: `
          <div>Already started: ${values.isStarted}</div>
          <div>Start: ${values.startDate}, End: ${values.endDate}</div>
          <div>Address: ${values.address}, ${values.city}, ${values.region}, ${values.country}</div>
          <div>Allow Remote: ${values.allowRemote}</div>
          <div>Budget: ${values.budget}</div>
          <div>${values.description}</div>`,
      }
      const res = await fetch('/api/v1/hello/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
    <styled.Start>
      <Banner title="Start Your Next Project"></Banner>
      <section>
        <p>Tell us about your project</p>
        <Formik
          initialValues={defaultValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setLocationExpanded(false)
            setDetailExpanded(false)
            await sendMessage(values)
            setSubmitting(false)
          }}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name="name"
                label="Your Name"
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
              <Card variant="outlined">
                <CardHeader
                  title="Location"
                  action={
                    <IconButton onClick={() => setLocationExpanded(!locationExpanded)}>
                      {locationExpanded ? <FaCaretUp /> : <FaCaretDown />}
                    </IconButton>
                  }
                />
                <Collapse in={locationExpanded}>
                  <CardContent>
                    <FormGroup className="address">
                      <TextField
                        name="address"
                        label="Address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{ maxLength: 50 }}
                        error={touched.address && !!errors.address}
                        helperText={touched.address && errors.address}
                        disabled={isSubmitting}
                      />
                      <TextField
                        name="city"
                        label="City"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{ maxLength: 50 }}
                        error={touched.city && !!errors.city}
                        helperText={touched.city && errors.city}
                        disabled={isSubmitting}
                      />
                      <div className="row">
                        <TextField
                          name="region"
                          label="Province/State"
                          value={values.region}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          inputProps={{ maxLength: 50 }}
                          error={touched.region && !!errors.region}
                          helperText={touched.region && errors.region}
                          disabled={isSubmitting}
                        />
                        <TextField
                          name="country"
                          label="Country"
                          value={values.country}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          inputProps={{ maxLength: 50 }}
                          error={touched.country && !!errors.country}
                          helperText={touched.country && errors.country}
                          disabled={isSubmitting}
                        />
                      </div>
                      <FormControlLabel
                        label="Allow remote work?"
                        name="allowRemote"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.allowRemote}
                        disabled={isSubmitting}
                        control={<Checkbox />}
                      />
                    </FormGroup>
                  </CardContent>
                </Collapse>
              </Card>

              <Card variant="outlined">
                <CardHeader
                  title="Details"
                  action={
                    <IconButton
                      onClick={() => {
                        setLocationExpanded(false)
                        setDetailExpanded(!detailExpanded)
                      }}
                    >
                      {detailExpanded ? <FaCaretUp /> : <FaCaretDown />}
                    </IconButton>
                  }
                />
                <Collapse in={detailExpanded}>
                  <CardContent>
                    <div className="col">
                      <FormControlLabel
                        label="Have you already started the project?"
                        name="isStarted"
                        value={values.isStarted}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isSubmitting}
                        control={<Checkbox />}
                      />
                      <div className="dates">
                        <div>
                          <DatePicker
                            label="Start"
                            value={values.startDate}
                            onChange={(val) => setFieldValue('startDate', val)}
                            disabled={isSubmitting}
                            slotProps={{
                              textField: {
                                error: touched.startDate && !!errors.startDate,
                                helperText: touched.startDate && errors.startDate,
                              },
                            }}
                          />
                        </div>
                        <div>
                          <DatePicker
                            label="Due"
                            value={values.endDate}
                            onChange={(val) => setFieldValue('endDate', val)}
                            disabled={isSubmitting}
                            slotProps={{
                              textField: {
                                error: touched.endDate && !!errors.endDate,
                                helperText: touched.endDate && errors.endDate,
                              },
                            }}
                          />
                        </div>
                      </div>
                      <TextField
                        name="description"
                        label="Description"
                        value={values.description}
                        multiline
                        rows="5"
                        placeholder="Describe the high-level project requirements"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{ maxLength: 2000 }}
                        error={touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                        disabled={isSubmitting}
                      />
                      <TextField
                        name="budget"
                        label="Budget"
                        value={values.budget}
                        placeholder="Project budget limits"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{ maxLength: 20 }}
                        error={touched.budget && !!errors.budget}
                        helperText={touched.budget && errors.budget}
                        disabled={isSubmitting}
                      />
                    </div>
                  </CardContent>
                </Collapse>
              </Card>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                {!isSubmitting && 'Submit'}
                {isSubmitting && <CircularProgress color="inherit" size="1.5rem" />}
              </Button>
            </form>
          )}
        </Formik>
      </section>
    </styled.Start>
  )
}
