import React, { FC } from 'react';
import { ShortPerson } from '@shared/model/types';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '@shared/config/routes';
import { getPersonDates } from '@shared/model/getPersonDates';

interface HistoriesCardProps {
  item: ShortPerson;
}

const HistoriesCard: FC<HistoriesCardProps> = ({
  item: { main_photo, id, SNL: name, date_birth, date_death, city },
}) => {
  return (
    <div>
      <Link
        href={routes.historyById(id)}
        className={'bg-white flex-col h-full flex'}
      >
        <Image
          className="w-full aspect-[1/1.2] object-cover"
          src={main_photo}
          width={450}
          height={360}
          alt={`Ветеран ${name} – портрет`}
        />
        <div className="text-center flex-1/2 p-[20px] bg-white flex flex-col justify-between">
          <h3 className="mb-[20px] text-[24px] font-lora font-normal">
            {name}
            <br />
            {getPersonDates(date_birth, date_death)}
          </h3>
          <div className="w-full flex justify-between">
            <p className=" text-nowrap max-w-[120px] text-ellipsis overflow-hidden text-[14px] font-lora">
              {city}
            </p>
            <span className="underline text-[16px] font-lora">Подробнее</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HistoriesCard;
