'use client';
import './heroSlider.css';
import 'swiper/css';

import { Swiper, SwiperRef } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { HeroSlide } from './HeroSlide';
import { ShortPerson } from '@shared/model/types';
import { useRef, useCallback } from 'react';
import { BREAKPOINTS, SPEED } from '../model/sliderConfig';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';
import ArrowRight from '@shared/ui/icons/ArrowRight';

interface HeroSliderProps {
  persons: ShortPerson[];
}

export default function HeroSlider({ persons }: HeroSliderProps) {
  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Swiper
      className="!max-w-[290px] w-full  !z-10 hero__swiper"
      modules={[A11y]}
      ref={sliderRef}
      breakpoints={BREAKPOINTS}
      speed={SPEED}
      loop
    >
      {persons.map((person, i) => (
        <SwiperSlide
          className="flex items-center justify-center transition duration-1000 content-center"
          key={i}
        >
          <HeroSlide person={person} />
        </SwiperSlide>
      ))}
      <div className="flex items-center justify-center gap-[40px] mt-4 z-10">
        <button
          onClick={handlePrev}
          className="relative border-none p-0 cursor-pointer size[32px] outline-[3px] outline-offset-[-3px] outline-transparent transition-colors hover:fill-[#989898] bg-[#52575D]"
        >
          <ArrowLeft color="#fff" size={32} />
        </button>
        <button
          onClick={handleNext}
          className="relative border-none p-0 bg-[#52575D] cursor-pointer size[32px] outline-[3px] outline-offset-[-3px] outline-transparent transition-colors hover:fill-[#989898]"
        >
          <ArrowRight color="#fff" size={32} />
        </button>
      </div>
    </Swiper>
  );
}
