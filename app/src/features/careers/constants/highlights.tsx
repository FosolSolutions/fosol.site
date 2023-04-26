import { IArticleModel } from '@/components'
import { FaHandshake, FaToolbox, FaUsers } from 'react-icons/fa'

export const highlights: IArticleModel[] = [
  {
    title: 'Culture',
    icon: <FaUsers />,
    summary: (
      <div>
        <p>We believe in a work culture that supports career development and independence.</p>
        <p>Developing long-term relationships that benefit everyone.</p>
        <p>
          The IT industry never sleeps, it's impossible to keep up. But we believe cultivating each
          other's skills we can create an environment that results in success.
        </p>
      </div>
    ),
  },
  {
    title: 'Training',
    icon: <FaToolbox />,
    summary: (
      <div>
        <p>
          We train our employees and provide opportunities to upgrade their skills and learn new
          things.
        </p>
        <p>
          Building something that works and will last requires skills and experience. This applies
          to building teams as much as it does to technical projects. We invest in our people.
        </p>
      </div>
    ),
  },
  {
    title: 'Ethics',
    icon: <FaHandshake />,
    summary: (
      <div>
        <p>
          We surround ourselves with conscientious people who believe in working to the best of
          their abilities, and supporting their teammates.
        </p>
        <p>Take care of the little things, and the big things are made so much better.</p>
      </div>
    ),
  },
]
