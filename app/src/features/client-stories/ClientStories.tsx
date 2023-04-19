import { Banner } from '@/components'
import * as styled from './styled'

export interface IClientStories {
  children?: React.ReactNode
}

export const ClientStories = ({ children }: IClientStories) => {
  return (
    <styled.ClientStories>
      <Banner title="Client Stories">
        <p>We’re passionate about using technology to make a positive impact on communities.</p>
      </Banner>
      <div className="banner-01">
        <article>
          <h1>Ministry of Citizen Services</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Media Monitoring Information & Analysis</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Ministry of Citizen Services</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Property Information Management System (PIMS)</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Ministry of Attorney General</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Corporate Tools Committee</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Ministry of Advanced Education, Skills & Training</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Skills Training Grant</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Ministry of Advanced Education, Skills & Training</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Community Workforce Response Grant</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>BC Municipal Affairs & Housing</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Employer Training Grant</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>BC Municipal Affairs & Housing</h1>
          <p className="organization">BC Government</p>
          <div className="details">
            <img className="logo" src="/assets/clients/bc-gov-logo.png" />
            <p className="name">Canada Job Grant</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Victoria Christadelphian</h1>
          <p className="organization">Not-For-Profit</p>
          <div className="details">
            <img className="logo" src="/assets/clients/victoria-christadelphian-logo.png" />
            <p className="name">Coevent - Team Scheduling</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Quartech</h1>
          <p className="organization">Private Corporation</p>
          <div className="details">
            <img className="logo" src="/assets/clients/quartech-logo.jfif" />
            <p className="name">Consulting and Subcontracting</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Avocette</h1>
          <p className="organization">Private Corporation</p>
          <div className="details">
            <img className="logo" src="/assets/clients/avocette-logo.png" />
            <p className="name">Consulting and Subcontracting</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Enkon</h1>
          <p className="organization">Private Corporation</p>
          <div className="details">
            <img className="logo" src="/assets/clients/enkon-logo.png" />
            <p className="name">Botswana Land Management Solution</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
        <article>
          <h1>Postmedia</h1>
          <p className="organization">Private Corporation</p>
          <div className="details">
            <img className="logo" src="/assets/clients/postmedia-logo.png" />
            <p className="name">National Content Management Solution and API</p>
          </div>
          <p className="link">READ MORE</p>
        </article>
      </div>
    </styled.ClientStories>
  )
}
