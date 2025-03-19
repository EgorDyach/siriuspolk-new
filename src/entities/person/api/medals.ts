import { ApiResponse } from '@shared/api/types';
import { fakeRequestMedals } from './fakeMedals';
import { Medal } from '../model/types';

export const requestMedals = async (): Promise<ApiResponse<Medal>> => {
  return await fakeRequestMedals();
  // return await request.get('/medals')
};
