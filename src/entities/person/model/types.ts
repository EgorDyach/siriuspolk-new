import { Medal } from '@shared/model/types';
import { ContactsSchemaValues } from './contactsSchema';
import { HistoryValues } from './historySchema';
import { MainFormValues } from './mainInfoSchema';

export interface PhotosFormContext {
  photos: File[];
}

export interface FormDataType {
  mainInfo: Partial<MainFormValues>;
  medals: Medal[];
  history: HistoryValues;
  photos: File[];
  contacts: Partial<ContactsSchemaValues>;
}

export type MedalOption = { type: 'medal'; value: number; text: string };
