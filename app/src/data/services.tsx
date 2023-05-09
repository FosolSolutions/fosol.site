export interface IServiceModel {
  id: number
  name: string
  description: React.ReactNode
  icon?: React.ReactNode
}

export const services: IServiceModel[] = [
  {
    id: 1,
    name: 'Enterprise/Solution/Technical Architects',
    description: '',
    icon: <img src="/assets/icons/enterprise-architect.png" />,
  },
  {
    id: 2,
    name: 'Project Managers',
    description: '',
    icon: <img src="/assets/icons/project-management.png" />,
  },
  {
    id: 3,
    name: 'Scrum Masters',
    description: '',
    icon: <img src="/assets/icons/scrum.png" />,
  },
  {
    id: 4,
    name: 'User Researchers',
    description: '',
    icon: <img src="/assets/icons/ux-ui.webp" />,
  },
  {
    id: 5,
    name: 'UX/UI Designers',
    description: '',
    icon: <img src="/assets/icons/ux-ui.webp" />,
  },
  {
    id: 6,
    name: 'DevOps',
    description: '',
    icon: <img src="/assets/icons/devops.png" />,
  },
  {
    id: 7,
    name: 'Developers',
    description: '',
    icon: <img src="/assets/icons/developer.png" />,
  },
  {
    id: 8,
    name: 'Quality Assurance',
    description: '',
    icon: <img src="/assets/icons/quality-assurance.png" />,
  },
  {
    id: 9,
    name: 'Support',
    description: '',
    icon: <img src="/assets/icons/support.png" />,
  },
]
