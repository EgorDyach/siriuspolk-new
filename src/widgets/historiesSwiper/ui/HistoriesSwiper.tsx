'use client';
import {
  SPACE_BETWEEN,
  BREAKPOINTS,
  SPEED,
} from '@features/hero-slider/model/sliderConfig';
import HistoriesCard from '@features/histories-card/ui/HistoriesCard';
import { ShortPerson } from '@shared/model/types';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import React, { FC, useCallback, useRef } from 'react';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

interface HistoriesSwiperProps {
  histories: ShortPerson[];
}

const HistoriesSwiper: FC<HistoriesSwiperProps> = ({ histories }) => {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (
      sliderRef.current &&
      sliderRef.current.swiper.activeIndex <=
        sliderRef.current.swiper.slides.length - 1
    )
      sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current && sliderRef.current?.swiper.activeIndex >= 0)
      sliderRef.current?.swiper.slideNext();
  }, []);

  return (
    <div className="flex flex-col items-center justify-between">
      <Swiper
        className="w-full"
        modules={[A11y]}
        ref={sliderRef}
        spaceBetween={SPACE_BETWEEN}
        breakpoints={BREAKPOINTS}
        speed={SPEED}
        navigation
      >
        <div className="gap-[33px]">
          {histories.map((item, index) => (
            <SwiperSlide className="max-w-1/3" key={index}>
              <HistoriesCard item={item} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className=" gap-[70px] flex">
        <button
          onClick={handlePrev}
          disabled={
            !sliderRef.current || sliderRef.current?.swiper.activeIndex === 0
          }
          className="relative p-0 bg-[#52575D] cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:bg-[#989898] disabled:opacity-50 disabled:cursor-default"
        >
          <ArrowLeft color="#fff" size={64} />
        </button>
        <button
          disabled={
            !sliderRef.current ||
            sliderRef.current?.swiper.activeIndex ===
              sliderRef.current.swiper.slides.length - 1
          }
          onClick={handleNext}
          className="relative p-0 bg-[#52575D] cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:bg-[#989898] disabled:opacity-50 disabled:cursor-default"
        >
          <ArrowRight color="#fff" size={64} />
        </button>
      </div>
    </div>
  );
};

export default HistoriesSwiper;
