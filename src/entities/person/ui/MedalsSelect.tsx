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
        value: el.id,
        text: el.name,
        label: (
          <div className="flex gap-2 items-center">
            <Image
              width={35}
              height={70}
              alt={el.name}
              src={el.src}
              className="object-contain"
            />
            <p className="text-[12px]">{el.name}</p>
          </div>
        ),
      }))}
      value={[]}
      placeholder={
        <div className="w-full">
          <p className="flex items-center w-full p-5">
            <Plus className="mr-2 size-[20px]" />
            <span className="text-[16px]">Выбрать награду</span>
          </p>
        </div>
      }
    />
  );
};

export default MedalsSelect;
