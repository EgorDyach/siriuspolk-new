import HistoriesCard from '@features/histories-card/ui/HistoriesCard';
import { ShortPerson } from '@shared/model/types';
import React, { FC } from 'react';

interface HistoriesListProps {
  histories: ShortPerson[];
}

const HistoriesList: FC<HistoriesListProps> = ({ histories }) => {
  return (
    <div className="grid grid-cols-3 gap-[35px] auto-rows-fr">
      {histories.map((item, index) => (
        <HistoriesCard key={index} item={item} />
      ))}
    </div>
  );
};

export default HistoriesList;
