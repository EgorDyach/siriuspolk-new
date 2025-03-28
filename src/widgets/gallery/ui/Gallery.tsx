import GallerySlider from '@features/gallery-slider/ui/GallerySlider';
import { cx } from 'class-variance-authority';
import React from 'react';

const Gallery = () => {
  return (
    <section className="py-[50px] xl:pt-[70px]">
      <div className="container">
        <h2
          className={cx(
            'mb-[30px] text-[32px] font-medium font-lora w-full text-center',
            'sm:text-[52px] xl:text-left xl:text-[62px]',
          )}
        >
          Галерея
        </h2>
        <GallerySlider />
      </div>
    </section>
  );
};

export default Gallery;
