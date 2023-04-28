import { Clients, ContactUs, Intro, Projects } from './containers'
import * as styled from './styled'

export interface IHome {
  children?: React.ReactNode
}

export const Home = ({ children }: IHome) => {
  return (
    <styled.Home className="col">
      <div className="row section">
        <Intro />
        <ContactUs />
      </div>
      <div className="bk-03"></div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Clients />
      </div>
    </styled.Home>
  )
}
