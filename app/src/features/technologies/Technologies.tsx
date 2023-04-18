import { Banner } from '@/components'
import * as styled from './styled'

export interface ITechnologies {
  children?: React.ReactNode
}

export const Technologies = ({ children }: ITechnologies) => {
  return (
    <styled.Technologies>
      <Banner title="Technologies">
        <div>
          <p>
            We work with leading technology platforms, existing off-the-shelf technologies, and your
            current tech stack to deliver exceptional results.
          </p>
        </div>
      </Banner>
    </styled.Technologies>
  )
}
