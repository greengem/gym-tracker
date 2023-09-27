import PageContainer from '@/components/PageContainer'
import Heading from '@/components/Heading'
import AvatarBlock from '@/components/AvatarBlock'
import Dashboard from '@/components/Dashboard/Dashboard'

export default function Home() {
  return (
    <PageContainer>
      <Heading title='Profile' />
      <AvatarBlock name="John Doe" avatar="https://github.com/shadcn.png" workouts={5} />
      <Dashboard />
    </PageContainer>
  )
}
