import { request } from '@shared/api';
import { Photo } from '@shared/model/types';
import { PhotoSchemaType } from '../model/photoSchema';

export const requestPhotos = async (): Promise<Photo[]> =>
  await request.get('/gallery');

export const requestCreatePhoto = async ({
  date,
  description,
}: PhotoSchemaType): Promise<{ id: string }> =>
  await request.post('/gallery', { date: date?.toISOString(), description });

export const requestUploadPhoto = async (
  id: string | number,
  file: File,
): Promise<{ link: string }> => {
  const formdata = new FormData();
  formdata.append('file', file);
  return await request.post(`/gallery/file/upload/${id}`, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const requestDeletePhoto = async (id: string | number) => {
  await request.delete(`/gallery/${id}`);
};
