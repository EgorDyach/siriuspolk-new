'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { Medal, Person } from '@shared/model/types';
import { getFullName } from '../model/helpers';
import { getPersonDates } from '@shared/model/getPersonDates';
import { Button } from '@shared/ui/Button';
import { Dialog } from '@shared/ui/dialog';
import AdminCardModal from './AdminCardModal';
import {
  showSuccessNotification,
  showErrorNotification,
} from '@shared/lib/utils/notification';
import {
  requestApprovePerson,
  requestDeletePerson,
  requestUpdatePerson,
} from '../api/adminCard';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { AddPersonType } from '../model/types';
import { getServerLink } from '@shared/model/getServerLink';
import { useAdminStore } from '@entities/admin/model/store';

interface PersonCardProps {
  item: Person;
  serverMedals: Medal[] | null;
  isChecked: boolean;
}

const PersonCard: FC<PersonCardProps> = ({ item, isChecked, serverMedals }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { uncheckedPersons, setUncheckedPersons } = useAdminStore();
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await requestDeletePerson(item.id);
      showSuccessNotification('Анкета успешно удалена!');
      setIsDialogOpen(false);
      setUncheckedPersons(
        (uncheckedPersons || []).filter((el) => el.id !== item.id),
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.code === '401') return router.replace('/login');
        return showErrorNotification(e.message);
      }
      showErrorNotification(
        `Не удалось ${isChecked ? 'удалить' : 'отклонить'}, попробуйте еще раз.`,
      );
    }
  };
  const handleApprove = async (values: AddPersonType) => {
    try {
      await requestUpdatePerson(values);
      if (!isChecked) await requestApprovePerson(values.id);
      showSuccessNotification(
        `Анкета успешно ${isChecked ? 'обновлена' : 'одобрена'}!`,
      );
      setIsDialogOpen(false);
      setUncheckedPersons(
        (uncheckedPersons || []).filter((el) => el.id !== values.id),
      );
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.code === '401') return router.replace('/login');
        return showErrorNotification(e.message);
      }
      showErrorNotification('Не удалось одобрить, попробуйте еще раз.');
    }
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <div className="bg-white">
        <Image
          src={getServerLink(item?.photo?.at(0)?.link)}
          onError={(e) => (e.currentTarget.src = '/UnknownSoldier.jpg')}
          className="w-full aspect-[5/6] object-cover"
          width={300}
          height={400}
          alt={`${getFullName(item)} – главное фото`}
        />

        <div className="p-4 text-center">
          <h4 className="mb-5">
            {getFullName(item)}
            <br />({getPersonDates(item.date_birth, item.date_death)})
          </h4>
          <div className="flex justify-between items-center mb-2">
            <p>{item.city}</p>
            <p>{item.rank}</p>
          </div>
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="!text-base w-full"
          >
            Смотреть
          </Button>
        </div>
      </div>

      <AdminCardModal
        serverMedals={serverMedals}
        handleApprove={handleApprove}
        handleDelete={handleDelete}
        item={item}
        isChecked={isChecked}
      />
    </Dialog>
  );
};

export default PersonCard;
