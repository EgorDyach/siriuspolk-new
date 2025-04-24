import MySelect from '@shared/ui/MySelect';
import { Plus } from 'lucide-react';
import React, { FC } from 'react';
import Image from 'next/image';
import { Medal } from '@shared/model/types';
import { StylesConfig, GroupBase } from 'react-select';
import { MedalOption } from '../model/types';

interface MedalsSelectProps {
  handleAdd: (el: MedalOption) => void;
  server_medals: Medal[];
  styles?: StylesConfig<unknown, true, GroupBase<unknown>>;
}

const MedalsSelect: FC<MedalsSelectProps> = ({
  handleAdd,
  server_medals,
  styles,
}) => {
  return (
    <MySelect
      styles={styles}
      onChange={(el) => {
        handleAdd(el as unknown as MedalOption);
      }}
      closeMenuOnSelect={false}
      defaultValue={server_medals}
      options={server_medals.map(({ id, name, photo_link }) => ({
        type: 'medal',
        value: id,
        text: name,
        label: (
          <div className="flex gap-2 items-center">
            <Image
              width={35}
              height={70}
              alt={name}
              src={photo_link}
              className="object-contain md:w-12 md:h-24"
            />
            <p className="text-[12px] md:text-base">{name}</p>
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
