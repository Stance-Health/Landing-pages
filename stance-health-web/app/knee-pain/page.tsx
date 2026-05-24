import ConceptLayout from '../../components/ConceptLayout'
import { content } from '../content'

export default function KneePain({ searchParams }: { searchParams: { concept?: string } }) {
  const concept = parseInt(searchParams.concept || '1')
  return <ConceptLayout content={content.knee} concept={concept} pageType="injury" />
}
