'use client';
import { Medal } from '@shared/model/types';
import { PencilIcon, X } from 'lucide-react';
import Image from 'next/image';
import React, { ButtonHTMLAttributes, FC, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@shared/ui/alert-dialog';
import { Dialog, DialogTrigger } from '@shared/ui/dialog';
import { Button } from '@shared/ui/Button';
import UpdateMedalModal from './UpdateMedalModal';

interface MedalsListProps {
  medals: Medal[];
  onDelete?: (item: Medal, index: number) => void;
  onEdit?: (item: Medal) => void;
  submitOnDelete?: boolean;
}

const DeleteMedal: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    {...props}
    type="button"
    className="absolute top-2 right-2 cursor-pointer bg-[#52545d] size-8 p-2 rounded-full flex items-center justify-center"
  >
    <X color="white" />
  </button>
);

const MedalsList: FC<MedalsListProps> = ({
  medals,
  onDelete,
  onEdit,
  submitOnDelete: submitOnClick,
}) => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  return (
    <PhotoProvider>
      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {medals.map((medal, index) => (
          <li
            key={`${medal.id}_${index}`}
            className="gap-6 flex items-center flex-col justify-between relative"
          >
            <PhotoView src={medal.photo_link}>
              <Image
                src={medal.photo_link}
                alt={medal.name}
                width={200}
                height={200}
                className="h-32 md:h-44 xl:h-52 text-center object-contain"
              />
            </PhotoView>
            <p className="text-[10px] mb-6 font-medium text-center">
              {medal.name}
            </p>
            {onDelete && (
              <AlertDialog
                open={openIndex === index}
                onOpenChange={(value) => setOpenIndex(value ? index : null)}
              >
                {!submitOnClick && (
                  <DeleteMedal onClick={() => onDelete(medal, index)} />
                )}
                {submitOnClick && (
                  <DeleteMedal onClick={() => setOpenIndex(index)} />
                )}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Вы уверены, что хотите удалить награду «{medal.name}»?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription>
                    Данное действие нельзя отменить, награда будет удалена
                    навсегда.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                      <Button theme="gray" size="small">
                        Отмена
                      </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button
                        size="small"
                        onClick={() => onDelete(medal, index)}
                      >
                        Удалить
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
            {onEdit && (
              <Dialog>
                <DialogTrigger>
                  <button
                    type="button"
                    className="absolute top-12 right-2 cursor-pointer bg-[#52545d] size-8 p-2 rounded-full flex items-center justify-center"
                  >
                    <PencilIcon color="white" />
                  </button>{' '}
                </DialogTrigger>
                <UpdateMedalModal defaultValues={medal} onEdit={onEdit} />
              </Dialog>
            )}
          </li>
        ))}
      </ul>
    </PhotoProvider>
  );
};

export default MedalsList;
