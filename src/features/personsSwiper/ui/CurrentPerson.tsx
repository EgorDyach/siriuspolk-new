'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { ShortPerson } from '@shared/model/types';
import Image from 'next/image';
import { getPersonDates } from '../model/getPersonDates';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Link from 'next/link';
import { routes } from '@shared/config/routes';

interface CurrentPersonProps {
  current: ShortPerson;
}

export default function CurrentPerson({
  current: { id, date_birth, date_death, main_photo, SNL: name, history },
}: CurrentPersonProps) {
  return (
    <div className="flex items-center justify-between gap-[calc(5%)] mb-[40px] h-[630px]">
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
            className="cursor-pointer flex-1/2 max-h-[500px] object-contain"
            src={main_photo || '/images/UnkownSlodier.jpg'}
            alt={`Ветеран ${name} (${getPersonDates(date_birth, date_death)})`}
          />
        </PhotoView>
      </PhotoProvider>
      <div className="max-w-[calc(50%+60px)]">
        <h3 className="font-lora text-[64px] text-white">{name}</h3>
        <p className="font-lora text-[42px] mb-10 text-white">
          {getPersonDates(date_birth, date_death)}
        </p>
        <div
          className="font-lora text-[28px] text-white line-clamp-6 mb-[30px]"
          dangerouslySetInnerHTML={{
            // TODO: Удалить после перехода на CKEditor
            __html: history.replaceAll('||', '\n\n'),
          }}
        />
        <Link
          className="underline text-[24px] font-lora text-white"
          href={routes.historyById(id)}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
