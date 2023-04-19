import { useParams } from 'react-router-dom'
import { Story } from '.'
import { stories } from '../data'

export const Stories = () => {
  const { id } = useParams()
  const key = Number(id)

  const story = stories.find((s) => s.id === key)

  return story ? <Story {...story} /> : <div>Not Found</div>
}
