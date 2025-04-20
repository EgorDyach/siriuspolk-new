import React, { FC } from 'react';
import { Person } from '@shared/model/types';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@shared/config/routes';
import { getPersonDates } from '@shared/model/getPersonDates';
import { getFullName } from '@shared/model/getFullName';

interface HistoriesCardProps {
  item: Person;
}

const HistoriesCard: FC<HistoriesCardProps> = ({ item }) => {
  const { url, id, date_birth, date_death, city } = item;
  return (
    <div className="md:max-w-2xs md:justify-self-center 2xl:max-w-full w-full">
      <Link
        href={routes.historyById(id)}
        className={'bg-white flex-col h-full flex'}
      >
        <Image
          className="w-full aspect-[1/1.2] object-cover"
          src={url || '/UnknownSoldier.jpg'}
          onError={(e) => (e.currentTarget.src = '/UnknownSoldier.jpg')}
          width={450}
          height={360}
          alt={`Ветеран ${getFullName(item)} – портрет`}
        />
        <div className="text-center flex-1/2 p-[15px] bg-white flex flex-col justify-between">
          <h3 className="mb-[20px] text-[16px] font-lora font-normal">
            {getFullName(item)}
            <br />
            {getPersonDates(date_birth, date_death)}
          </h3>
          <div className="w-full flex justify-between">
            <p className=" text-nowrap max-w-[120px] text-ellipsis overflow-hidden text-[12px] font-lora">
              {city}
            </p>
            <span className="underline text-[12px] font-lora">Подробнее</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HistoriesCard;
