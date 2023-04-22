import { Link } from 'react-router-dom'

export interface IHeader {
  children?: React.ReactNode
}

export const Header = ({ children }: IHeader): JSX.Element => {
  return (
    <header>
      <div className="company-logo">
        <Link to="/">
          <img className="logo" src="/assets/fosol-logo-small-01.png" />
        </Link>
        <Link to="/">
          <h1 className="cname">Fosol</h1>
        </Link>
      </div>
      {children}
      <div></div>
    </header>
  )
}
