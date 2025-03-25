import React, { FC } from 'react';
import { Photo } from '@shared/model/types';
import Image from 'next/image';
import { PhotoView } from 'react-photo-view';
import { cx } from 'class-variance-authority';

interface GalleryPhotoProps {
  item: Photo;
}

const GalleryPhoto: FC<GalleryPhotoProps> = ({ item }) => {
  return (
    <PhotoView
      src={item.src}
      render={() => `${item.alt} (${item.date})`}
      overlay={`${item.alt} (${item.date})`}
    >
      <button
        tabIndex={1}
        className={cx(
          'group aspect-[1.36/1] overflow-hidden relative cursor-pointer outline-[6px] outline-offset-[-6px] outline-transparent transition-colors focus-visible:outline-white after:absolute after:left-0 after:right-0 after:bg-gradient-to-t after:from-black after:via-transparent after:to-transparent after:bottom-0 after:h-[400px] a after:duration-150 after:transform-[translateY(200px)] hover:after:transform-[translateY(0px)]',
        )}
      >
        <div>
          <Image
            className="w-full h-auto object-cover aspect-[1.36/1] transition-transform group-hover:scale-105"
            src={item.src}
            width={450}
            height={360}
            alt={item.alt || 'Фотография из галереи'}
          />
          <span className="text-left font-lora text-white text-[16px] absolute bottom-[20px] left-[20px] translate-y-[200px] transition-transform group-hover:translate-y-0 z-10">
            <p className="font-lora text-[16px] line-clamp-3 text-white">
              {item.date}
            </p>
            <p className="text-[12px] text-white">{item.alt}</p>
          </span>
        </div>
      </button>
    </PhotoView>
  );
};

export default GalleryPhoto;
