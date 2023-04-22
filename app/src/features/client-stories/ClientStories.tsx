import { Banner } from '@/components'
import { stories } from '@/data'
import { useNavigate } from 'react-router-dom'
import * as styled from './styled'

export interface IClientStories {}

export const ClientStories = () => {
  const navigate = useNavigate()

  return (
    <styled.ClientStories>
      <Banner title="Client Stories">
        <p>We’re passionate about using technology to make a positive impact on communities.</p>
      </Banner>
      <div className="banner-01">
        {[...stories].reverse().map((story, index) => (
          <article key={index} onClick={() => navigate(`/clients/stories/${story.id}`)}>
            <h1>{story.organization}</h1>
            <p className="organization">{story.organizationType}</p>
            <div className="details">
              {story.logoUrl && <img className="logo" src={story.logoUrl} />}
              <p className="name">{story.title}</p>
            </div>
            <p className="link">READ MORE</p>
          </article>
        ))}
      </div>
    </styled.ClientStories>
  )
}
