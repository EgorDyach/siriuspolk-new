import { redirect } from 'next/navigation';
import { requestFullPerson } from '../api/person';
import { Person } from '@shared/model/types';
import PersonInfo from '@widgets/personInfo/ui/PersonInfo';
import PersonMedals from '@widgets/personMedals/ui/PersonMedals';
import PersonImages from '@widgets/personImages/ui/PersonImages';
import dayjs from 'dayjs';

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
      <section className="pt-[70px] pb-[40px]">
        <div className="container">
          <h2 className="text-black font-lora text-[65px] mb-[20px]">
            История
          </h2>
          {/* TODO: переделать на dangerouslyInnerHTML  */}
          <div className="">
            {data.history.split('||').map((el, i) => (
              <p className="text-[22px] mb-[22px]" key={i}>
                {el.replace('|', '')}
              </p>
            ))}
          </div>
        </div>
      </section>
      <PersonImages images={data.photo ? data.photo.split(',') : []} />
      <div className="container">
        <p className="text-end italic mb-7 text-[20px] text-[#999]">
          Рассказ предоставлен{' '}
          {dayjs(data.date_pulished * 1000).format('D MMMM YYYY г.')}
        </p>
      </div>
    </>
  );
}
