import moment from 'moment'
import * as styled from './styled'

export interface IOpeningProps {
  name: string
  postedOn: string | Date
  openingType: 'Full Time' | 'Contract'
  experience?: 'junior' | 'intermediate' | 'senior'
  salary?: string
  location: string
  description: React.ReactNode
  requirements: React.ReactNode
}

export const Opening = ({
  name,
  postedOn,
  openingType,
  experience,
  salary,
  location,
  description,
  requirements,
}: IOpeningProps) => {
  return (
    <styled.Opening>
      <h1>{name}</h1>
      <div>
        <p>{moment(postedOn).format('MMMM Do YYYY')}</p>
        <p>{openingType}</p>
        {experience && <p>{experience}</p>}
        {salary && <p>{salary}</p>}
        <p>{location}</p>
      </div>
      <div>
        <h2>Description</h2>
        {description}
      </div>
      <div>
        <h2>Requirements</h2>
        {requirements}
      </div>
    </styled.Opening>
  )
}
