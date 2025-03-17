'use client';
import HistoriesCard from '@features/histories-card/ui/HistoriesCard';
import { useDebounce } from '@shared/lib/hooks/useDebounce';
import { ShortPerson } from '@shared/model/types';
import { Input } from '@shared/ui/Input';
import React, { FC, useState } from 'react';

interface HistoriesListProps {
  histories: ShortPerson[];
}

const HistoriesList: FC<HistoriesListProps> = ({ histories }) => {
  const [value, setValue] = useState('');

  const filter = useDebounce(value, 300);

  return (
    <>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Найти..."
        className="mb-[24px]"
      />
      <div className="grid grid-cols-3 gap-[35px] auto-rows-fr">
        {histories
          .filter((item) =>
            item.SNL.toLowerCase().includes(filter.trim().toLowerCase()),
          )
          .map((item, index) => (
            <HistoriesCard key={index} item={item} />
          ))}
      </div>
      {!histories.filter((item) =>
        item.SNL.toLowerCase().includes(filter.trim().toLowerCase()),
      ).length && (
        <p className="text-gray-500 italic text-center w-full">
          Не удалось найти истории по вашему запросу!
        </p>
      )}
    </>
  );
};

export default HistoriesList;
