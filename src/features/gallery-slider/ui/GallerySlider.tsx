'use client';

import React, { useRef } from 'react';
import { links } from '../api/photos';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import { slideGridStyles } from '../model/slideGridStyles';
import { GalleryControls } from './GalleryControls';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

const GallerySlider = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <PhotoProvider maskOpacity={0.8}>
      <Swiper
        ref={swiperRef}
        className="!max-w-[290px] w-full  !z-10"
        spaceBetween={50}
        breakpoints={{
          1000: {
            slidesPerView: 1,
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
      <div className="hidden overflow-hidden">
        <div
          className={`grid grid-cols-16 grid-rows-1 gap-[15px] transition duration-700 max-w-max w-[1500%]`}
          // style={{ transform: `translateX(calc(-${index}00% / ))` }}
        >
          {links.map((link, index) => {
            return (
              <PhotoView key={index} src={link}>
                <Image
                  width={500}
                  height={600}
                  className={`max-w-[341.25px] max-h-[341.25px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer size-full object-cover aspect-square`}
                  src={link}
                  alt="Фото из галерии 9 мая"
                  draggable={false}
                  style={slideGridStyles(index)}
                />
              </PhotoView>
            );
          })}
        </div>
      </div>
    </PhotoProvider>
  );
};

export default GallerySlider;
