import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@shared/ui/select';
import { Plus } from 'lucide-react';
import React, { FC, useState } from 'react';
import { Medal } from '../model/types';
import Image from 'next/image';

interface MedalsSelectProps {
  handleAdd: (el: string) => void;
  server_medals: Medal[];
}

const MedalsSelect: FC<MedalsSelectProps> = ({ handleAdd, server_medals }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Select
      onOpenChange={(open) => setIsOpen(open)}
      open={isOpen}
      onValueChange={(el) => {
        handleAdd(el);
        setIsOpen(true);
      }}
    >
      <SelectTrigger size="auto" className="w-full">
        <div className="w-full p-10">
          <p className="flex items-center w-full p-5">
            <Plus className="mr-5 size-[50px]" />
            <span className="text-4xl">Выбрать награду</span>
          </p>
        </div>
      </SelectTrigger>
      <SelectContent>
        {server_medals.map(({ src, name, id }) => (
          <SelectItem key={id} value={id.toString()}>
            <Image
              className="size-auto"
              src={src}
              alt={name}
              width={50}
              height={50}
            />
            <p>{name}</p>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default MedalsSelect;
