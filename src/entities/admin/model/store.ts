import { create } from 'zustand';
import { Medal, Person, Photo } from '@shared/model/types';

export interface AdminStoreType {
  isLoading: boolean;
  medals: Medal[] | null;
  uncheckedPersons: Person[] | null;
  checkedPersons: Person[] | null;
  photos: Photo[] | null;
  setMedals: (data: Medal[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  setUncheckedPersons: (persons: Person[]) => void;
  setCheckedPersons: (persons: Person[]) => void;
  setPhotos: (photos: Photo[]) => void;
}

export const useAdminStore = create<AdminStoreType>((set) => ({
  medals: null,
  uncheckedPersons: null,
  checkedPersons: null,
  photos: null,
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setMedals: (medals: Medal[]) => set({ medals }),
  setUncheckedPersons: (uncheckedPerson: Person[]) =>
    set({ uncheckedPersons: uncheckedPerson }),
  setCheckedPersons: (checkedPerson: Person[]) =>
    set({ checkedPersons: checkedPerson }),
  setPhotos: (photos: Photo[]) => set({ photos }),
}));
