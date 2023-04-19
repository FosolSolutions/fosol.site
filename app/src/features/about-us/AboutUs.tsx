import { Banner } from '@/components'

export interface IAboutUs {
  children?: React.ReactNode
}

export const AboutUs = ({ children }: IAboutUs) => {
  return (
    <div>
      <Banner title="Our Team">
        <p>Our highly skilled professionals are diverse in experience and work style.</p>
        <p>
          Our lived experience drives a passion to help clients realize bold goals through smarter
          technology solutions.
        </p>
      </Banner>
    </div>
  )
}
