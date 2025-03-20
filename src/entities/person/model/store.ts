import { create } from 'zustand';
import { MainFormValues } from './mainInfoSchema';
import { Medal } from './types';
import { ContactsSchemaValues } from './contactsSchema';

interface FormStoreType {
  server_medals: Medal[];
  mainInfo: Partial<MainFormValues>;
  medals: Medal[];
  history: string;
  photos: File[];
  contacts: Partial<ContactsSchemaValues>;
  setServerMedals: (data: Medal[]) => void;
  setMainInfo: (data: Partial<MainFormValues>) => void;
  setMedals: (v: Medal[]) => void;
  setHistory: (v: string) => void;
  setPhotos: (photos: File[]) => void;
  setContacts: (data: Partial<ContactsSchemaValues>) => void;
}

export const useFormStore = create<FormStoreType>((set) => ({
  mainInfo: {},
  contacts: {},
  server_medals: [],
  medals: [],
  photos: [],
  history: '',
  setMainInfo: (mainInfo) => {
    set((store) => ({ ...store, mainInfo }));
  },
  setContacts: (contacts) => {
    set((store) => ({ ...store, contacts }));
  },
  setHistory: (history) => {
    set((store) => ({ ...store, history }));
  },
  setMedals: (medals) => set((store) => ({ ...store, medals })),
  setPhotos: (photos) => set((store) => ({ ...store, photos })),
  setServerMedals: (server_medals) => {
    set((store) => ({
      ...store,
      server_medals,
    }));
  },
}));
