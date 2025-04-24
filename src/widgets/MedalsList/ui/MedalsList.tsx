'use client';
import { Medal } from '@shared/model/types';
import Image from 'next/image';
import React, { FC, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AlertDialog } from '@shared/ui/alert-dialog';
import { Dialog } from '@shared/ui/dialog';
import UpdateMedalModal from '@entities/medal/ui/UpdateMedalModal';
import { CurrentMedalType } from '@entities/medal/model/types';
import { DeleteMedalModal } from '@features/DeleteMedalModal/ui/DeleteMedalModal';
import { EditMedalButton } from './DeleteMedalButton';
import { DeleteMedalButton } from './EditMedalButton';

export interface MedalsListProps {
  medals: Medal[];
  onDelete?: (item: Medal, index: number) => void;
  onEdit?: (item: Medal) => void;
  submitOnDelete?: boolean;
}

const MedalsList: FC<MedalsListProps> = ({
  medals,
  onDelete,
  onEdit,
  submitOnDelete: submitOnClick,
}) => {
  const [currentMedal, setCurrentMedal] = useState<CurrentMedalType>(null);
  return (
    <PhotoProvider>
      <AlertDialog
        open={!!currentMedal && currentMedal.type === 'delete'}
        onOpenChange={() => setCurrentMedal(null)}
      >
        <Dialog open={!!currentMedal && currentMedal.type === 'edit'}>
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
                  <DeleteMedalButton
                    onClick={() =>
                      submitOnClick
                        ? setCurrentMedal({ medal, index, type: 'delete' })
                        : onDelete(medal, index)
                    }
                  />
                )}
                {onEdit && (
                  <EditMedalButton
                    onClick={() =>
                      setCurrentMedal({ medal, index, type: 'edit' })
                    }
                  />
                )}
              </li>
            ))}
          </ul>
          {onDelete && (
            <DeleteMedalModal
              medalSubmitting={currentMedal}
              onDelete={onDelete}
            />
          )}
          {onEdit && currentMedal && (
            <UpdateMedalModal
              defaultValues={currentMedal.medal}
              onEdit={onEdit}
            />
          )}
        </Dialog>
      </AlertDialog>
    </PhotoProvider>
  );
};

export default MedalsList;
