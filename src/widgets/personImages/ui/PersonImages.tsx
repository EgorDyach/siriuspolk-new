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
import { PersonPhoto } from '@shared/model/types';
import { getServerLink } from '@shared/model/getServerLink';

const SLIDE_COUNT_ITEMS = 1;

interface PersonImagesProps {
  images: PersonPhoto[];
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
        <h2 className="text-black font-lora text-[32px] mb-[32px] md:text-5xl">
          Фотографии
        </h2>
        <PhotoProvider maskOpacity={0.8}>
          <Swiper
            className="w-[80%] mb-[40px] md:w-full"
            modules={[A11y]}
            spaceBetween={50}
            speed={800}
            ref={sliderRef}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              896: {
                slidesPerView: 3,
              },
              1: {
                slidesPerView: 2,
              },
            }}
            slidesPerView={SLIDE_COUNT_ITEMS}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex);
            }}
            onSwiper={(swiper) => {
              setMaxIndex(swiper.slides.length - SLIDE_COUNT_ITEMS);
            }}
          >
            {images.map((image, i) => {
              return (
                <SwiperSlide className="my-auto cursor-zoom-in" key={i}>
                  <PhotoView src={getServerLink(image.link)}>
                    <Image
                      className="w-full aspect-square object-cover mx-auto my-auto"
                      src={getServerLink(image.link)}
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
        <div className="gap-[40px] flex justify-center">
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="relative p-0 bg-[#52575D] text-white cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:text-[#989898] disabled:opacity-50 disabled:cursor-default"
          >
            <ArrowLeft size={32} />
          </button>
          <button
            disabled={
              activeIndex >=
              maxIndex - (sliderRef.current?.swiper.slidesPerViewDynamic() || 0)
            }
            onClick={handleNext}
            className="relative p-0 bg-[#52575D] text-white cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:text-[#989898] disabled:opacity-50 disabled:cursor-default"
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonImages;
