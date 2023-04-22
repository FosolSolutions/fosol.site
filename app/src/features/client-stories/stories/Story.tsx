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
}

export const Story = ({
  title,
  organization,
  organizationType,
  logoUrl,
  problem,
  solution,
  image,
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
          </div>
          <div className="picture">{image}</div>
        </article>
      </div>
    </styled.Story>
  )
}
