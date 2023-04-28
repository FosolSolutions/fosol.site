import { IInputProps, Input } from '../input'

export interface ICheckboxProps extends Omit<IInputProps, 'type'> {}

export const Checkbox = ({ ...rest }: ICheckboxProps) => {
  return <Input type="checkbox" {...rest} />
}
