import { IArticleModel } from '@/components'
import { FaBaby, FaFlagCheckered, FaUserGraduate } from 'react-icons/fa'

export const progression: IArticleModel[] = [
  {
    title: 'Junior',
    icon: <FaBaby />,
    summary: (
      <div>
        <p>
          Starting your career, or perhaps just starting a new career. We're a great place to start.
        </p>
        <p>We can help you gain the experience you need to have a great career.</p>
      </div>
    ),
  },
  {
    title: 'Intermediate',
    icon: <FaUserGraduate />,
    summary: (
      <div>
        <p>Congratulations you're officially experienced! We need people like you.</p>
        <p>Technology keeps changing, join us and learn the latest technology.</p>
      </div>
    ),
  },
  {
    title: 'Expert',
    icon: <FaFlagCheckered />,
    summary: (
      <div>
        <p>
          You finally know enough and have been doing this long enough to be called an expert. Don't
          let it go to your head, everything you know is yesterday's news.
        </p>
        <p>Join us and keep doing what you love.</p>
      </div>
    ),
  },
]
