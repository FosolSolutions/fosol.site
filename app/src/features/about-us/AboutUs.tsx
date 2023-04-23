import { Banner } from '@/components'

export interface IAboutUs {
  children?: React.ReactNode
}

export const AboutUs = ({ children }: IAboutUs) => {
  return (
    <div>
      <Banner title="Our Team">
        <p>We love designing and building beautiful software solutions.</p>
        <p>
          Our team is composed of both employee and subcontractor resources that have a history of
          successfully working together.
        </p>
      </Banner>
    </div>
  )
}
