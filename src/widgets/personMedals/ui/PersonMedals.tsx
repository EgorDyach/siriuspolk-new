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
import { Medal } from '@shared/model/types';

const SLIDE_COUNT_ITEMS = 1;

interface PersonMedalsProps {
  medals: Medal[];
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
    <section className="py-[40px] bg-[#efeade] relative xl:py-14">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20 object-cover object-center max-h-full max-w-full w-full h-full"
        src={'/hero-bg.jpg'}
        width={1920}
        height={1080}
        priority
        alt="Фото советских воинов-освободителей"
      />
      <div className="container relative z-10">
        <h2 className="text-black font-lora text-[32px] mb-[32px] xl:text-5xl">
          Награды
        </h2>
        <PhotoProvider
          maskOpacity={0.8}
          overlayRender={(props) => {
            console.log(props);
            return props.overlay;
          }}
        >
          <Swiper
            className="w-full mb-[40px]"
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
              640: {
                slidesPerView: 2,
              },
              1: {
                slidesPerView: 1,
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
            {medals.map((medal, i) => {
              return (
                <SwiperSlide className="my-auto cursor-zoom-in" key={i}>
                  <PhotoView
                    src={medal.photo_link}
                    overlay={
                      <div className="absolute bottom-0 text-white p-4 text-[14px] bg-[rgba(0,0,0,0.4)] left-0 right-0 text-center z-10">
                        {medal.name}
                      </div>
                    }
                  >
                    <Image
                      className="max-w-[90px] mx-auto my-auto xl:max-w-32"
                      src={medal.photo_link}
                      width={500}
                      height={700}
                      alt={medal.name}
                      priority
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
              maxIndex -
                (sliderRef.current?.swiper.slidesPerViewDynamic() || 0) +
                1
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

export default PersonMedals;
