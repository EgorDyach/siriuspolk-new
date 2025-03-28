import Image from 'next/image';
import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { links } from '../api/photos';
import { slideGridStyles } from '../model/slideGridStyles';
import { useDragSlider } from '../model/useDragSlider';
import { GalleryControlsFull } from './GalleryControlsFull';

const GalleryControlled = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? prev : prev - 1));
  const handleNext = () => setIndex((prev) => (prev < 2 ? prev + 1 : prev));
  const handleIndexChange = (index: number) => setIndex(Math.floor(index / 5));

  const handleMouseDown = useDragSlider(handlePrev, handleNext);
  return (
    <PhotoProvider onIndexChange={handleIndexChange} maskOpacity={0.8}>
      <div className="hidden overflow-hidden 2xl:block">
        <div
          className={`grid grid-cols-12 grid-rows-2 gap-[15px] w-max transition duration-700`}
          style={{ transform: `translateX(calc(-${index}00% / 3))` }}
          onMouseDown={handleMouseDown}
        >
          {links.map((link, index) => {
            return (
              <PhotoView key={index} src={link}>
                <Image
                  width={500}
                  height={600}
                  className={`max-w-[341.25px] max-h-[341.25px] grayscale hover:grayscale-0 transition duration-300 cursor-pointer w-[calc((100vw-260px-30px)/4)] h-[calc((100vw-260px-30px)/4)] object-cover aspect-square nth-[5n-4]:h-[calc((100vw-260px)/2)] nth-[5n-4]:w-[calc((100vw-260px)/2)] nth-[5n-4]:max-w-[697.5px] nth-[5n-4]:max-h-[697.5px]`}
                  src={link}
                  alt="Фото из галерии 9 мая"
                  draggable={false}
                  style={slideGridStyles(index)}
                />
              </PhotoView>
            );
          })}
        </div>
        <GalleryControlsFull
          activeIndex={index}
          setActiveIndex={(n) => setIndex(n)}
        />
      </div>
    </PhotoProvider>
  );
};

export default GalleryControlled;
