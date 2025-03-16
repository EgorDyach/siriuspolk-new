import { ApiResponse } from '@shared/api/types';
import { fakeRequestPhotos } from './fakePhotos';
import { Photo } from '@shared/model/types';

export const requestPhotos = async (): Promise<ApiResponse<Photo>> => {
  return await fakeRequestPhotos();
  // return await request.get('/gallery');
};
