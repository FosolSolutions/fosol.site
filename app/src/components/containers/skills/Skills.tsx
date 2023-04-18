import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import * as styled from './styled'

export interface ISkills {
  children?: React.ReactNode
}

export const Skills = ({ children }: ISkills) => {
  return (
    <styled.Skills className="skills-section">
      <h2>Skills</h2>
      <div className="shift">
        <FaCaretLeft />
      </div>
      <div className="skills">
        <div>
          <img src="/assets/icons/enterprise-architect.png" />
          Solution Architect
        </div>
        <div>
          <img src="/assets/icons/project-management.png" />
          Project Management
        </div>
        <div>
          <img src="/assets/icons/ux-ui.webp" />
          User Research
        </div>
        <div>
          <img src="/assets/icons/developer.png" />
          Development
        </div>
        <div>
          <img src="/assets/icons/support.png" />
          Support
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/openshift.png" />
          Openshift
        </div>
        <div>
          <img src="/assets/icons/kubernetes.webp" />
          Kubernetes
        </div>
        <div>
          <img src="/assets/icons/docker.webp" />
          Docker
        </div>
        <div>
          <img src="/assets/icons/azure.png" />
          Azure
        </div>
        <div>
          <img src="/assets/icons/aws.png" />
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/windows.png" />
        </div>
        <div>
          <img src="/assets/icons/mac.png" />
        </div>
        <div>
          <img src="/assets/icons/linux.png" />
        </div>
        <div>
          <img src="/assets/icons/raspberry-pi.png" />
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/csharp.png" />
        </div>
        <div>
          <img src="/assets/icons/dotnet.png" />
        </div>
        <div>
          <img src="/assets/icons/aspnet.webp" />
        </div>
        <div>
          <img src="/assets/icons/signalr.png" />
          SignalR
        </div>
        <div>
          <img src="/assets/icons/java.png" />
          Java
        </div>
        <div>
          <img src="/assets/icons/bash.png" />
          bash
        </div>
        <div>
          <img src="/assets/icons/node.png" />
        </div>
        <div>
          <img src="/assets/icons/javascript.png" />
          Javascript
        </div>
        <div>
          <img src="/assets/icons/typescript.jpeg" />
          Typescript
        </div>
        <div>
          <img src="/assets/icons/react.png" />
          React
        </div>
        <div>
          <img src="/assets/icons/redux.png" />
        </div>
        <div>
          <img src="/assets/icons/angularjs.png" />
          AngularJS
        </div>
        <div>
          <img src="/assets/icons/leaflet.webp" />
          Leaflet
        </div>
        <div>
          <img src="/assets/icons/arcjs.png" />
          ArcJS
        </div>
        <div>
          <img src="/assets/icons/jquery.png" />
        </div>
        <div>
          <img src="/assets/icons/html5.png" />
        </div>
        <div>
          <img src="/assets/icons/css3.webp" />
        </div>
        <div>
          <img src="/assets/icons/sass.webp" />
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/kafka.png" />
          Kafka
        </div>
        <div>
          <img src="/assets/icons/tsql.webp" />
        </div>
        <div>
          <img src="/assets/icons/mssql.png" />
          SQL Server
        </div>
        <div>
          <img src="/assets/icons/oracle.png" />
          DB
        </div>
        <div>
          <img src="/assets/icons/postgresql.webp" />
          PostgreSQL
        </div>
        <div>
          <img src="/assets/icons/elasticsearch.png" />
          Elasticsearch
        </div>
        <div>
          <img src="/assets/icons/mongodb.png" />
          MongoDB
        </div>
        <div>
          <img src="/assets/icons/redis.png" />
          Redis
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/kibana.webp" />
          Kibana
        </div>
        <div>
          <img src="/assets/icons/grafana.png" />
          Grafana
        </div>
        <div>
          <img src="/assets/icons/sysdig.png" />
          Sysdig
        </div>
        <div>
          <img src="/assets/icons/prometheus.png" />
          Prometheus
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/github.png" />
          Github
        </div>
        <div>
          <img src="/assets/icons/git.webp" />
          Git
        </div>
        <div>
          <img src="/assets/icons/svn.png" />
          SVN
        </div>
        <div>
          <img src="/assets/icons/tfs.png" />
          Team Foundation Server
        </div>
        <div>
          <img src="/assets/icons/jenkins.png" />
          Jenkins
        </div>
        <div>
          <img src="/assets/icons/tekton.png" />
          Tekton
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/opennlp.png" />
        </div>
        <div>
          <img src="/assets/icons/ffmpeg.png" />
          FFmpeg
        </div>
        <div>
          <img src="/assets/icons/keycloak.png" />
          Keycloak
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/oidc.png" />
          OIDC
        </div>
        <div>
          <img src="/assets/icons/oauth2.png" />
          Oauth
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/vscode.webp" />
          VS Code
        </div>
        <div>
          <img src="/assets/icons/visualstudio.png" />
          Visual Studio
        </div>
        <div>
          <img src="/assets/icons/uxpin.png" />
        </div>
        <div className="hr"></div>
        <div>
          <img src="/assets/icons/jira.png" />
          Jira
        </div>
        <div>
          <img src="/assets/icons/agile.png" />
          Agile
        </div>
        <div>
          <img src="/assets/icons/scrum.png" />
          Scrum
        </div>
        <div>
          <img src="/assets/icons/waterfall.png" />
          Waterfall
        </div>
      </div>
      <div className="shift">
        <FaCaretRight />
      </div>
    </styled.Skills>
  )
}
