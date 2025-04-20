import { redirect } from 'next/navigation';
import { requestFullPerson } from '../api/person';
import { Person } from '@shared/model/types';
import PersonInfo from '@widgets/personInfo/ui/PersonInfo';
import PersonMedals from '@widgets/personMedals/ui/PersonMedals';
import PersonImages from '@widgets/personImages/ui/PersonImages';
import DOMPurify from 'isomorphic-dompurify';
import dayjs from 'dayjs';

interface PersonPageProps {
  params: Promise<{ historyId: string }>;
}

export default async function PersonPage({ params }: PersonPageProps) {
  const { historyId } = await params;
  let data: Person;
  try {
    data = await requestFullPerson(historyId);
    console.log(data);
    if (!data) redirect('/not-found');
  } catch (e) {
    console.log(e);
    redirect('/not-found');
  }

  return (
    <>
      <PersonInfo person={data} />
      {!!data.medals.length && <PersonMedals medals={data.medals} />}
      {!!data.history && (
        <section className="py-[40px] xl:pt-20">
          <div className="container">
            <h2 className="text-black font-lora text-[32px] mb-[20px] md:text-[44px] xl:text-6xl xl:mb-7">
              История
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.history),
              }}
            />
          </div>
        </section>
      )}
      {data.url && (
        <PersonImages images={data.url ? data.url.split(',') : []} />
      )}
      <div className="container">
        <p className="text-end italic mb-7 text-[12px] text-[#999] md:text-[14px]">
          Рассказ предоставил(а) {data.relative} – {data.contact_surname}{' '}
          {data.contact_name} (
          {dayjs(data.date_published).format('D MMMM YYYY г.')})
        </p>
      </div>
    </>
  );
}
