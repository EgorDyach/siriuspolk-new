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
import { cx } from 'class-variance-authority';

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
      className={cx(
        '!max-w-[290px] w-full  !z-10 hero__swiper',
        'sm:!max-w-[480px]',
        'md:!max-w-[250px] md:!pb-[60px]',
        'xl:!max-w-[600px] xl:!pb-[90px] xl:h-90 xl:!absolute xl:right-2/7 xl:translate-x-1/2',
      )}
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
      <div
        className={cx(
          'flex items-center gap-[40px]  z-10 max-w-[90%] text-center',
          'absolute top-1/2 -translate-1/2 w-full justify-between left-1/2',
          'md:relative md:top-0 md:left-0 md:translate-0 md:justify-center md:max-w-full',
          'xl:mt-7',
        )}
      >
        <button
          onClick={handlePrev}
          className="relative border-none p-0 cursor-pointer size[32px] outline-[3px] outline-offset-[-3px] outline-transparent transition-colors hover:fill-[#989898] bg-[#52575D]"
        >
          <ArrowLeft color="#fff" size={36} />
        </button>
        <button
          onClick={handleNext}
          className="relative border-none p-0 bg-[#52575D] cursor-pointer size[32px] outline-[3px] outline-offset-[-3px] outline-transparent transition-colors hover:fill-[#989898]"
        >
          <ArrowRight color="#fff" size={36} />
        </button>
      </div>
    </Swiper>
  );
}
