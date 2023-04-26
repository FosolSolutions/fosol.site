import { Articles, Banner, Button } from '@/components'
import { openings } from '@/data'
import { FaSmile } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { highlights, progression } from './constants'
import * as styled from './styled'

export const Careers = () => {
  const navigate = useNavigate()

  const hasOpening = openings.some((o) => o.isOpen)

  return (
    <styled.Careers>
      <Banner title="Careers">
        <p>We support local on-site and remote work, employees and contractors.</p>
        <p>Submit your resume, and we'll reach out to you when we have an opening.</p>
        <Button label="Submit Resume" />
      </Banner>
      {!hasOpening && (
        <Banner height="30px" variant="secondary">
          <div className="row">
            <FaSmile />
            We will reach out to you when an opening becomes available
            <FaSmile />
          </div>
        </Banner>
      )}
      {hasOpening &&
        openings
          .filter((o) => o.isOpen)
          .map((opening) => (
            <div
              key={opening.id}
              className="opening"
              onClick={() => navigate(`/careers/openings/${opening.id}`)}
            >
              {opening.name}
            </div>
          ))}
      <Articles articles={highlights} />
      <Articles articles={progression} className="progression" />
    </styled.Careers>
  )
}
