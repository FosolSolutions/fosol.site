import { FormikErrors } from 'formik'

/**
 * Check if formik array has errors.
 * @param errors An array of errors.
 * @returns True if there are any errors.
 */
export const hasError = <T>(errors: string | string[] | FormikErrors<T>[] | undefined) => {
  if (!errors) return false
  if (!errors.length) return false
  const values = errors as FormikErrors<T>[]
  return values.some((e) => !!e)
}
