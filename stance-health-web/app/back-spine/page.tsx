import ConceptLayout from '../../components/ConceptLayout'
import { content } from '../content'

export default function BackSpine({ searchParams }: { searchParams: { concept?: string } }) {
  const concept = parseInt(searchParams.concept || '3')
  return <ConceptLayout content={content.back} concept={concept} pageType="injury" />
}
