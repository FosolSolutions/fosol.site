import * as styled from './styled'

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'primary' | 'secondary' | 'info' | 'link' | 'success' | 'warning' | 'error'
}

export const Button = ({ label, ...rest }: IButtonProps) => {
  return (
    <styled.Button {...rest}>
      <input className="btn" type="button" value={label} />
    </styled.Button>
  )
}
