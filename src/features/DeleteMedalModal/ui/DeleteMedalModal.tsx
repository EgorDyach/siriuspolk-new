import { CurrentMedalType } from '@entities/medal/model/types';
import { Medal } from '@shared/model/types';
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@shared/ui/alert-dialog';
import { Button } from '@shared/ui/Button';
import React, { FC } from 'react';

interface DeleteMedalModalProps {
  onDelete: (medal: Medal, index: number) => void;
  medalSubmitting: CurrentMedalType;
}

export const DeleteMedalModal: FC<DeleteMedalModalProps> = ({
  onDelete,
  medalSubmitting,
}) => (
  <AlertDialogContent>
    {medalSubmitting && onDelete && (
      <>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы уверены, что хотите удалить награду «{medalSubmitting.medal.name}
            »?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Данное действие нельзя отменить, награда будет удалена навсегда.
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
              onClick={() =>
                onDelete(medalSubmitting.medal, medalSubmitting.index)
              }
            >
              Удалить
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </>
    )}
  </AlertDialogContent>
);
