import { Banner } from '@/components'
import { openings } from '@/data'
import { FaSmile } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { Opening } from '.'
import * as styled from './styled'

export interface ICareerProps {
  id?: string
}

export const Career = ({ id: initId }: ICareerProps) => {
  const { id } = useParams()

  const opening = openings.find((o) => o.id === id && o.isOpen)

  return (
    <styled.Careers>
      <Banner title="Become Part of Our Team">{!opening && <p>Submit your resume</p>}</Banner>
      {!opening && (
        <Banner height="30px" variant="secondary">
          <div className="row">
            <FaSmile />
            We will reach out to you when an opening becomes available
            <FaSmile />
          </div>
        </Banner>
      )}
      {opening && <Opening {...opening} />}
    </styled.Careers>
  )
}
