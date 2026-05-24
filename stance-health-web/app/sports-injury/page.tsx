import ConceptLayout from '../../components/ConceptLayout'
import { content } from '../content'

export default function SportsInjury({ searchParams }: { searchParams: { concept?: string } }) {
  const concept = parseInt(searchParams.concept || '2')
  return <ConceptLayout content={content.sports} concept={concept} pageType="injury" />
}
