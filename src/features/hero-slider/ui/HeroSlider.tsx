'use client';
import './heroSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperRef } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { HeroSlide } from './HeroSlide';
import { ShortPerson } from '@shared/model/types';
import { useRef, useCallback } from 'react';
import { BREAKPOINTS, SPACE_BETWEEN, SPEED } from '../model/sliderConfig';
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
      className="!max-w-[850px] !absolute right-0 !top-[120px] !bottom-0 !mb-[80px] !z-10 hero__swiper"
      modules={[A11y]}
      ref={sliderRef}
      spaceBetween={SPACE_BETWEEN}
      breakpoints={BREAKPOINTS}
      speed={SPEED}
      navigation
      loop
    >
      {persons.map((person, i) => (
        <SwiperSlide
          className="transform-[scale(0.85) translateZ(0)] flex transition duration-1000 content-center"
          key={i}
        >
          <HeroSlide person={person} />
        </SwiperSlide>
      ))}
      <div className="flex absolute bottom-0 left-0 right-0 items-center justify-center gap-[88px] transform-[translateX(-5px)] z-10">
        <button
          onClick={handlePrev}
          className="relative border-none p-0 cursor-pointer w-[50px] h-[50px] outline-[3px] outline-offset-[-3px] outline-transparent transition-colors hover:fill-[#989898] bg-[#52575D]"
        >
          <ArrowLeft color="#fff" size={50} />
        </button>
        <button
          onClick={handleNext}
          className="relative border-none p-0 bg-[#52575D] cursor-pointer w-[50px] h-[50px] outline-[3px] outline-offset-[-3px] outline-transparent transition-colors hover:fill-[#989898]"
        >
          <ArrowRight color="#fff" size={50} />
        </button>
      </div>
    </Swiper>
  );
}
