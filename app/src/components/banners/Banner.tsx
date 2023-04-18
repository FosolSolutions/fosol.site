import * as styled from './styled'

export interface IBanner extends React.HTMLAttributes<HTMLDivElement> {}

export const Banner = ({ children, ...rest }: IBanner) => {
  return <styled.Banner {...rest}>{children}</styled.Banner>
}
