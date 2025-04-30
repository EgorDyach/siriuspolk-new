import { request, serverRequest } from '@shared/api';
import { Photo } from '@shared/model/types';

export const requestPhotos = async (): Promise<Photo[]> =>
  await request.get('/gallery');

export const serverRequestPhotos = async (): Promise<Photo[]> =>
  await serverRequest.get('/gallery');
