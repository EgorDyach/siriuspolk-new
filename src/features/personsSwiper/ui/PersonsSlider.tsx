'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperRef } from 'swiper/react';
import { A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { ShortPerson } from '@shared/model/types';
import { useRef, useCallback, useState } from 'react';
import { BREAKPOINTS, SPACE_BETWEEN, SPEED } from '../model/sliderConfig';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import Image from 'next/image';
import { cx } from 'class-variance-authority';
import CurrentPerson from './CurrentPerson';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

interface PersonsSliderProps {
  persons: ShortPerson[];
}

export default function PersonsSlider({ persons }: PersonsSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<SwiperRef | null>(null);
  const currentPersonRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.swiper.animating) return;
    sliderRef.current.swiper.slidePrev();
    setActiveIndex((prev) => (persons.length + prev - 1) % persons.length);
  }, [persons.length]);

  const handleNext = useCallback(() => {
    if (!sliderRef.current || sliderRef.current.swiper.animating) return;
    sliderRef.current.swiper.slideNext();
    setActiveIndex((prev) => (persons.length + prev + 1) % persons.length);
  }, [persons.length]);

  const handleClick = useCallback(
    (index: number) => {
      setActiveIndex((persons.length + index) % persons.length);
      sliderRef.current?.swiper.slideTo(
        (persons.length + index) % persons.length,
      );
    },
    [persons.length],
  );

  return (
    <div className="flex flex-col">
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeIndex}
          nodeRef={currentPersonRef}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <CurrentPerson
            current={persons[activeIndex]}
            ref={currentPersonRef}
          />
        </CSSTransition>
      </SwitchTransition>
      <div className="flex items-center justify-between">
        <div className="mx-auto gap-[50px] flex">
          <button
            onClick={handlePrev}
            className="relative p-0 bg-transparent cursor-pointer border-[2px] border-white outline-transparent transition-colors hover:bg-[#989898] sm:size-16 sm:flex sm:items-center sm:justify-center sm:[&>div]:!size-12"
          >
            <ArrowLeft color="#fff" size={32} />
          </button>
          <button
            onClick={handleNext}
            className="relative p-0 bg-transparent cursor-pointer border-[2px] border-white outline-transparent transition-colors hover:bg-[#989898] sm:size-16 sm:flex sm:items-center sm:justify-center sm:[&>div]:!size-12 "
          >
            <ArrowRight color="#fff" size={32} />
          </button>
        </div>
        <Swiper
          className="max-w-1/2 !m-0 !w-[1px] !h-[1px] !absolute !-left-[1000px] md:!w-full md:!h-full md:!relative md:!left-0 xl:max-w-3/5"
          modules={[A11y]}
          ref={sliderRef}
          spaceBetween={SPACE_BETWEEN}
          breakpoints={BREAKPOINTS}
          speed={SPEED}
          loop
        >
          <div className="items-center justify-center gap-[88px] transform-[translateX(-5px)] z-10 hidden">
            {persons.map(
              ({ main_photo, date_birth, date_death, SNL: name }, index) => (
                <SwiperSlide
                  className="transform-[scale(0.85) translateZ(0)] flex transition duration-1000 content-center"
                  key={index}
                >
                  <Image
                    className={cx(
                      'cursor-pointer my-auto mx-0 w-[201px] h-[240px] text-center items-end justify-end transition flex duration-1000 align-middle relative object-cover xl:w-[260px] xl:h-[280px]',
                      {
                        'outline-[5px] outline-offset-[-5px] outline-white':
                          index === activeIndex,
                      },
                    )}
                    alt={`${name} (${date_birth} - ${date_death}) – портрет`}
                    width={462}
                    height={600}
                    src={main_photo || '/UnknownSoldier.jpg'}
                    onClick={() => handleClick(index)}
                  />
                </SwiperSlide>
              ),
            )}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
