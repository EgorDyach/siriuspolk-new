import { Photo } from '@shared/model/types';

export const sortPhotos = (photos: Photo[]) =>
  photos.sort(
    (a: Photo, b: Photo) =>
      new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
