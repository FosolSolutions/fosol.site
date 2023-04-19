import { Banner } from '@/components'

export interface IClientStories {
  children?: React.ReactNode
}

export const ClientStories = ({ children }: IClientStories) => {
  return (
    <div>
      <Banner title="Client Stories">
        <p>We're passionate about harnessing technology to better serve communities.</p>
      </Banner>
    </div>
  )
}
