import ConceptLayout from '../../components/ConceptLayout'
import { content } from '../content'

export default function WomensHealth({ searchParams }: { searchParams: { concept?: string } }) {
  const concept = parseInt(searchParams.concept || '4')
  return <ConceptLayout content={content.womens} concept={concept} pageType="injury" />
}
