import { IInputProps, Input } from '../input'

export interface ITextProps extends Omit<IInputProps, 'type'> {}

export const Text = ({ ...rest }: ITextProps) => {
  return <Input type="text" {...rest} />
}
