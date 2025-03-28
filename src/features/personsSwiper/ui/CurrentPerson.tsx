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
import { cx } from 'class-variance-authority';
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
      <PhotoProvider
        maskOpacity={0.8}
        toolbarRender={() =>
          `Ветеран ${name} (${getPersonDates(date_birth, date_death)})`
        }
      >
        <div
          ref={ref}
          className={cx(
            'flex items-center justify-between gap-[calc(5%)] mb-[40px] flex-col text-center',
            'sm:flex-row sm:flex-wrap sm:gap-6 sm:items-stretch',
          )}
        >
          <PhotoView src={main_photo}>
            <Image
              width={400}
              height={700}
              className="cursor-pointer flex-1/2 max-h-[500px] max-w-[200px] object-contain -order-1 mb-2 sm:max-w-[300px]"
              src={main_photo || '/UnkownSlodier.jpg'}
              alt={`Ветеран ${name} (${getPersonDates(date_birth, date_death)})`}
            />
          </PhotoView>
          <div className="hidden sm:inline sm:w-min sm:flex-auto h-full">
            <h3 className="font-lora text-[40px] text-white -order-2 mb-4">
              {name}
            </h3>
            <p className="font-lora text-[36px] mb-5 text-white">
              {getPersonDates(date_birth, date_death)}
            </p>
          </div>
          <h3 className="font-lora text-[24px] text-white -order-2 mb-4 sm:hidden">
            {name}
          </h3>
          <p className="font-lora text-[22px] mb-5 text-white sm:hidden">
            {getPersonDates(date_birth, date_death)}
          </p>
          <div
            className="text-[12px]/[24px] max-w-[90%] text-white line-clamp-4 mb-[30px] h-full sm:w-full sm:text-[24px]/[34px] sm:max-w-full sm:mb-[14px]"
            dangerouslySetInnerHTML={{
              __html: history.replaceAll('||', '\n\n'),
            }}
          />
          <Link
            className="underline text-[14px] font-lora text-white sm:text-2xl"
            href={routes.historyById(id)}
          >
            Подробнее
          </Link>
        </div>
      </PhotoProvider>
    );
  },
);

CurrentPerson.displayName = 'CurrentPerson';

export default CurrentPerson;
