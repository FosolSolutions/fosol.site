import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import * as styled from './styled'

export interface IIntro {
  children?: React.ReactNode
}

export const Intro = ({ children }: IIntro) => {
  const navigate = useNavigate()

  return (
    <styled.Intro className="box row intro">
      <div className="col pad text">
        <h1>Custom software solutions that make your business better</h1>
        <p>
          Fosol Software Solutions is a Canadian technology corporation located in Victoria BC. We
          offer consulting and contractor resources for building software solutions.
        </p>
        <p>
          We manage, design, develop, and deliver technology solutions for businesses. We love the
          process of creating tools which improve life.
        </p>
        <p>We offer both on-site and remote availability with a proven track-record.</p>
        <div className="center">
          <Button variant="contained" onMouseUp={() => navigate('/start')}>
            Start Your Next Project
          </Button>
        </div>
      </div>
      <div className="photo-info"></div>
    </styled.Intro>
  )
}
