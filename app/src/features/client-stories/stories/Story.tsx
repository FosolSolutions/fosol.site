import { Banner } from '@/components'
import * as styled from './styled'

export interface IStoryProps {
  title: string
  organization: string
  organizationType: string
  logoUrl?: string
  problem: React.ReactNode
  solution: React.ReactNode
  image: React.ReactNode
  technology?: string[]
  skills?: string[]
}

export const Story = ({
  title,
  organization,
  organizationType,
  logoUrl,
  problem,
  solution,
  image,
  technology,
  skills,
}: IStoryProps) => {
  return (
    <styled.Story>
      <Banner title="Client Story">
        <p>
          {title} - {organization}
        </p>
      </Banner>
      <div>
        <article>
          <div>
            <div className="intro">
              <div>
                <h1>{title}</h1>
                <p className="company-name">{organization}</p>
                <p>{organizationType}</p>
              </div>
              <div>{logoUrl && <img className="logo" src={logoUrl} />}</div>
            </div>
            <section>
              <h1>Problem</h1>
              <div>{problem}</div>
            </section>
            <section>
              <h1>Solution</h1>
              <div>{solution}</div>
            </section>
            {skills && (
              <section>
                <h1>Applied Skills</h1>
                <div>{skills.join(', ')}</div>
              </section>
            )}
            {technology && (
              <section>
                <h1>Technology Used</h1>
                <div>{technology.join(', ')}</div>
              </section>
            )}
          </div>
          <div className="picture">{image}</div>
        </article>
      </div>
    </styled.Story>
  )
}
