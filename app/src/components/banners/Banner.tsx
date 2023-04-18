import * as styled from './styled'

export interface IBanner extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'success' | 'warning' | 'error'
}

export const Banner = ({ title, children, ...rest }: IBanner) => {
  return (
    <styled.Banner {...rest}>
      {title && <h1>{title}</h1>}
      {children}
    </styled.Banner>
  )
}
