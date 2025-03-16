'use client';
import { routes } from '@shared/config/routes';
import ArrowLeft from '@shared/ui/icons/ArrowLeft';
import ArrowRight from '@shared/ui/icons/ArrowRight';
import Link from 'next/link';
import clsx from 'clsx';

interface GalleryControlsProps {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}

const PAGINATION_LENGTH = 3;

export function GalleryControls({
  activeIndex,
  setActiveIndex,
}: GalleryControlsProps) {
  const prevSlide = () => setActiveIndex(Math.max(activeIndex - 1, 0));
  const nextSlide = () =>
    setActiveIndex(Math.min(activeIndex + 1, PAGINATION_LENGTH - 1));

  return (
    <div className="flex justify-between items-center mt-10 relative">
      <div className="flex items-center">
        {Array.from({ length: PAGINATION_LENGTH }).map((_, index) => (
          <button
            key={index}
            className="border-none bg-transparent px-3 cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <p
              className={clsx('font-lora text-4xl/[64px] transition-all', {
                'text-6xl text-black': activeIndex === index,
                'text-gray-500': activeIndex !== index,
              })}
            >
              {index + 1}
            </p>
          </button>
        ))}
      </div>

      <div className="absolute left-1/2 top-1 transform -translate-x-1/2 flex gap-16">
        <button
          onClick={prevSlide}
          disabled={activeIndex === 0}
          className="disabled:opacity-50 transition-opacity duration-200 text-white hover:not-disabled:text-[#999] cursor-pointer"
        >
          <ArrowLeft size={50} className="transition-colors" />
        </button>
        <button
          onClick={nextSlide}
          disabled={activeIndex === PAGINATION_LENGTH - 1}
          className="disabled:opacity-50 transition-opacity duration-200 text-white hover:not-disabled:text-[#999] cursor-pointer"
        >
          <ArrowRight size={50} className="transition-colors" />
        </button>
      </div>

      <Link
        href={routes.gallery}
        className="text-3xl underline font-lora text-black"
      >
        Все материалы
      </Link>
    </div>
  );
}
