'use client';
import React, { useEffect, useState } from 'react';
import { Photo } from '@shared/model/types';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { requestPhotos } from '@pages/gallery/api/photos';
import { sortPhotos } from '../model/helpers';
import {
  requestCreatePhoto,
  requestDeletePhoto,
  requestUploadPhoto,
} from '@entities/photo/api/photos';
import AddPhoto from './AddPhoto';
import { PhotoSchemaType } from '@entities/photo/model/photoSchema';
import PhotosList from '@entities/photo/ui/PhotosList';

const GalleryControls = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const photos = await requestPhotos();
        setPhotos(photos);
      } catch {
        showErrorNotification('Не удалось получить все фото.');
      }
    })();
  }, []);

  const handleDelete = async (item: Photo) => {
    try {
      await requestDeletePhoto(item.id);
      setPhotos((prev) => sortPhotos(prev.filter((el) => el.id !== item.id)));
    } catch {
      showErrorNotification('Не удалось удалить фото.');
    }
  };

  const handleAdd = async (item: PhotoSchemaType) => {
    try {
      const file = item.file?.item(0);
      const date = item.date;
      if (!file) throw new Error('Не удалось загрузить файл.');
      if (!date) throw new Error('Не удалось загрузить дату.');
      const { id } = await requestCreatePhoto(item);
      const { link } = await requestUploadPhoto(id, file);
      setPhotos((prev) =>
        sortPhotos([
          ...prev,
          {
            description: item.description,
            date: date.toISOString(),
            id,
            link,
          },
        ]),
      );
    } catch {
      showErrorNotification('Не удалось создать фото.');
    }
  };

  return (
    <div>
      <h2 className="text font-semibold md:text-3xl mb-8 flex items-center">
        Галерея <AddPhoto onSubmit={handleAdd} />
      </h2>
      <PhotosList photos={photos} onDelete={handleDelete} submitOnDelete />
    </div>
  );
};

export default GalleryControls;
