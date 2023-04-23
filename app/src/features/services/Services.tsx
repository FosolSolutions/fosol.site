import { Banner, Skills } from '@/components'
import * as styled from './styled'

export interface IServices {
  children?: React.ReactNode
}

export const Services = ({ children }: IServices) => {
  return (
    <styled.Services>
      <Banner title="Services">
        <p>
          We work with leading technology platforms, existing off-the-shelf technologies, and
          current tech stacks to deliver exceptional results.
        </p>
      </Banner>
      <div>
        <section>
          <h1>Services</h1>
          <div>
            <div>Application Management</div>
            <div>Project Management (Agile/Scrum or Waterfall)</div>
            <div>User Research</div>
            <div>UX/UI Design</div>
            <div>Custom Development</div>
            <div>DevOps</div>
            <div>Cloud Solutions</div>
            <div>Systems & Data Integration</div>
            <div>Machine Learning</div>
            <div>Natural Language Processing</div>
            <div>Security/Identity Management</div>
            <div>Automated Testing and QA</div>
            <div>Audio/Video Capture</div>
          </div>
        </section>
        <Skills title="Our Toolkit Includes" />
        <section>
          <h1>Our Toolkit Includes</h1>
          <div>
            <div>Windows/Linux/Mac</div>
            <div>C#</div>
            <div>Dotnet</div>
            <div>Javascript</div>
            <div>Typescript</div>
            <div>Node</div>
            <div>React</div>
            <div>Angular</div>
            <div>Redux</div>
            <div>jQuery</div>
            <div>HTML/CSS</div>
            <div>Sass</div>
            <div>Leaflet</div>
            <div>ArcJS</div>
            <div>Amazon Web Services</div>
            <div>Azure</div>
            <div>TSQL</div>
            <div>MSSQL Server</div>
            <div>PostgreSQL</div>
            <div>MariaDB</div>
            <div>MySQL</div>
            <div>Oracle DB</div>
            <div>MongoDB</div>
            <div>Elasticsearch</div>
            <div>Redis</div>
            <div>Kafka</div>
            <div>Docker</div>
            <div>Openshift</div>
            <div>Kubernetes</div>
            <div>Raspberry Pi</div>
            <div>Bash</div>
            <div>Powershell</div>
            <div>Kibana</div>
            <div>Grafana</div>
            <div>Sysdig</div>
            <div>Prometheus</div>
            <div>Github</div>
            <div>Git</div>
            <div>SVN</div>
            <div>Team Foundation Server</div>
            <div>Jenkins</div>
            <div>Tekton</div>
            <div>OpenNLP</div>
            <div>FFmpeg</div>
            <div>Keycloak</div>
            <div>OIDC</div>
            <div>Oauth 2</div>
            <div>Jira</div>
            <div>Confluence</div>
          </div>
        </section>
      </div>
    </styled.Services>
  )
}
