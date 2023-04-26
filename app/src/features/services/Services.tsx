import { Banner, Skills } from '@/components'
import { services } from '@/data'
import * as styled from './styled'

export interface IServices {
  children?: React.ReactNode
}

export const Services = ({ children }: IServices) => {
  return (
    <styled.Services>
      <Banner title="Services">
        <p>
          We work with leading technology platforms, existing off-the-shelf technologies, and
          current tech stacks to deliver exceptional results.
        </p>
      </Banner>
      <div>
        <section className="services">
          <div>
            <div>
              <h1>Resourcing</h1>
              <p>Looking for assistance designing and developing a software solution?</p>
              <p>We provide individual resources or teams to support your business needs.</p>
              <p>Contact us and get a quote.</p>
            </div>
            <div>
              {services.map((service) => (
                <div key={service.id}>
                  {service.icon && <div className="icon">{service.icon}</div>}
                  <h2>{service.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Skills title="Our Toolkit Includes" />
        <section className="skill"></section>
      </div>
    </styled.Services>
  )
}
