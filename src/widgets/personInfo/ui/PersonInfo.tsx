'use client';
import { Person } from '@shared/model/types';
import React, { FC } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './personInfo.css';
import Image from 'next/image';
import { getPersonDates } from '@shared/model/getPersonDates';
import { getFullName } from '@features/adminCard/model/helpers';

interface PersonInfoProps {
  person: Person;
}

const PersonInfo: FC<PersonInfoProps> = ({ person }) => {
  return (
    <section className="bg-[#1e1e1e] pt-[30px] sm:pt-20 md:pt-0 md:mt-7">
      <div className="container flex flex-col md:flex-row">
        <PhotoProvider
          maskOpacity={0.6}
          toolbarRender={() => `Ветеран ${getFullName(person)} - портрет`}
        >
          <PhotoView src={person.url || '/UnknownSoldier.jpg'}>
            <Image
              className="px-8 object-cover max-w-xs mx-auto md:flex-1/3 md:object-cover  md:p-0 md:max-w-[300px] md:aspect-[300/400] 2xl:aspect-[400/500] 2xl:max-w-[500px]"
              src={person.url || '/UnknownSoldier.jpg'}
              width={500}
              onError={(e) => (e.currentTarget.src = '/UnknownSoldier.jpg')}
              priority
              height={700}
              alt={`Ветеран ${getFullName(person)} - портрет`}
            />
          </PhotoView>
        </PhotoProvider>
        <div className="flex flex-col pt-[50px] pb-[80px] md:pt-16 md:flex-1/2 md:ml-9 md:pb-12 2xl:pl-24 2xl:pb-16">
          <h1 className="text-white text-[26px] font-lora max-w-[600px] mb-[10px] md:text-[40px]/[1.5] 2xl:text-7xl/[1.5]">
            {getFullName(person)}
          </h1>
          <p className="text-white font-lora text-[20px] md:text-[32px]/[1.5]  2xl:text-5xl/[1.5]">
            {getPersonDates(person.date_birth, person.date_death)}
          </p>
          <div className="mt-9 flex flex-col gap-9 md:flex-row md:flex-1/2">
            <div className="md:content-end xl:flex xl:flex-col xl:gap-4">
              <p className="text-[#848484] mb-1 font-lora text[16px] 2xl:text-2xl/[1.5]">
                Место рождения:
              </p>
              <p className="text-white text-[14px] 2xl:text-xl/[1.5]">
                {person.city}
              </p>
            </div>
            <div className="md:content-end xl:flex xl:flex-col xl:gap-4">
              <p className="text-[#848484] mb-1 font-lora text[16px] 2xl:text-2xl/[1.5]">
                Звание:
              </p>
              <p className="text-white text-[14px] 2xl:text-xl/[1.5]">
                {person.rank}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonInfo;
