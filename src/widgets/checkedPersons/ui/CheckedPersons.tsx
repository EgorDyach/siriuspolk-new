'use client';
import React, { useEffect } from 'react';
import AdminCard from '@features/adminCard/ui/AdminCard';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { requestCheckedPersons } from '../api/checkedPersons';
import { useAdminStore } from '@entities/admin/model/store';

const CheckedPersons = () => {
  const { checkedPersons, setCheckedPersons, medals } = useAdminStore();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      try {
        const persons = await requestCheckedPersons();
        setCheckedPersons(persons);
      } catch (e) {
        if (e instanceof AxiosError) {
          if (e.code === '401') return router.replace('/login');
          return showErrorNotification(e.message);
        }
        showErrorNotification('Не удалось получить просмотренные истории.');
        setCheckedPersons([]);
      }
    })();
  }, [router, setCheckedPersons]);
  return (
    <div className="">
      <h3 className="text font-semibold md:text-2xl mb-8">
        Просмотренные истории
      </h3>
      {checkedPersons === null && (
        <div className="text-center w-full">Загрузка...</div>
      )}

      {checkedPersons !== null && (
        <div className="grid grid-cols-1 gap-4 2sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {checkedPersons.map((el) => (
            <AdminCard serverMedals={medals} isChecked key={el.id} item={el} />
          ))}
        </div>
      )}
      {checkedPersons !== null && !checkedPersons.length && (
        <span className="text-[#777] italic">Нет просмотренных историй.</span>
      )}
    </div>
  );
};

export default CheckedPersons;
