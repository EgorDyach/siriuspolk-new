'use client';
import { Dialog } from '@shared/ui/dialog';
import { Plus } from 'lucide-react';
import { FC, useCallback, useState } from 'react';
import AddPhotoModal from '@entities/photo/ui/AddPhotoModal';
import { Button } from '@shared/ui/Button';
import { PhotoSchemaType } from '@entities/photo/model/photoSchema';

interface AddPhotoProps {
  onSubmit: (value: PhotoSchemaType) => void;
}

const AddPhoto: FC<AddPhotoProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = useCallback(
    (item: PhotoSchemaType) => {
      onSubmit(item);
      setIsOpen(false);
    },
    [onSubmit],
  );
  return (
    <Dialog open={isOpen} onOpenChange={(n) => setIsOpen(n)}>
      <Button
        className="flex gap-1 items-center ml-3"
        onClick={() => setIsOpen(true)}
      >
        Добавить <Plus className="ml-2" />
      </Button>
      <AddPhotoModal onSubmit={handleSubmit} />
    </Dialog>
  );
};

export default AddPhoto;
