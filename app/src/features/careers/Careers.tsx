import { Banner } from '@/components'

export interface ICareers {
  children?: React.ReactNode
}

export const Careers = ({ children }: ICareers) => {
  return (
    <div>
      <Banner>
        <h1>Careers</h1>
        <div>
          <p>Join us and use your talent to make a difference.</p>
        </div>
      </Banner>
    </div>
  )
}
