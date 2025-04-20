'use client';
import { DialogContent, DialogHeader, DialogTitle } from '@shared/ui/dialog';
import { MedalSchemaType } from '../model/medalSchema';
import { FC } from 'react';
import MedalForm from './MedalForm';

interface AddMedalModalProps {
  onSubmit: (value: MedalSchemaType) => void;
}

const AddMedalModal: FC<AddMedalModalProps> = ({ onSubmit }) => {
  return (
    <DialogContent
      onEscapeKeyDown={(e) => e.preventDefault()}
      onPointerDownOutside={(e) => e.preventDefault()}
    >
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          Добавить награду
        </DialogTitle>
      </DialogHeader>
      <MedalForm onSubmit={onSubmit} />
    </DialogContent>
  );
};

export default AddMedalModal;
