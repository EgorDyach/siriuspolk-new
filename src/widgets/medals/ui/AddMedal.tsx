'use client';
import { Dialog } from '@shared/ui/dialog';
import { Plus } from 'lucide-react';
import { MedalSchemaType } from '../model/medalSchema';
import { FC, useCallback, useState } from 'react';
import AddMedalModal from '@entities/medal/ui/AddMedalModal';
import { Button } from '@shared/ui/Button';

interface AddMedalProps {
  onSubmit: (value: MedalSchemaType) => void;
}

const AddMedal: FC<AddMedalProps> = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = useCallback(
    (item: MedalSchemaType) => {
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
      <AddMedalModal onSubmit={handleSubmit} />
    </Dialog>
  );
};

export default AddMedal;
