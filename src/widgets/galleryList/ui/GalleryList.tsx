'use client';
import GalleryPhoto from '@features/gallery-photo/ui/GalleryPhoto';
import { Photo } from '@shared/model/types';
import React, { FC } from 'react';
import { PhotoProvider } from 'react-photo-view';

interface GalleryListProps {
  photos: Photo[];
}

const GalleryList: FC<GalleryListProps> = ({ photos }) => {
  return (
    <div className="grid grid-cols-1 gap-[35px] sm:grid-cols-2 xl:grid-cols-3">
      <PhotoProvider>
        {photos.map((item, index) => (
          <GalleryPhoto key={index} item={item} />
        ))}
      </PhotoProvider>
    </div>
  );
};

export default GalleryList;
