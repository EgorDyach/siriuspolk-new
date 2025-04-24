'use client';
import React from 'react';
import {
  requestCreateMedal,
  requestDeleteMedal,
  requestUpdateMedal,
} from '@entities/medal/api/medals';
import { Medal } from '@shared/model/types';
import { showErrorNotification } from '@shared/lib/utils/notification';
import AddMedal from './AddMedal';
import { sortMedals } from '../model/helpers';
import MedalsList from '@widgets/MedalsList/ui/MedalsList';
import { useAdminStore } from '@entities/admin/model/store';

const Medals = () => {
  const { medals, setMedals } = useAdminStore();

  const handleDelete = async (item: Medal) => {
    try {
      await requestDeleteMedal(item.id);
      setMedals(sortMedals((medals || []).filter((el) => el.id !== item.id)));
    } catch {
      showErrorNotification('Не удалось удалить медаль.');
    }
  };

  const handleAdd = async (item: Omit<Medal, 'id'>) => {
    try {
      const id = await requestCreateMedal(item);
      setMedals(sortMedals([...(medals || []), { ...item, id }]));
    } catch {
      showErrorNotification('Не удалось создать медаль.');
    }
  };

  const handleUpdate = async (item: Medal) => {
    try {
      await requestUpdateMedal(item);
      setMedals(
        sortMedals([...(medals || []).filter((el) => el.id !== item.id), item]),
      );
    } catch {
      showErrorNotification('Не удалось обновить медаль.');
    }
  };

  return (
    <div>
      <h2 className="text font-semibold md:text-3xl mb-8 flex items-center">
        Медали <AddMedal onSubmit={handleAdd} />
      </h2>
      {medals === null && 'Загрузка...'}
      {medals !== null && (
        <MedalsList
          medals={medals}
          onDelete={handleDelete}
          onEdit={handleUpdate}
          submitOnDelete
        />
      )}
    </div>
  );
};

export default Medals;
