import { redirect } from 'next/navigation';
import { requestFullPerson } from '../api/person';
import { Person } from '@shared/model/types';
import PersonInfo from '@widgets/personInfo/ui/PersonInfo';
import PersonMedals from '@widgets/personMedals/ui/PersonMedals';

interface PersonPageProps {
  params: Promise<{ historyId: string }>;
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { historyId } = await params;
  let data: Person;
  try {
    const { details } = await requestFullPerson(historyId);
    if (!details || !details.length) redirect('/not-found');
    data = details[0];
  } catch {
    redirect('/not-found');
  }

  return (
    <>
      <PersonInfo person={data} />
      <PersonMedals medals={data.medals.split(',')} />
    </>
  );
}
