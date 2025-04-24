import { request } from '@shared/api';
import { redirect } from 'next/navigation';
import { Person } from '@shared/model/types';

export const requestCheckedPersons = async (): Promise<Person[]> => {
  try {
    const persons = await request.get('/person?check=true&status=false');
    return persons;
  } catch (e) {
    console.log(e);
    redirect('/login');
  }
};
