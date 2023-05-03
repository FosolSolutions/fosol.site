import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer, Header } from '..'

export interface IDefaultLayout {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: IDefaultLayout): JSX.Element => {
  return (
    <>
      <ToastContainer />
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/services">Services</Link>
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
