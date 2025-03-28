'use client';

import React, { useRef } from 'react';
import { links } from '../api/photos';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import { slideGridStyles } from '../model/slideGridStyles';
import { GalleryControls } from './GalleryControls';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { cx } from 'class-variance-authority';
import GalleryControlled from './GalleryControlled';

const GallerySlider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <>
      <PhotoProvider maskOpacity={0.8}>
        <Swiper
          ref={swiperRef}
          className={cx(
            '!max-w-[220px] w-full  !z-10',
            'sm:!max-w-[500px] md:!max-w-[750px] xl:!max-w-[1000px] 2xl:!hidden',
          )}
          spaceBetween={50}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          speed={800}
        >
          {links.map((link, index) => {
            return (
              <SwiperSlide key={index}>
                <PhotoView src={link}>
                  <Image
                    width={500}
                    height={600}
                    className={`max-w-[341.25px] max-h-[341.25px] transition duration-300 cursor-pointer size-full object-cover aspect-square`}
                    src={link}
                    alt="Фото из галерии 9 мая"
                    draggable={false}
                    style={slideGridStyles(index)}
                  />
                </PhotoView>
              </SwiperSlide>
            );
          })}
          <GalleryControls />
        </Swiper>
      </PhotoProvider>
      <GalleryControlled />
    </>
  );
};

export default GallerySlider;
