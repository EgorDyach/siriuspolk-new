'use client';
import React, { FC, useCallback, useRef, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';

const SLIDE_COUNT_ITEMS = 4;

interface PersonImagesProps {
  images: string[];
}

const PersonImages: FC<PersonImagesProps> = ({ images }) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  if (!images.length) return;

  return (
    <section className="pb-[100px] pt-0 bg-[#efeade] relative">
      <div className="container relative z-10">
        <h2 className="text-black font-lora text-[65px] mb-[32px]">
          Фотографии
        </h2>
        <PhotoProvider maskOpacity={0.8}>
          <Swiper
            className="w-full mb-[40px]"
            modules={[A11y]}
            spaceBetween={50}
            speed={800}
            ref={sliderRef}
            slidesPerView={SLIDE_COUNT_ITEMS}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            onSwiper={(swiper) => {
              setMaxIndex(swiper.slides.length - SLIDE_COUNT_ITEMS);
            }}
          >
            {images.map((imageSrc, i) => {
              return (
                <SwiperSlide className="my-auto cursor-zoom-in" key={i}>
                  <PhotoView src={imageSrc}>
                    <Image
                      className="w-full aspect-square object-cover mx-auto my-auto"
                      src={imageSrc}
                      width={1000}
                      height={1000}
                      alt={''}
                    />
                  </PhotoView>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </PhotoProvider>
        <div className="gap-[70px] flex justify-center">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="relative p-0 bg-[#52575D] text-white cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:text-[#989898] disabled:opacity-50 disabled:cursor-default"
          >
            <ArrowLeft size={64} />
          </button>
          <button
            disabled={activeIndex >= maxIndex}
            onClick={handleNext}
            className="relative p-0 bg-[#52575D] text-white cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:text-[#989898] disabled:opacity-50 disabled:cursor-default"
          >
            <ArrowRight size={64} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonImages;
