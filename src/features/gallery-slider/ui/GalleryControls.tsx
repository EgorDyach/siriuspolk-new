'use client';
import { routes } from '@shared/config/routes';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSwiper } from 'swiper/react';

export function GalleryControls() {
  const swiper = useSwiper();
  const [galleryState, setGalleryState] = useState({
    activeIndex: 0,
    slideCount: 0,
  });

  useEffect(() => {
    if (!swiper || !swiper.slides) return;
    const updateState = () => {
      setGalleryState({
        activeIndex: swiper.activeIndex,
        slideCount: swiper.slides.length - swiper.slidesPerViewDynamic(),
      });
    };
    updateState();
    swiper.on('slideChange', updateState);
    return () => {
      swiper.off('slideChange', updateState);
    };
  }, [swiper]);

  if (!swiper) return null;

  const buttonClasses =
    'disabled:opacity-50 transition-opacity duration-200 text-white hover:not-disabled:text-[#999] cursor-pointer bg-[#52575D]';

  return (
    <div className="flex flex-col justify-between items-center mt-6 relative">
      <div className="transform flex gap-10 mb-4">
        <button
          onClick={() => swiper.slidePrev()}
          disabled={galleryState.activeIndex === 0}
          className={buttonClasses}
        >
          <ArrowLeft size={32} className="transition-colors" />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          disabled={galleryState.activeIndex === galleryState.slideCount}
          className={buttonClasses}
        >
          <ArrowRight size={32} className="transition-colors" />
        </button>
      </div>
      <Link
        href={routes.gallery}
        className="text underline font-lora text-black"
      >
        Все материалы
      </Link>
    </div>
  );
}
