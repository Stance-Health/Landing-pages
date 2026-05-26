import BackSpineLayout from '../../components/BackSpineLayout'
import { content } from '../content'

export default function BackSpine({ searchParams }: { searchParams: { concept?: string } }) {
  const concept = parseInt(searchParams.concept || '3')
  return <BackSpineLayout content={content.back} concept={concept} />
}
