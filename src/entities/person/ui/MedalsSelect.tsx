import MySelect from '@shared/ui/MySelect';
import { Plus } from 'lucide-react';
import React, { FC } from 'react';
import { Medal } from '../model/types';
import Image from 'next/image';

export type MedalOption = { type: 'medal'; value: number; text: string };

interface MedalsSelectProps {
  handleAdd: (el: MedalOption) => void;
  server_medals: Medal[];
}

const MedalsSelect: FC<MedalsSelectProps> = ({ handleAdd, server_medals }) => {
  return (
    <MySelect
      onChange={(el) => {
        handleAdd(el as unknown as MedalOption);
      }}
      closeMenuOnSelect={false}
      defaultValue={server_medals}
      options={server_medals.map((el) => ({
        type: 'medal',
        value: el.name,
        text: el.name,
        label: (
          <div className="flex gap-2 items-center">
            <Image
              width={35}
              height={70}
              alt={el.name}
              src={el.src}
              className="object-contain md:w-12 md:h-24"
            />
            <p className="text-[12px] md:text-base">{el.name}</p>
          </div>
        ),
      }))}
      value={[]}
      placeholder={
        <div className="w-full xl:p-5">
          <p className="flex items-center w-full p-5">
            <Plus className="mr-2 size-[20px] md:size-9" />
            <span className="text-[16px] md:text-2xl">Выбрать награду</span>
          </p>
        </div>
      }
    />
  );
};

export default MedalsSelect;
