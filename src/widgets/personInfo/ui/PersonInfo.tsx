'use client';
import { Person } from '@shared/model/types';
import React, { FC } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './personInfo.css';
import Image from 'next/image';
import { getPersonDates } from '@shared/model/getPersonDates';

interface PersonInfoProps {
  person: Person;
}

const PersonInfo: FC<PersonInfoProps> = ({ person }) => {
  return (
    <section className="bg-[#1e1e1e] pt-[30px]">
      <div className="container flex flex-col">
        <PhotoProvider
          maskOpacity={0.6}
          toolbarRender={() => `Ветеран ${person.SNL} - портрет`}
        >
          <PhotoView src={person.main_photo}>
            <Image
              className="px-8 object-cover"
              src={person.main_photo}
              width={500}
              height={700}
              alt={`Ветеран ${person.SNL} - портрет`}
            />
          </PhotoView>
        </PhotoProvider>
        <div className="flex flex-col pt-[50px] pb-[80px]">
          <h1 className="text-white text-[26px] font-lora max-w-[600px] mb-[10px]">
            {person.SNL}
          </h1>
          <p className="text-white font-lora text-[20px]">
            {getPersonDates(person.date_birth, person.date_death)}
          </p>
          <div className="mt-9 flex flex-col gap-9">
            <div>
              <p className="text-[#848484] mb-1 font-lora text[16px]">
                Место рождения:
              </p>
              <p className="text-white text-[14px]">{person.city}</p>
            </div>
            <div>
              <p className="text-[#848484] mb-1 font-lora text[16px]">
                Звание:
              </p>
              <p className="text-white text-[14px]">{person.rank}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonInfo;
