import { FaBuilding } from 'react-icons/fa'
import * as styled from './styled'

export interface IClients {
  children?: React.ReactNode
}

export const Clients = ({ children }: IClients) => {
  return (
    <styled.Clients className="box pad clients">
      <h1>
        <FaBuilding /> Clients
      </h1>
      <div className="client-list">
        <article>
          <h2>Ministry of Citizen Services</h2>
          <p>BC Government</p>
          <div>
            <img className="logo small" src="assets/projects/bc-gov/bc-gov-logo.png" />
          </div>
        </article>
        <article>
          <h2>Ministry of Post-Secondary Education and Future Skills</h2>
          <p>BC Government</p>
          <div>
            <img className="logo small" src="assets/projects/bc-gov/bc-gov-logo.png" />
          </div>
        </article>
        <article>
          <h2>Ministry of Attorney General</h2>
          <p>BC Government</p>
          <div>
            <img className="logo small" src="assets/projects/bc-gov/bc-gov-logo.png" />
          </div>
        </article>
        <article>
          <h2>Victoria Christadelphians</h2>
          <p>Not-for-Profit Organization</p>
          <div>
            <img
              className="logo small"
              src="assets/projects/coevent/victoria-christadelphian-logo-02.png"
            />
          </div>
        </article>
        <article>
          <h2>Quartech</h2>
          <p>People-centric IT Solutions</p>
          <div>
            <img className="logo small" src="assets/clients/quartech-logo.jfif" />
          </div>
        </article>
        <article>
          <h2>Avocette</h2>
          <p>Full-Service IT Company</p>
          <div>
            <img className="logo small" src="assets/clients/avocette-logo.png" />
          </div>
        </article>
        <article>
          <h2>Enkon</h2>
          <p>Land Management Solutions</p>
          <div>
            <img className="logo small" src="assets/clients/enkon-logo.png" />
          </div>
        </article>
        <article>
          <h2>Postmedia</h2>
          <p>Canada's Largest Publishing Organization</p>
          <div>
            <img className="logo small" src="assets/clients/postmedia-logo.png" />
          </div>
        </article>
      </div>
    </styled.Clients>
  )
}
