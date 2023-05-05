import { Banner } from '@/components'
import { IErrorModel } from '@/hooks'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import { FieldArray, Formik } from 'formik'
import React from 'react'
import { FaCaretDown, FaCaretUp, FaPlus } from 'react-icons/fa'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { IResumeForm } from './IResumeForm'
import * as styled from './styled'

const defaultValues: IResumeForm = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  employment: '',
  position: '',
  city: '',
  region: '',
  country: '',
  description: '',
  skills: [],
  salary: '',
  resume: null,
}

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().optional(),
  employment: yup.string().required('Employment is required').min(1),
  position: yup.string().required('Position is required'),
  company: yup.string().optional(),
  description: yup.string().required('Experience is required'),
  city: yup.string().optional(),
  region: yup.string().optional(),
  country: yup.string().optional(),
  salary: yup.string().optional(),
})

export const Resume = () => {
  const [sent, setSent] = React.useState(false)
  const [locationExpanded, setLocationExpanded] = React.useState(false)
  const [detailExpanded, setDetailExpanded] = React.useState(false)
  const [skillsExpanded, setSkillsExpanded] = React.useState(false)

  const sendMessage = React.useCallback(async (values: IResumeForm) => {
    try {
      const res = await fetch('/api/v1/contacts/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.status === 201) {
        toast.success(
          `Thank you for your message ${values.firstName}.  We will respond as soon as possible.`,
        )
        setSent(true)
      } else {
        var error = 'We are terribly sorry but an error has occurred.'
        const contentType = res.headers.get('content-type')
        if (contentType && contentType.indexOf('application/json') !== -1) {
          error = ((await res.json()) as IErrorModel).error
        }
        toast.error(
          <div>
            <h1>
              {res.status}: {res.statusText}
            </h1>
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
    <styled.Resume>
      <Banner title="Join Our Team"></Banner>

      <section>
        <p>Tell us about yourself</p>
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
            isValidating,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="row">
                <TextField
                  name="firstName"
                  label="First Name"
                  required
                  placeholder="Your first name"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 100 }}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  disabled={sent || isSubmitting}
                />
                <TextField
                  name="lastName"
                  label="Last Name"
                  required
                  placeholder="Your last name"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 100 }}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  disabled={sent || isSubmitting}
                />
              </div>
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
                  disabled={sent || isSubmitting}
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
                  disabled={sent || isSubmitting}
                />
              </div>
              <TextField
                name="position"
                label="Position"
                required
                placeholder="The position you are interested in"
                value={values.position}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ maxLength: 100 }}
                error={touched.position && !!errors.position}
                helperText={touched.position && errors.position}
                disabled={sent || isSubmitting}
              />
              <FormControl
                required
                error={touched.employment && !!errors.employment}
                disabled={sent || isSubmitting}
              >
                <FormLabel id="employment">Looking for Employment</FormLabel>
                <RadioGroup name="employment" row onChange={handleChange} onBlur={handleBlur}>
                  <FormControlLabel value="fulltime" label="Fulltime" control={<Radio />} />
                  <FormControlLabel value="contractor" label="Contractor" control={<Radio />} />
                  <FormControlLabel value="part-time" label="Part-time" control={<Radio />} />
                  <FormControlLabel value="any" label="Any" control={<Radio />} />
                  <FormHelperText>{touched.employment && errors.employment}</FormHelperText>
                </RadioGroup>
              </FormControl>
              {values.employment === 'contractor' && (
                <TextField
                  name="company"
                  label="Your Business Name"
                  value={values.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  inputProps={{ maxLength: 100 }}
                  error={touched.company && !!errors.company}
                  helperText={touched.company && errors.company}
                  disabled={sent || isSubmitting}
                />
              )}
              <Card variant="outlined">
                <CardHeader
                  title="Location"
                  action={
                    <IconButton
                      onClick={() => {
                        setLocationExpanded(!locationExpanded)
                        setDetailExpanded(false)
                        setSkillsExpanded(false)
                      }}
                    >
                      {locationExpanded ? <FaCaretUp /> : <FaCaretDown />}
                    </IconButton>
                  }
                />
                <Collapse in={locationExpanded}>
                  <CardContent>
                    <FormGroup className="address">
                      <div className="row">
                        <TextField
                          name="city"
                          label="City"
                          value={values.city}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          inputProps={{ maxLength: 50 }}
                          error={touched.city && !!errors.city}
                          helperText={touched.city && errors.city}
                          disabled={sent || isSubmitting}
                        />
                        <TextField
                          name="region"
                          label="Province/State"
                          value={values.region}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          inputProps={{ maxLength: 50 }}
                          error={touched.region && !!errors.region}
                          helperText={touched.region && errors.region}
                          disabled={sent || isSubmitting}
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
                          disabled={sent || isSubmitting}
                        />
                      </div>
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
                        setSkillsExpanded(false)
                      }}
                    >
                      {detailExpanded ? <FaCaretUp /> : <FaCaretDown />}
                    </IconButton>
                  }
                />
                <Collapse in={detailExpanded}>
                  <CardContent>
                    <div className="col">
                      <TextField
                        name="description"
                        label="Experience"
                        value={values.description}
                        multiline
                        rows="5"
                        placeholder="Tell us about yourself"
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{ maxLength: 2000 }}
                        error={touched.description && !!errors.description}
                        helperText={touched.description && errors.description}
                        disabled={sent || isSubmitting}
                      />
                      <TextField
                        name="salary"
                        label="Expected Salary or Billable Rate"
                        value={values.salary}
                        placeholder="Enter expected salary or billable rate amount"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputProps={{ maxLength: 20 }}
                        error={touched.salary && !!errors.salary}
                        helperText={touched.salary && errors.salary}
                        disabled={sent || isSubmitting}
                      />
                    </div>
                  </CardContent>
                </Collapse>
              </Card>
              <Card variant="outlined">
                <CardHeader
                  title="Skills"
                  action={
                    <IconButton
                      onClick={() => {
                        setLocationExpanded(false)
                        setDetailExpanded(false)
                        setSkillsExpanded(!skillsExpanded)
                      }}
                    >
                      {skillsExpanded ? <FaCaretUp /> : <FaCaretDown />}
                    </IconButton>
                  }
                />
                <Collapse in={skillsExpanded}>
                  <CardContent>
                    <FieldArray
                      name="skills"
                      render={(arrayHelpers) => (
                        <div className="col">
                          {values.skills.map((skill, index) => (
                            <FormGroup className="skill">
                              <div className="row">
                                <TextField
                                  name={`skills.${index}.name`}
                                  label="Name"
                                  value={skill.name}
                                  required
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  inputProps={{ maxLength: 50 }}
                                  error={touched.city && !!errors.city}
                                  helperText={touched.city && errors.city}
                                  disabled={sent || isSubmitting}
                                />
                                <FormControl
                                  required
                                  error={touched.employment && !!errors.employment}
                                  disabled={sent || isSubmitting}
                                >
                                  <FormLabel id={`skills.${index}.level`}>Skill Level</FormLabel>
                                  <RadioGroup
                                    name={`skills.${index}.level`}
                                    row
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  >
                                    <FormControlLabel
                                      value="learning"
                                      label="learning"
                                      control={<Radio />}
                                    />
                                    <FormControlLabel
                                      value="experienced"
                                      label="experienced"
                                      control={<Radio />}
                                    />
                                    <FormControlLabel
                                      value="master"
                                      label="Master"
                                      control={<Radio />}
                                    />
                                    <FormHelperText>
                                      {touched.employment && errors.employment}
                                    </FormHelperText>
                                  </RadioGroup>
                                </FormControl>
                              </div>
                              <TextField
                                name={`skills.${index}.description`}
                                label="Description"
                                value={skill.description}
                                multiline
                                rows="5"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                inputProps={{ maxLength: 50 }}
                                error={touched.country && !!errors.country}
                                helperText={touched.country && errors.country}
                                disabled={sent || isSubmitting}
                              />
                            </FormGroup>
                          ))}
                          <div>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() =>
                                arrayHelpers.push({
                                  name: '',
                                  experience: '',
                                  level: '',
                                  description: '',
                                })
                              }
                            >
                              <FaPlus />
                            </Button>
                          </div>
                        </div>
                      )}
                    />
                  </CardContent>
                </Collapse>
              </Card>
              <Button variant="contained" type="submit" disabled={isSubmitting || sent}>
                {!isSubmitting && 'Submit'}
                {isSubmitting && <ClipLoader color="white" size={30} />}
              </Button>
            </form>
          )}
        </Formik>
      </section>
    </styled.Resume>
  )
}
