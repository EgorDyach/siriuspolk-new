'use client';
import { SPACE_BETWEEN, BREAKPOINTS, SPEED } from '../model/sliderConfig';
import HistoriesCard from '@features/histories-card/ui/HistoriesCard';
import { Person } from '@shared/model/types';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import React, { FC, useEffect, useRef, useState } from 'react';
import { A11y } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
interface HistoriesSwiperProps {
  histories: Person[];
}

const HistoriesSwiper: FC<HistoriesSwiperProps> = ({ histories }) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [galleryState, setGalleryState] = useState({
    activeIndex: 0,
    slideCount: 0,
  });

  useEffect(() => {
    if (
      !sliderRef.current ||
      !sliderRef.current.swiper ||
      !sliderRef.current.swiper.slides
    )
      return;
    const swiper = sliderRef.current.swiper;
    const updateState = () =>
      setGalleryState({
        activeIndex: swiper.activeIndex,
        slideCount: swiper.slides.length - swiper.slidesPerViewDynamic() + 1,
      });

    updateState();
    swiper.on('slideChange', updateState);
    return () => {
      swiper.off('slideChange', updateState);
    };
  }, [sliderRef.current?.swiper]);

  const handlePrev = () => sliderRef.current?.swiper.slidePrev();
  const handleNext = () => sliderRef.current?.swiper.slideNext();

  return (
    <div className="flex flex-col items-center justify-between">
      <Swiper
        className="w-full"
        modules={[A11y]}
        ref={sliderRef}
        spaceBetween={SPACE_BETWEEN}
        breakpoints={BREAKPOINTS}
        speed={SPEED}
      >
        {histories.map((item, index) => (
          <SwiperSlide
            className="!h-auto [&>*]:!h-full [&>*]:!w-full"
            key={index}
          >
            <HistoriesCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" gap-[40px] flex mt-4">
        <button
          onClick={handlePrev}
          disabled={galleryState.activeIndex === 0}
          className="relative p-0 bg-[#52575D] cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:bg-[#989898] disabled:opacity-50 disabled:cursor-default"
        >
          <ArrowLeft color="#fff" size={32} />
        </button>
        <button
          disabled={galleryState.activeIndex === galleryState.slideCount - 1}
          onClick={handleNext}
          className="relative p-0 bg-[#52575D] cursor-pointer border-0 outline-transparent transition-colors hover:not-disabled:bg-[#989898] disabled:opacity-50 disabled:cursor-default"
        >
          <ArrowRight color="#fff" size={32} />
        </button>
      </div>
    </div>
  );
};

export default HistoriesSwiper;
