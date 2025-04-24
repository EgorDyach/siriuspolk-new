'use client';
import { DialogContent, DialogHeader, DialogTitle } from '@shared/ui/dialog';
import { PhotoSchemaType } from '../model/photoSchema';
import { FC } from 'react';
import PhotoForm from './PhotoForm';

interface AddMedalModalProps {
  onSubmit: (value: PhotoSchemaType) => void;
}

const AddPhotoModal: FC<AddMedalModalProps> = ({ onSubmit }) => {
  return (
    <DialogContent
      onEscapeKeyDown={(e) => e.preventDefault()}
      onPointerDownOutside={(e) => e.preventDefault()}
    >
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          Добавить фото
        </DialogTitle>
      </DialogHeader>
      <PhotoForm onSubmit={onSubmit} />
    </DialogContent>
  );
};

export default AddPhotoModal;
