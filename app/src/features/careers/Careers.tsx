import { Banner } from '@/components'

export interface ICareers {
  children?: React.ReactNode
}

export const Careers = ({ children }: ICareers) => {
  return (
    <div>
      <Banner title="Careers">
        <p>Join us and use your talent to make a difference.</p>
      </Banner>
    </div>
  )
}
