import PageContainer from '@/components/PageContainer'
import Heading from '@/components/Heading'
import ExerciseSearch from '@/components/Exercises/ExerciseSearch'
import ExerciseList from '@/components/Exercises/ExerciseList';
//import { fetchExercises } from '@/lib/api';

export default async function ExercisesPage() {

    return (
        <PageContainer>
            <Heading title='Exercises' />
            <ExerciseSearch />
            <ExerciseList />
        </PageContainer>
  )
}
