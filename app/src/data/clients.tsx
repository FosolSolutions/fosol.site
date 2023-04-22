import { IClientProps } from '@/components'

export interface IClientModel extends IClientProps {
  id: number
}

export const clients: IClientModel[] = [
  {
    id: 1,
    name: 'Postmedia',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/postmedia-logo.png',
  },
  {
    id: 2,
    name: 'Enkon',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/enkon-logo.png',
  },
  {
    id: 3,
    name: 'Avocette',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/avocette-logo.png',
  },
  {
    id: 4,
    name: 'Quartech',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/quartech-logo.jfif',
  },
  {
    id: 5,
    name: 'Victoria Christadelphians',
    organizationType: 'Not-For-Profit',
    logoUrl: '/assets/clients/victoria-christadelphian-logo.png',
  },
  {
    id: 6,
    name: 'BC Municipal Affairs & housing',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
  },
  {
    id: 7,
    name: 'Ministry of Advanced Education, Skills & Training',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
  },
  {
    id: 8,
    name: 'Ministry of Attorney General',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
  },
  {
    id: 9,
    name: 'Ministry of Public Safety and Solicitor General',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
  },
  {
    id: 10,
    name: 'Ministry of Transportation & Infrastructure',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
  },
  {
    id: 11,
    name: 'Ministry of Citizen Services',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
  },
]
