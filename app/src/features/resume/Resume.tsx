import { Banner } from '@/components'
import { IErrorModel } from '@/hooks'
import { hasError } from '@/utils'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from '@mui/material'
import { FieldArray, Formik, FormikErrors, setNestedObjectValues } from 'formik'
import React from 'react'
import { FaCaretDown, FaCaretUp, FaPlus, FaTrash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { IResumeForm } from './IResumeForm'
import { ISkillForm } from './ISkillForm'
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
  file: null,
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
  skills: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Skill name is required'),
      level: yup.string().required('Experience level required'),
      description: yup.string().optional(),
    }),
  ),
})

export const Resume = () => {
  const navigate = useNavigate()

  const uploadResumeRef = React.useRef<HTMLInputElement>(null)
  const [locationExpanded, setLocationExpanded] = React.useState(false)
  const [detailExpanded, setDetailExpanded] = React.useState(false)
  const [skillsExpanded, setSkillsExpanded] = React.useState(false)

  const uploadResume = React.useCallback(async (values: IResumeForm) => {
    try {
      const data = new FormData()
      for (const name in values) {
        if (name !== 'file') data.append(name, (values as any)[name])
      }
      const file =
        uploadResumeRef.current?.files && uploadResumeRef.current?.files?.length > 0
          ? uploadResumeRef.current.files[0]
          : null
      if (file) {
        data.append('file', file)
      }
      const res = await fetch('/api/v1/hello/resumes', {
        method: 'POST',
        body: data,
      })
      if (res.status === 201) {
        toast.success(`Thank you for submitting your resume ${values.firstName}.`)
        navigate('/careers')
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
    <styled.Resume>
      <Banner title="Join Our Team">
        <p>Submit your resume and when an opening becomes available we will contact you</p>
      </Banner>

      <section>
        <Box>
          <Paper className="section">
            <CardHeader
              title="Resume"
              subheader={
                <p>
                  Tell us about yourself. Networking and being aware of opportunities is important
                  for your career.
                </p>
              }
            />
            <Formik
              initialValues={defaultValues}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={true}
              onSubmit={async (values, { setSubmitting }) => {
                setLocationExpanded(false)
                setDetailExpanded(false)
                await uploadResume(values)
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
                setTouched,
                setFieldTouched,
              }) => (
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                      disabled={isSubmitting}
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
                      disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                  <FormControl
                    required
                    error={touched.employment && !!errors.employment}
                    disabled={isSubmitting}
                  >
                    <FormLabel id="employment">Looking for Employment</FormLabel>
                    <RadioGroup
                      name="employment"
                      row
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.employment}
                    >
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
                      disabled={isSubmitting}
                    />
                  )}
                  <Card variant="outlined">
                    <CardHeader
                      title={
                        <Link
                          href=""
                          underline="none"
                          onClick={(e) => {
                            e.preventDefault()
                            setLocationExpanded(!locationExpanded)
                            setDetailExpanded(false)
                            setSkillsExpanded(false)
                          }}
                        >
                          Address
                        </Link>
                      }
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
                              disabled={isSubmitting}
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
                        </FormGroup>
                      </CardContent>
                    </Collapse>
                  </Card>
                  <Card variant="outlined">
                    <CardHeader
                      title={
                        <Link
                          href=""
                          underline="none"
                          onClick={(e) => {
                            e.preventDefault()
                            setLocationExpanded(false)
                            if (detailExpanded && errors.description) setFieldTouched('description')
                            setDetailExpanded(!detailExpanded || !!errors.description)
                            setSkillsExpanded(false || hasError(errors.skills))
                          }}
                        >
                          Details
                        </Link>
                      }
                      action={
                        <IconButton
                          onClick={() => {
                            setLocationExpanded(false)
                            if (detailExpanded && errors.description) setFieldTouched('description')
                            setDetailExpanded(!detailExpanded || !!errors.description)
                            setSkillsExpanded(false || hasError(errors.skills))
                          }}
                        >
                          {detailExpanded ? <FaCaretUp /> : <FaCaretDown />}
                        </IconButton>
                      }
                    />
                    <Collapse
                      in={detailExpanded || (!!touched.description && !!errors.description)}
                    >
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
                            disabled={isSubmitting}
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
                            disabled={isSubmitting}
                          />
                        </div>
                      </CardContent>
                    </Collapse>
                  </Card>
                  <Card variant="outlined">
                    <CardHeader
                      title={
                        <Link
                          href=""
                          underline="none"
                          onClick={(e) => {
                            e.preventDefault()
                            setLocationExpanded(false)
                            setDetailExpanded(false || !!errors.description)
                            setSkillsExpanded(!skillsExpanded || hasError(errors.skills))
                          }}
                        >
                          Skills
                        </Link>
                      }
                      action={
                        <div>
                          <Tooltip title="Add additional skill">
                            <IconButton
                              color="secondary"
                              onClick={() => {
                                setFieldValue('skills', [
                                  ...values.skills,
                                  {
                                    name: '',
                                    experience: '',
                                    level: '',
                                    description: '',
                                  },
                                ])
                                setSkillsExpanded(true)
                              }}
                            >
                              <FaPlus />
                            </IconButton>
                          </Tooltip>
                          <IconButton
                            onClick={() => {
                              setLocationExpanded(false)
                              setDetailExpanded(false || !!errors.description)
                              setSkillsExpanded(!skillsExpanded || hasError(errors.skills))
                            }}
                          >
                            {skillsExpanded ? <FaCaretUp /> : <FaCaretDown />}
                          </IconButton>
                        </div>
                      }
                    />
                    <Collapse
                      in={
                        skillsExpanded ||
                        (errors.skills as FormikErrors<ISkillForm>[])?.some((s) => !!s)
                      }
                    >
                      <CardContent>
                        <p>Add all your skills.</p>
                        <FieldArray
                          name="skills"
                          render={(arrayHelpers) => (
                            <div className="col">
                              {values.skills.map((skill, index) => (
                                <FormGroup key={index} className="skill">
                                  <div className="row">
                                    <div className="trash">
                                      <Tooltip title="Remove skill">
                                        <IconButton
                                          color={'error'}
                                          onClick={() => arrayHelpers.remove(index)}
                                        >
                                          <FaTrash />
                                        </IconButton>
                                      </Tooltip>
                                    </div>
                                    <TextField
                                      name={`skills.${index}.name`}
                                      label="Name"
                                      value={skill.name}
                                      required
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      inputProps={{ maxLength: 50 }}
                                      error={
                                        touched.skills?.[index]?.name &&
                                        !!(errors.skills?.[index] as FormikErrors<ISkillForm>)?.name
                                      }
                                      helperText={
                                        <>
                                          {touched.skills?.[index]?.name &&
                                            (errors.skills?.[index] as FormikErrors<ISkillForm>)
                                              ?.name}
                                        </>
                                      }
                                      disabled={isSubmitting}
                                    />
                                    <FormControl
                                      required
                                      error={
                                        touched.skills &&
                                        !!(errors.skills?.[index] as FormikErrors<ISkillForm>)
                                          ?.level
                                      }
                                      disabled={isSubmitting}
                                    >
                                      <FormLabel id={`skills.${index}.level`}>
                                        Skill Level
                                      </FormLabel>
                                      <RadioGroup
                                        name={`skills.${index}.level`}
                                        value={skill.level}
                                        row
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                      >
                                        <FormControlLabel
                                          value="learning"
                                          label="Learning"
                                          control={<Radio />}
                                        />
                                        <FormControlLabel
                                          value="experienced"
                                          label="Experienced"
                                          control={<Radio />}
                                        />
                                        <FormControlLabel
                                          value="master"
                                          label="Master"
                                          control={<Radio />}
                                        />
                                        <FormHelperText>
                                          {
                                            (
                                              touched.skills &&
                                              (errors.skills?.[index] as FormikErrors<ISkillForm>)
                                            )?.level
                                          }
                                        </FormHelperText>
                                      </RadioGroup>
                                    </FormControl>
                                  </div>
                                  <TextField
                                    name={`skills.${index}.description`}
                                    label="Description"
                                    value={skill.description}
                                    placeholder="Tell us what you have done with this skill"
                                    multiline
                                    rows="5"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    inputProps={{ maxLength: 50 }}
                                    error={touched.country && !!errors.country}
                                    helperText={touched.country && errors.country}
                                    disabled={isSubmitting}
                                  />
                                </FormGroup>
                              ))}
                            </div>
                          )}
                        />
                      </CardContent>
                    </Collapse>
                  </Card>
                  <div className="row">
                    <Button variant="outlined" component="label">
                      Attach Resume (PDF)
                      <input
                        name="file"
                        type="file"
                        accept="application/pdf"
                        ref={uploadResumeRef}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        hidden
                      />
                    </Button>
                    {!!uploadResumeRef.current?.files?.length &&
                      uploadResumeRef.current?.files?.[0].name}
                    {!!uploadResumeRef.current?.files?.length && (
                      <div>
                        <Tooltip title="Remove file">
                          <IconButton
                            color="error"
                            onClick={() => {
                              setFieldValue('file', null)
                              if (uploadResumeRef.current) uploadResumeRef.current.value = ''
                            }}
                          >
                            <FaTrash />
                          </IconButton>
                        </Tooltip>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => {
                      setTouched(setNestedObjectValues(errors, true))
                    }}
                  >
                    {!isSubmitting && 'Submit'}
                    {isSubmitting && <CircularProgress color="inherit" size="1.5rem" />}
                  </Button>
                </form>
              )}
            </Formik>
          </Paper>
        </Box>
      </section>
    </styled.Resume>
  )
}
