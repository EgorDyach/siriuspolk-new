'use client';
import React, { FC, useCallback, useRef, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import { EMedals } from '@shared/api/medals';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';

const SLIDE_COUNT_ITEMS = 4;

interface PersonMedalsProps {
  medals: string[];
}

const PersonMedals: FC<PersonMedalsProps> = ({ medals }) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);

  return (
    <section className="py-[100px] bg-[#efeade] relative">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20 object-cover object-center max-h-full max-w-full w-full h-full"
        src={'/images/hero-bg.jpg'}
        width={1920}
        height={1080}
        alt="Фото советских воинов-освободителей"
      />
      <div className="container relative z-10">
        <h2 className="text-black font-lora text-[65px] mb-[32px]">Награды</h2>
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
            {medals.map((medal, i) => {
              const imageSrc = `/images/medals/${EMedals[medal as keyof typeof EMedals]}.png`;
              return (
                <SwiperSlide className="my-auto cursor-zoom-in" key={i}>
                  <PhotoView src={imageSrc}>
                    <Image
                      className="max-w-[130px] mx-auto my-auto"
                      src={imageSrc}
                      width={500}
                      height={700}
                      alt={medal}
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

export default PersonMedals;
