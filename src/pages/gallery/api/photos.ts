import { request } from '@shared/api';
import { Photo } from '@shared/model/types';

export const requestPhotos = async (): Promise<Photo[]> => {
  return await request.get('/gallery');
};
