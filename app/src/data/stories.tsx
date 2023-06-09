import { IStoryProps } from '../features/client-stories/stories'

export interface IStoryModel extends IStoryProps {
  id: number
}

export const stories: IStoryModel[] = [
  {
    id: 1,
    title: 'National Content Management Solution & API',
    organization: 'Postmedia',
    organizationType: 'Public Corporation',
    logoUrl: '/assets/clients/postmedia-logo.png',
    problem: (
      <div>
        <p>
          Canada's largest publisher required a solution to manage content for all local and
          national news, and reduce the number of systems being supported across the country.
        </p>
        <p>
          Reduce the time it takes for an Editor to publish a new story and for it to be displayed
          across all relevant brands and newspapers.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Developed centralized Content Management Solution and scalable API that was able to
          horizontally and vertically scale to handle the millions of requests.
        </p>
        <p>Newly published content was available nationwide within 5 minutes.</p>
      </div>
    ),
    image: <img src="/assets/projects/postmedia/papers.jpeg" />,
    skills: ['Development'],
    technology: [
      'Dotnet',
      'C#',
      'MSSQL',
      'RESTful API',
      'AWS',
      'Elasticsearch',
      'Node',
      'Javascript',
      'jQuery',
      'ExpressJs',
      'Flash',
      'Actionscript',
      'Redis',
    ],
  },
  {
    id: 2,
    title: 'Botswana Land Management Solution',
    organization: 'Enkon',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/enkon-logo.png',
    problem: (
      <div>
        <p>
          The country of Botswana in South Africa had a mandate to give everyone an equal
          eligibility to a residential plot in a place of their choice, on both state and tribal
          land.
        </p>
        <p>
          Current processes can take up to 20-40 years before ownership is acquired, making it a
          multi-generational planning activity.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Provided solution and technical architectural leadership to design a modern solution that
          supported centralized management, while enabling remote locations with intermittent
          internet the ability to sync and work offline.
        </p>
        <p>
          Reduced land-ownership process to a matter of months by enabling instant access to the
          latest centralized information, rules, review, and approval processes.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/enkon/botswana-image-01.jpg" />,
    skills: [
      'Team Leadership',
      'Solution Architect',
      'Technical Architect',
      'DevOps',
      'Development',
    ],
    technology: ['Dotnet', 'C#', 'Razor', 'MSSQL', 'GIS', 'RESTful API'],
  },
  {
    id: 3,
    title: 'Consulting and Subcontracting',
    organization: 'Avocette',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/avocette-logo.png',
    problem: (
      <div>
        <p>
          Required team leadership and architectural assistance on client projects to resolve
          various technical challenges and meet committed due dates.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Resolved design and resourcing issues, while rebuilding core components required to get
          back on track. Provided working solution which met Minimal Viable Product requirements.
        </p>
      </div>
    ),
    image: <img src="/assets/clients/avocette-office.jpg" />,
    skills: [
      'Team Leadership',
      'Solution Architect',
      'Technical Architect',
      'Project Management',
      'Scrum Master',
      'DevOps',
      'Development',
    ],
  },
  {
    id: 4,
    title: 'Consulting and Subcontracting',
    organization: 'Quartech',
    organizationType: 'Private Corporation',
    logoUrl: '/assets/clients/quartech-logo.jfif',
    problem: (
      <div>
        <p>Required team leadership and architectural assistance on client projects.</p>
        <p>
          Searching for a way to design consistent processes and technical implementations that
          could be shared across different projects.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Successful created teams composed of key skills and experience that could be repackaged
          and win future contracts. Organized weekly knowledge sharing activities and provided
          oversight on numerous on-going projects. Identified best practices, common patterns and
          shared components to improve success rate of projects.
        </p>
      </div>
    ),
    image: <img src="/assets/clients/quartech-office.jpg" />,
    skills: [
      'Team Leadership',
      'Solution Architect',
      'Technical Architect',
      'Project Management',
      'Scrum Master',
      'DevOps',
      'Development',
    ],
  },
  {
    id: 5,
    title: 'CoEvent - Team Scheduling',
    organization: 'Victoria Christadelphians',
    organizationType: 'Not-For-Profit',
    logoUrl: '/assets/clients/victoria-christadelphian-logo.png',
    problem: (
      <div>
        <p>
          With a volunteer membership society it can be difficult to ensure everything needed to
          keep an organization running is done on-time, and that everyone is aware of what
          opportunities to participate are available.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Designed and developed a simple online team volunteer scheduling solution. Members receive
          a personalized invitation that doesn't require logging in, where they can apply to fill
          openings.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/coevent/coevent-02.png" />,
    skills: ['Solution Architect', 'DevOps', 'Development'],
    technology: [
      'Azure',
      'Dotnet',
      'C#',
      'Entity Framework',
      'React',
      'DevOps',
      'PostgreSQL',
      'Git',
      'Github',
    ],
  },
  {
    id: 6,
    title: 'Canada Job Grant',
    organization: 'BC Municipal Affairs & housing',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          The Government of BC provides funding each year for programs that support job creation and
          skills training. The process, rules, and funds change each year and require a Case
          Management Solution to manage the programs.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Designed and developed solution that met the clients business requirements, on-time and
          on-budget.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/mah/bc-housing-market.jpg" />,
    skills: [
      'Team Leadership',
      'Technical Architect',
      'DevOps',
      'Development',
      'Quality Assurance',
    ],
    technology: [
      'Dotnet',
      'C#',
      'Entity Framework',
      'AngularJs',
      'Team Foundation Server',
      'DevOps',
      'MSSQL',
      'RESTful API',
    ],
  },
  {
    id: 7,
    title: 'Employer Training Grant',
    organization: 'BC Municipal Affairs & Housing',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          The Government of BC provides funding each year for programs that support job creation and
          skills training. The process, rules, and funds change each year and require a Case
          Management Solution to manage the programs.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>Provided ongoing support and enhancements to handle new business requirements.</p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/mah/bc-housing-market.jpg" />,
    skills: [
      'Team Leadership',
      'Technical Architect',
      'DevOps',
      'Development',
      'Quality Assurance',
    ],
    technology: [
      'Dotnet',
      'C#',
      'Entity Framework',
      'AngularJs',
      'Team Foundation Server',
      'DevOps',
      'MSSQL',
      'RESTful API',
    ],
  },
  {
    id: 8,
    title: 'Community Workforce Response Grant',
    organization: 'Ministry of Advanced Education, Skills & Training',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          The Government of BC provides funding each year for programs that support job creation and
          skills training. The process, rules, and funds change each year and require a Case
          Management Solution to manage the programs.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>Provided ongoing support and enhancements to handle new business requirements.</p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/aved/gov-building-01.jpg" />,
    skills: [
      'Team Leadership',
      'Technical Architect',
      'DevOps',
      'Development',
      'Quality Assurance',
    ],
    technology: [
      'Dotnet',
      'C#',
      'Entity Framework',
      'AngularJs',
      'Team Foundation Server',
      'DevOps',
      'MSSQL',
      'RESTful API',
    ],
  },
  {
    id: 9,
    title: 'Skills Training Grant',
    organization: 'Ministry of Advanced Education, Skills & Training',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          The Government of BC provides funding each year for programs that support job creation and
          skills training. The process, rules, and funds change each year and require a Case
          Management Solution to manage the programs.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>Provided ongoing support and enhancements to handle new business requirements.</p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/aved/training-01.jpeg" />,
    skills: [
      'Team Leadership',
      'Technical Architect',
      'DevOps',
      'Development',
      'Quality Assurance',
    ],
    technology: [
      'Dotnet',
      'C#',
      'Entity Framework',
      'AngularJs',
      'Team Foundation Server',
      'DevOps',
      'MSSQL',
      'RESTful API',
    ],
  },
  {
    id: 10,
    title: 'Corporate Tools Committee',
    organization: 'Ministry of Attorney General',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          Leadership met each month to review processes, budgets, and challenges related to the
          various programs they manage and are building. Without technical backgrounds they lacked
          the ability to know how to tackle various issues or align solutions with long-term
          business goals.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Provided insight and solutions to various tooling issues and designed a DevOps best
          practices for Microsoft Dynamics 365 implementation.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/mag/office-meeting.jpg" />,
    skills: ['Technical Architect', 'DevOps'],
    technology: ['Microsoft 365 Dynamics', 'Git'],
  },
  {
    id: 11,
    title: 'Driver Medical Fitness',
    organization: 'Ministry of Public Safety and Solicitor General',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          ICBC historically managed the Driver Medical Fitness process. The ministry is now
          responsible and would like to both integrate digitally signed documents and automate the
          process through Machine Learning.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Required to develop a Proof of Concept, integrating Machine Learning to improve the
          efficiency and accuracy of determining driver medical fitness.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/pssg/bc-driver-license.jpg" />,
    skills: ['Scrum Master', 'Solution Architect', 'Development'],
    technology: [
      'Openshift',
      'Java',
      'Bluesphere',
      'Machine Learning',
      'Optical Character Recognition',
      'RESTful API',
      'Git',
      'Github',
    ],
  },
  {
    id: 12,
    title: 'Property Information Management System (PIMS)',
    organization: 'Ministry of Citizen Services',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          BC Ministries hold a lot of land, and managing the acquisition, management, and disposal
          of that land (real property) needed to be modernized.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Required designing and building a solution leveraging GIS mapping and the latest
          technologies to track the administration of acquisition, management and disposal of
          parcels of land and buildings across BC. Other public sector agencies have since started
          adopting this solution to help them manage their holdings.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/citz/pims/app.png" />,
    skills: [
      'Team Leadership',
      'Scrum Master',
      'UX/UI Design',
      'Development',
      'GIS Development',
      'DevOps',
    ],
    technology: [
      'Leaflet',
      'Kubernetes',
      'Openshift',
      'Jenkins',
      'Docker',
      'MSSQL',
      'Dotnet',
      'C#',
      'Entity Framework',
      'Javascript',
      'React',
      'Keycloak',
      'Single Sign On',
      'RESTful API',
      'Git',
      'Github',
    ],
  },
  {
    id: 13,
    title: 'Property Services Project (PIMS)',
    organization: 'Ministry of Transportation & Infrastructure',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          Required an Agile team that would work with the Ministry of Transportation and
          Infrastructure to develop a system to replace and enhance teh functionality of an existing
          suite of applications and manually maintained data sources (e.g. spreadsheets) used to
          support the Ministy's property ownership lifecycle.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Forked an open source solution the team had built for the Ministry of Citizen Services
          (PIMS) and provided enhancements to support additional business requirements.
        </p>
        <p>
          Provided a solution that is the single source of truth for the property ownership
          lifecycle, with a map-first interface. Containing all digitized records, a robust search,
          and document management and reporting features.
        </p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/moti/psp/login.png" />,
    skills: [
      'Team Leadership',
      'Hybrid Agile Process',
      'Business Analyst',
      'UX/UI Design',
      'Development',
      'GIS Development',
      'DevOps',
      'Quality Assurances',
    ],
    technology: [
      'ArcGIS',
      'Leaflet',
      'Kubernetes',
      'Openshift',
      'Jenkins',
      'Docker',
      'MSSQL',
      'Dotnet',
      'C#',
      'Entity Framework',
      'Javascript',
      'React',
      'Keycloak',
      'Single Sign On',
      'RESTful API',
      'Git',
      'Github',
    ],
  },
  {
    id: 14,
    title: 'Media Monitoring Insights & Analysis (TNO/MMIA)',
    organization: 'Ministry of Citizen Services',
    organizationType: 'BC Government',
    logoUrl: '/assets/clients/bc-gov-logo.png',
    problem: (
      <div>
        <p>
          GCPE’s primary role is to inform the public about government programs, services, policies,
          and priorities through traditional communication practices and, increasingly, through
          direct engagement and online services.
        </p>
        <p>
          One of GCPE’s featured services to clients is Today’s News Online Media Monitoring.
          Through this application, GCPE tracks breaking news stories in British Columbia, Canada,
          and around the world that impact our province.
        </p>
        <p>
          The TNO application provides a variety of key services to senior executives throughout
          government including near-live issue alerts, morning and evening summary reports, as well
          as in-depth media analysis of key government initiatives and issues.
        </p>
        <p>
          The current solution has reached end-of-life and can no longer be supported. Many of the
          components require significant rewrites to make them compliant with security and business
          requirements.
        </p>
      </div>
    ),
    solution: (
      <div>
        <p>
          Designed new modern microservice cloud architecture solution that would support all
          current business requirements and enable future incremental enhancements.
        </p>
        <p>Performing user research and development to complete the new solution on-time.</p>
      </div>
    ),
    image: <img src="/assets/projects/bc-gov/citz/mmia/mmia-01.png" />,
    skills: [
      'Team Leadership',
      'Solution Architect',
      'Technical Architect',
      'Agile Project Management',
      'Scrum Master',
      'User Research',
      'UX/UI Design',
      'Development',
      'DevOps',
    ],
    technology: [
      'Microservices',
      'AWS',
      'Azure',
      'Kubernetes',
      'Openshift',
      'Tekton',
      'Docker',
      'Kafka',
      'Elasticsearch',
      'PostgreSQL',
      'Dotnet',
      'C#',
      'Entity Framework',
      'Razor',
      'Javascript',
      'React',
      'Java',
      'Transcription',
      'Natural Language Processing',
      'OpenNLP',
      'Sysdig',
      'Grafana',
      'Kibana',
      'Audio/Video Capture and Streaming',
      'FFmpeg',
      'Keycloak',
      'Single Sign On',
      'RESTful API',
      'Git',
      'Github',
    ],
  },
]
