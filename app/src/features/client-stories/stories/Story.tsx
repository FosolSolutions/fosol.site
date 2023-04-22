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
            <div className="row">
              <div>
                <h1>{title}</h1>
                <p>{organization}</p>
                <p>{organizationType}</p>
              </div>
              <div>{logoUrl && <img className="logo" src={logoUrl} />}</div>
            </div>
            <section>
              <h1>Problem</h1>
              <p>{problem}</p>
            </section>
            <section>
              <h1>Solution</h1>
              <p>{solution}</p>
            </section>
            {skills && (
              <section>
                <h1>Applied Skills</h1>
                <p>{skills.join(', ')}</p>
              </section>
            )}
            {technology && (
              <section>
                <h1>Technology Used</h1>
                <p>{technology.join(', ')}</p>
              </section>
            )}
          </div>
          <div className="picture">{image}</div>
        </article>
      </div>
    </styled.Story>
  )
}
