import { Banner } from '@/components'
import { ISkillModel, services } from '@/data'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Skills } from './containers'
import * as styled from './styled'

export interface IServices {}

export const Services = () => {
  const navigate = useNavigate()

  const [skill, setSkill] = React.useState<ISkillModel>()

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
              <div className="center">
                <Button variant="contained" onMouseUp={() => navigate('/start')}>
                  Start Your Next Project
                </Button>
              </div>
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
        <Skills title="Our Toolkit Includes" onClick={setSkill} />
        {skill && (
          <section className="skill">
            <h1>{skill?.name}</h1>
            {skill?.description}
          </section>
        )}
      </div>
    </styled.Services>
  )
}
