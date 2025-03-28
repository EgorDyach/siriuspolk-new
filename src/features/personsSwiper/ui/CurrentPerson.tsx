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
            'sm:flex-col sm:gap-6 sm:items-stretch sm:h-full sm:max-h-[890px]',
          )}
        >
          <div className="hidden  sm:flex h-full justify-between w-full">
            <PhotoView src={main_photo}>
              <Image
                width={400}
                height={700}
                className="cursor-pointer flex-1/2 max-h-[500px] object-contain -order-1 mb-2 sm:w-[35vw] md:w-full"
                src={main_photo || '/UnkownSlodier.jpg'}
                alt={`Ветеран ${name} (${getPersonDates(date_birth, date_death)})`}
              />
            </PhotoView>
            <div className="text-center md:flex md:flex-col md:text-left ml-10 flex-1/2">
              <h3 className="font-lora text-[40px] text-white -order-2 mb-4">
                {name}
              </h3>
              <p className="font-lora text-[36px] mb-5 text-white">
                {getPersonDates(date_birth, date_death)}
              </p>
              <div
                className="text-[24px]/[38px] m text-white text-ellipsis mb-[30px] max-w-full sm:mb-[14px] hidden md:line-clamp-6"
                dangerouslySetInnerHTML={{
                  __html: history.replaceAll('||', '\n\n'),
                }}
              />
              <Link
                className="underline text-[14px] font-lora text-white sm:text-2xl hidden md:block"
                href={routes.historyById(id)}
              >
                Подробнее
              </Link>
            </div>
          </div>
          <PhotoView src={main_photo}>
            <Image
              width={400}
              height={700}
              className="cursor-pointer flex-1/2 max-h-[500px] max-w-[200px] object-contain -order-1 mb-2 sm:max-w-[300px] sm:hidden"
              src={main_photo || '/UnkownSlodier.jpg'}
              alt={`Ветеран ${name} (${getPersonDates(date_birth, date_death)})`}
            />
          </PhotoView>
          <h3 className="font-lora text-[28px] text-white -order-2 mb-4 sm:hidden">
            {name}
          </h3>
          <p className="font-lora text-[28px] mb-5 text-white sm:hidden">
            {getPersonDates(date_birth, date_death)}
          </p>
          <div
            className="text-[15px]/[27px] max-w-[90%] text-white line-clamp-4 mb-[30px] h-full sm:w-full sm:text-[24px]/[34px] sm:max-w-full sm:mb-[14px] md:hidden"
            dangerouslySetInnerHTML={{
              __html: history.replaceAll('||', '\n\n'),
            }}
          />
          <Link
            className="underline text-[14px] font-lora text-white sm:text-2xl md:hidden"
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
