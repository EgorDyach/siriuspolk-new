import GallerySlider from '@features/gallery-slider/ui/GallerySlider';
import React from 'react';

const Gallery = () => {
  return (
    <section className="py-[120px]">
      <div className="container">
        <h2 className="mb-[60px] text-[80px] font-medium font-lora">Галерея</h2>
        <GallerySlider />
      </div>
    </section>
  );
};

export default Gallery;
