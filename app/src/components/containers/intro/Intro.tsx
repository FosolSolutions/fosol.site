import * as styled from './styled'

export interface IIntro {
  children?: React.ReactNode
}

export const Intro = ({ children }: IIntro) => {
  return (
    <styled.Intro className="box row intro">
      <div className="col pad text">
        <p>
          Fosol Software Solutions is a Canadian technology corporation located in Victoria BC. We
          offer consulting and contractor resources for building software solutions.
        </p>
        <p>
          We manage, design, develop, and deliver technology solutions for businesses. We love the
          process of creating tools which improve life.
        </p>
        <p>We offer both on-site and remote availability with a proven track-record.</p>
      </div>
      <div className="photo-info"></div>
    </styled.Intro>
  )
}
