import { Clients, ContactUs, Intro, Projects, Skills } from '@/components'
import * as styled from './styled'

export interface IHome {
  children?: React.ReactNode
}

export const Home = ({ children }: IHome) => {
  return (
    <styled.Home className="boxes">
      <div className="row">
        <Intro />
        <ContactUs />
      </div>
      <Skills />
      <div className="bk-03"></div>
      <Projects />
      <Clients />
    </styled.Home>
  )
}
