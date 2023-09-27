import PageContainer from '@/components/PageContainer'
import Heading from '@/components/Heading'
import HistoryCard from '@/components/History/HistoryCard'

export default function History() {
  return (
    <PageContainer>
        <Heading title='History' />
        <HistoryCard />
        <HistoryCard />
    </PageContainer>
  )
}
