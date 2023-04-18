import { Banner } from '@/components'

export interface IClientStories {
  children?: React.ReactNode
}

export const ClientStories = ({ children }: IClientStories) => {
  return (
    <div>
      <Banner>
        <h1>Client Stories</h1>
        <div>
          <p>We're passionate about harnessing technology to better serve communities.</p>
        </div>
      </Banner>
    </div>
  )
}
