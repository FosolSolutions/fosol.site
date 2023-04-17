import { Link } from 'react-router-dom'
import { Footer, Header } from '..'

export interface IDefaultLayout {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: IDefaultLayout): JSX.Element => {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/technologies">Technologies</Link>
            </li>
            <li>
              <Link to="/clients/stories">Client Stories</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>
      </Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
