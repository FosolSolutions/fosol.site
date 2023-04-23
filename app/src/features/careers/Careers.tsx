import { Banner } from '@/components'

export interface ICareers {
  children?: React.ReactNode
}

export const Careers = ({ children }: ICareers) => {
  return (
    <div>
      <Banner title="Careers">
        <p>We're always looking to find great talent.</p>
        <p>We support local on-site and remote work, and employee and subcontractors.</p>
        <p>Submit your resume, and we'll reach out to you when we have an opening.</p>
      </Banner>
    </div>
  )
}
