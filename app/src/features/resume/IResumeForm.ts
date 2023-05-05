import { ISkillForm } from './ISkillForm'

export interface IResumeForm {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  city: string
  region: string
  country: string
  position: string
  description: string
  employment: 'fulltime' | 'contractor' | 'part-time' | 'any' | ''
  skills: ISkillForm[]
  salary: string
  resume: File | null
}
