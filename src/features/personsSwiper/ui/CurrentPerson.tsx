'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ShortPerson } from '@shared/model/types';
import Image from 'next/image';
import { getPersonDates } from '@shared/model/getPersonDates';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Link from 'next/link';
import { routes } from '@shared/config/routes';
import { forwardRef } from 'react';
interface CurrentPersonProps {
  current: ShortPerson;
}

const CurrentPerson = forwardRef<HTMLDivElement, CurrentPersonProps>(
  ({ current }, ref) => {
    const {
      id,
      date_birth,
      date_death,
      main_photo,
      SNL: name,
      history,
    } = current;

    return (
      <div
        ref={ref}
        className="flex items-center justify-between gap-[calc(5%)] mb-[40px] flex-col text-center"
      >
        <PhotoProvider
          maskOpacity={0.8}
          toolbarRender={() =>
            `Ветеран ${name} (${getPersonDates(date_birth, date_death)})`
          }
        >
          <PhotoView src={main_photo}>
            <Image
              width={400}
              height={700}
              className="cursor-pointer flex-1/2 max-h-[500px] max-w-[200px] object-contain -order-1 mb-2"
              src={main_photo || '/images/UnkownSlodier.jpg'}
              alt={`Ветеран ${name} (${getPersonDates(date_birth, date_death)})`}
            />
          </PhotoView>
        </PhotoProvider>
        <h3 className="font-lora text-[24px] text-white -order-2 mb-4">
          {name}
        </h3>
        <p className="font-lora text-[22px] mb-5 text-white">
          {getPersonDates(date_birth, date_death)}
        </p>
        <div
          className="font-lora text-[12px]/[24px] max-w-[90%] text-white line-clamp-4 mb-[30px] h-full"
          dangerouslySetInnerHTML={{
            __html: history.replaceAll('||', '\n\n'),
          }}
        />
        <Link
          className="underline text-[14px] font-lora text-white"
          href={routes.historyById(id)}
        >
          Подробнее
        </Link>
      </div>
    );
  },
);

// ✅ Добавляем displayName
CurrentPerson.displayName = 'CurrentPerson';

export default CurrentPerson;
