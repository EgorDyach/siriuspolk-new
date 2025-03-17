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
    <section className="bg-[#1e1e1e]">
      <div className="container flex">
        <PhotoProvider
          maskOpacity={0.6}
          toolbarRender={() => `Ветеран ${person.SNL} - портрет`}
        >
          <PhotoView src={person.main_photo}>
            <Image
              className="mr-[9%] person__image"
              src={person.main_photo}
              width={500}
              height={700}
              alt={`Ветеран ${person.SNL} - портрет`}
            />
          </PhotoView>
        </PhotoProvider>
        <div className="flex flex-col pt-[50px] pb-[80px]">
          <h1 className="text-white text-[64px] font-lora max-w-[600px] mb-[40px]">
            {person.SNL}
          </h1>
          <p className="text-white font-lora text-6xl">
            {getPersonDates(person.date_birth, person.date_death)}
          </p>
          <div className="mt-auto flex gap-9">
            <div>
              <p className="text-[#848484] mb-3.5 font-lora text-2xl">
                Место рождения:
              </p>
              <p className="text-white text-[20px]">{person.city}</p>
            </div>
            <div>
              <p className="text-[#848484] mb-3.5 font-lora text-2xl">
                Звание:
              </p>
              <p className="text-white text-[20px]">{person.rank}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonInfo;
