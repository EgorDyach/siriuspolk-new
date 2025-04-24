import React, { FC } from 'react';
import { Photo } from '@shared/model/types';
import Image from 'next/image';
import { PhotoView } from 'react-photo-view';
import { cx } from 'class-variance-authority';
import dayjs from 'dayjs';
import { getServerLink } from '@shared/model/getServerLink';

interface GalleryPhotoProps {
  item: Photo;
}

const GalleryPhoto: FC<GalleryPhotoProps> = ({ item }) => {
  return (
    <PhotoView
      src={getServerLink(item.link)}
      render={() => `${item.description} (${item.date})`}
      overlay={`${item.description} (${dayjs(new Date(item.date)).format('D MMM YYYY г.')})`}
    >
      <div
        tabIndex={1}
        className={cx(
          'group aspect-[1.36/1] overflow-hidden relative cursor-pointer outline-[6px] outline-offset-[-6px] outline-transparent transition-colors focus-visible:outline-white after:absolute after:left-0 after:right-0 after:bg-gradient-to-t after:from-black after:via-transparent after:to-transparent after:bottom-0 after:h-[400px] a after:duration-150 after:transform-[translateY(200px)] hover:after:transform-[translateY(0px)]',
        )}
      >
        <div>
          <Image
            className="w-full h-auto object-cover aspect-[1.36/1] transition-transform group-hover:scale-105"
            src={getServerLink(item.link)}
            width={450}
            height={360}
            alt={item.description || 'Фотография из галереи'}
          />
          <span className="text-left font-lora text-white text-[16px] absolute bottom-[20px] left-[20px] translate-y-[200px] transition-transform group-hover:translate-y-0 z-10">
            <p className="font-lora text-[16px] line-clamp-3 text-white">
              {dayjs(new Date(item.date)).format('D MMM YYYY г.')}
            </p>
            <p className="text-[12px] text-white">{item.description}</p>
          </span>
        </div>
      </div>
    </PhotoView>
  );
};

export default GalleryPhoto;
