'use client';
import { Photo } from '@shared/model/types';
import { X } from 'lucide-react';
import Image from 'next/image';
import { ButtonHTMLAttributes, FC, useState } from 'react';
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
import { Button } from '@shared/ui/Button';
import { getServerLink } from '@shared/model/getServerLink';
import React from 'react';

interface PhotosListProps {
  photos: Photo[];
  onDelete?: (item: Photo, index: number) => void;
  submitOnDelete?: boolean;
}

const DeletePhoto: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
  <button
    {...props}
    type="button"
    className="absolute top-2 right-2 cursor-pointer bg-[#52545d] size-8 p-2 rounded-full flex items-center justify-center"
  >
    <X color="white" />
  </button>
);

const PhotosList: FC<PhotosListProps> = ({
  photos,
  onDelete,
  submitOnDelete,
}) => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);
  return (
    <PhotoProvider>
      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {(photos || []).map((photo, index) => (
          <li
            key={`${photo.id}_${index}`}
            className="gap-6 flex items-center flex-col justify-between relative"
          >
            <PhotoView src={getServerLink(photo.link)}>
              <Image
                src={getServerLink(photo.link)}
                alt={photo.description}
                width={200}
                height={200}
                className="h-32 md:h-44 xl:h-52 text-center object-contain"
              />
            </PhotoView>
            <p className="text-[10px] mb-6 font-medium text-center">
              {photo.description}
            </p>
            {onDelete && (
              <AlertDialog
                open={openIndex === index}
                onOpenChange={(value) => setOpenIndex(value ? index : null)}
              >
                {!submitOnDelete && (
                  <DeletePhoto onClick={() => onDelete(photo, index)} />
                )}
                {submitOnDelete && (
                  <DeletePhoto onClick={() => setOpenIndex(index)} />
                )}
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Вы уверены, что хотите удалить фото «{photo.description}»?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <Image
                    src={getServerLink(photo.link)}
                    alt={photo.description}
                    width={200}
                    height={200}
                    className="h-32 md:h-44 xl:h-52 text-center object-contain m-auto"
                  />
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
                        onClick={() => onDelete(photo, index)}
                      >
                        Удалить
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </li>
        ))}
      </ul>
    </PhotoProvider>
  );
};

export default PhotosList;
