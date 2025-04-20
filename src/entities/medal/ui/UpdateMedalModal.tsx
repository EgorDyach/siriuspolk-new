'use client';
import { DialogContent, DialogHeader, DialogTitle } from '@shared/ui/dialog';
import { FC } from 'react';
import { Medal } from '@shared/model/types';
import MedalForm from './MedalForm';

interface UpdateMedalModalProps {
  onEdit: (value: Medal) => void;
  defaultValues: Medal;
}

const UpdateMedalModal: FC<UpdateMedalModalProps> = ({
  onEdit: onSubmit,
  defaultValues,
}) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          Изменить награду
        </DialogTitle>
      </DialogHeader>
      <MedalForm
        onSubmit={(schema) => onSubmit({ ...schema, id: defaultValues.id })}
        defaultValues={defaultValues}
      />
    </DialogContent>
  );
};

export default UpdateMedalModal;
