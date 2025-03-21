import { ContactsSchemaValues } from './contactsSchema';
import { HistoryValues } from './historySchema';
import { MainFormValues } from './mainInfoSchema';

export type Medal = {
  src: string;
  name: string;
  id: number;
};

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
