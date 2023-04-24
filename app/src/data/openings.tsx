import { IOpeningProps } from '@/features'

export interface IOpeningModel extends IOpeningProps {
  id: string
  isOpen: boolean
}

export const openings: IOpeningModel[] = [
  {
    id: 'guid',
    postedOn: new Date(2023, 4, 30),
    name: 'Technical Architect',
    isOpen: false,
    openingType: 'Contract',
    location: 'Remote',
    description: (
      <>
        <p>
          The Ministry of Social Development and Poverty Reduction is proud to be an equal
          opportunity employer; we strive to ensure all employees contribute in meaningful ways,
          bring their full self to work and celebrate their differences. The ministry focuses on
          reducing poverty, creating opportunities, and increasing inclusion. The ministry provides
          strategic leadership and quality services that empower British Columbians to share in the
          province’s prosperity, with a vision to participate fully in their community and to reach
          their full potential.
        </p>
        <p>
          The Information Services Division are technology leaders, planning and delivering
          successful solutions with information management and information technology (IM/IT)
          services to both the Ministry of Social Development and Poverty Reduction and the Ministry
          of Children and Family. The division also provides IM/IT resource planning,
          decision-making, project and issues management, security and privacy functions, and
          desktop support. Our guiding principle is to promote a service delivery culture that is
          respectful, fosters positive relationships, and promotes creative problem solving with all
          our staff and partners in the Social Sector.
        </p>
        <p>
          Team Lead is a people leader responsible for ensuring the health of the team and ticket
          management system(s) while delivering service excellence to clients in the Social Sector
          (comprised of the Ministries of Children and Family Development, Social Development and
          Poverty Reduction as well as external Service Providers, boards and agencies). The
          position will provide business analysis/consulting services, plan ongoing business and
          technology needs consistent with government and ministry strategic plans, system
          standards, and interfacing requires.{' '}
        </p>
        <p>
          As a member of the Service Management Operations team you will provides advice to senior
          staff, lead multiple projects, and provide supervision and guidance to Service Desk, Order
          Management, or Security Access Analysts in the provisioning of access and to resolve data
          and application problems, in a virtual and in person environment. To manage resolution of
          problems to minimize user impact (downtime and costs) related to Information Technology
          problems and to draft communication for IT service impacts and changes to all users.{' '}
        </p>
      </>
    ),
    requirements: (
      <>
        <p>
          <ul>
            <li>
              Degree in computer science, business, or related field and a minimum of 2 years
              *related experience; OR
            </li>
            <li>
              Diploma in computer science, business, or related field and a minimum of 3 years
              *related experience; OR
            </li>
            <li>An equivalent combination of education and experience may be considered.</li>
          </ul>
        </p>
        <p>
          *Related experience must include:
          <ul>
            <li>Experience providing quality customer service to staff or the public.</li>
            <li>Experience supervising or directing the work of others.</li>
            <li>Experience applying ITIL best practices.</li>
          </ul>
        </p>
        <p>
          Preference may be given to those with:
          <ul>
            <li>Experience managing a team of 5 or more staff members</li>
            <li>
              Experience submitting and reviewing tickets in a ticket management system (e.g.
              ServiceNow, Remedy, Jira)
            </li>
            <li>
              Experience supervising in a high volume, fast paced service delivery environment (for
              example, Service Desk, Workplace Technologies).
            </li>
            <li>Experience in the social sector.</li>
            <li>2 or more years experience in the IM/IT sector.</li>
          </ul>
        </p>
        <p>
          Willingness Statement:
          <ul>
            <li>Must be willing to travel occasionally within the province.</li>
          </ul>
        </p>
      </>
    ),
  },
]
