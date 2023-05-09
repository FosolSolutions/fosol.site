import { FaFileContract, FaHeartbeat, FaInfoCircle, FaUsers } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Footer, Header, IHeaderMenuItem } from '..'

const menu: IHeaderMenuItem[] = [
  { icon: <FaUsers />, label: 'Services', to: '/services' },
  { icon: <FaHeartbeat />, label: 'Client Stories', to: '/clients/stories' },
  { icon: <FaFileContract />, label: 'Careers', to: '/careers' },
  { icon: <FaInfoCircle />, label: 'About Us', to: '/about-us' },
]

export interface IDefaultLayout {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: IDefaultLayout): JSX.Element => {
  return (
    <>
      <ToastContainer />
      <Header menu={menu}></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}
