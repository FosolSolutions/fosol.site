export interface IStartProjectForm {
  name: string
  company: string
  email: string
  phone: string
  description: string
  isStarted: boolean
  startDate: Date | string | null
  endDate: Date | string | null
  techStack: string[]
  allowRemote: boolean
  address: string
  region: string
  city: string
  country: string
  budget: number | ''
}
