import { Banner } from '@/components'
import { stories } from '@/data'
import { Button } from '@mui/material'
import { FaComments, FaHeartbeat, FaSignal, FaUsers } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import * as styled from './styled'

export interface IAboutUs {
  children?: React.ReactNode
}

export const AboutUs = ({ children }: IAboutUs) => {
  const navigate = useNavigate()

  const now = new Date()

  return (
    <styled.AboutUs>
      <Banner title="About Us">
        <div className="intro">
          <div>
            <p>We love designing and building beautiful software solutions.</p>
            <p>Let us help you complete your next project.</p>
          </div>
          <div>
            <Button variant="contained" color="secondary" onClick={() => navigate('/contact-us')}>
              Contact Us
            </Button>
          </div>
        </div>
      </Banner>
      <div className="story">
        <div>
          <p>
            Fosol Software Solutions is a Canadian technology corporation created in 2016 and
            located in Victoria BC. We offer{' '}
            <span className="warn">consulting and contractor resources</span> for building software
            solutions.
          </p>
          <p>
            We <span className="warn">manage, design, develop, and deliver</span> technology
            solutions for businesses. We love the process of creating tools which improve life.
          </p>
          <ul>
            <li>
              Our team is composed of both employee and subcontractor resources that have a history
              of successfully working together. Review our <Link to="/services">Services</Link>.
            </li>
            <li>
              <span className="warn">On-site and remote</span> availability with a proven
              track-record.
            </li>
            <li>
              Skilled resources with over{' '}
              <span className="warn">{now.getFullYear() - 2001} years</span> experience designing
              and developing software solutions.
            </li>
            <li>
              <span className="warn">
                {stories.filter((s) => s.organizationType === 'BC Government').length} successful
              </span>{' '}
              solutions with BC Government ministries over the past {now.getFullYear() - 2016}{' '}
              years. Review our <Link to="/clients/stories">Client Stories</Link>.
            </li>
            <li>
              <span className="warn">{stories.length}</span> successful projects with clients
              returning for repeat business. Review our{' '}
              <Link to="/clients/stories">Client Stories</Link>.
            </li>
            <li>
              Extensive experience with <span className="warn">cloud based microservice</span>{' '}
              solutions. Review our <Link to="/services">Toolkit</Link>.
            </li>
          </ul>
          <div className="center">
            <Button variant="contained" color="primary" onClick={() => navigate('/start')}>
              Start Your Next Project
            </Button>
          </div>
        </div>
        <div className="image"></div>
      </div>
      <div className="process">
        <section>
          <h1>Our Process</h1>
          <article>
            <div className="icon color5">
              <FaComments />
            </div>
            <div>
              <h2>Dig into your requirements</h2>
              <p>
                We want you to succeed, we start by sitting down together to understand the whole
                picture. Meeting with your users and researching how and what they do provides us
                insights that result in an optimal solution. Identifying key stakeholders and
                knowledge experts so that we can be as efficient as possible.
              </p>
            </div>
          </article>
          <article>
            <div className="icon color2">
              <FaUsers />
            </div>
            <div>
              <h2>Define a team strategy</h2>
              <p>
                We're part of your team, we ensure we're always on the same page and moving in the
                same direction. Defining a strategy, process, communication, and milestones to
                ensure each stage is successful. Identify key metrics and highlighting risks earlier
                so that they can be reviewed and resolved quickly.
              </p>
            </div>
          </article>
          <article>
            <div className="icon color6">
              <FaSignal />
            </div>
            <div>
              <h2>Incremental feedback loop</h2>
              <p>
                Each milestone provides opportunity to assess priorities and progress. Getting user
                feedback early and continuously ensures the end product is successful. We pivot when
                required, always maintaining cadence to ensure successful timelines.
              </p>
            </div>
          </article>
          <article>
            <div className="icon color1">
              <FaHeartbeat />
            </div>
            <div>
              <h2>Deliver wow</h2>
              <p>
                We can't help ourselves, we really love what we do. Our approach turns the abstract
                into concrete results. The solution will not only meet your requirements, it will
                exceed them proven by responsible metrics and objective analysis.
              </p>
            </div>
          </article>
        </section>
      </div>
    </styled.AboutUs>
  )
}
