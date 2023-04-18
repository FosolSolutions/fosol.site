import { FaBuilding, FaHammer, FaInfoCircle, FaLink, FaOsi } from 'react-icons/fa'
import * as styled from './styled'

export interface IProjects {
  children?: React.ReactNode
}

export const Projects = ({ children }: IProjects) => {
  return (
    <styled.Projects className="box pad">
      <h1>
        <FaHammer /> What We're Currently Working On
      </h1>
      <div className="containers">
        <article className="container">
          <div>
            <img className="icon icon-bk" src="assets/projects/bc-gov/mmia/mmia-logo.svg" />
            <h2>Media Monitoring Information & Analysis</h2>
          </div>
          <div>
            <div className="row nowrap">
              <p>
                A news aggregation system that takes in news sources of varying types and provides a
                single location for subscribers to access and report on the data.
              </p>
              <img className="logo" src="assets/projects/bc-gov/bc-gov-logo.png" />
            </div>
            <p>
              Container based microservice enterprise architecture. Includes cloud native
              integrations with Openshift, Azure, and AWS. Custom audio and video capture solution
              providing 24x7 up-time.
            </p>
            <p>Openshift, Kafka, Transcription, Natural Language Processing, Machine Learning</p>
            <div className="grid gc-2 g-links">
              <div>
                <FaInfoCircle />
              </div>
              <div>
                <p>
                  <a href="/stories/mmia.html" className="text-white">
                    Read more here
                  </a>
                </p>
              </div>
              <div title="client">
                <FaBuilding />
              </div>
              <div>
                <p>BC Gov - Ministry of Citizen Services</p>
              </div>
              <div>
                <FaOsi />
              </div>
              <div>
                <p>Opensource</p>
              </div>
              <div>
                <FaLink />
              </div>
              <div>
                <a href="https://github.com/bcgov/tno" className="text-white">
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="work-mmia"></div>
        </article>
        <article className="container">
          <div>
            <img className="icon" src="/assets/projects/coevent/icon-white.svg" />
            <h2>Coevent</h2>
          </div>
          <div>
            <p>
              Online membership volunteer scheduling tool. Provides an interactive way to inform and
              enable membership of events, activities, and support openings.
            </p>
            <p>
              A simple project to support not-for-profit organization in the local Victoria area.
            </p>
            <p>React, Dotnet, PostgreSQL</p>
            <div className="grid gc-2 g-links">
              <div>
                <FaInfoCircle />
              </div>
              <div>
                <p>
                  <a href="/stories/coevent.html" className="text-white">
                    Read more here
                  </a>
                </p>
              </div>
              <div title="client">
                <FaBuilding />
              </div>
              <div>
                <p>Victoria Christadelphians</p>
              </div>
              <div>
                <FaOsi />
              </div>
              <div>
                <p>Opensource</p>
              </div>
              <div>
                <FaLink />
              </div>
              <div>
                <a href="https://github.com/fosolsolutions/coevent" className="text-white">
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="work-coevent"></div>
        </article>
        <article className="container">
          <h2>Raspberry Pi Kubernetes Cluster</h2>
          <div>
            <p>
              Rack mounted RPi solution running Ubuntu and Kubernetes. Provides a portable small
              testing and learning environment.
            </p>
            <p>Provided the ability to stand up a kubernetes cluster for testing and training.</p>
            <p>
              Pity RPi's are very difficult to purchase these days. It took longer to get the
              hardware than it did to set it all up.
            </p>
            <p>The next leg of the journey is to add persistent storage volumes.</p>
            <p>Raspberry Pi 4B, Ubuntu, Kubernetes</p>
            <div className="grid gc-2 g-links">
              <div>
                <FaInfoCircle />
              </div>
              <div>
                <p>
                  <a href="/stories/rpi-kubernetes.html" className="text-white">
                    Read more here
                  </a>
                </p>
              </div>
              <div title="client">
                <FaBuilding />
              </div>
              <div>
                <p>Fosol Software Solutions</p>
              </div>
            </div>
          </div>
          <div className="work-rpi-cluster"></div>
        </article>
      </div>
    </styled.Projects>
  )
}
