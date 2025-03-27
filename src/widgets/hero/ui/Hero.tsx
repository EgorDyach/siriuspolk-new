'use server';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@features/hero-slider/ui/HeroSlider';
import { routes } from '@shared/config/routes';
import { ShortPerson } from '@shared/model/types';
import { cx } from 'class-variance-authority';

interface HeroProps {
  persons: ShortPerson[];
}

export async function Hero({ persons }: HeroProps) {
  return (
    <section className="relative bg-[#efeade]">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20 object-cover object-center max-h-full max-w-full w-full h-full"
        src={'/images/hero-bg.jpg'}
        width={1920}
        height={1080}
        alt="Фото советских воинов-освободителей"
      />
      <div className="py-16 z-10 relative flex max-w-[1410px] m-auto px-4 justify-center">
        <div className="text-center">
          <h2
            className={cx(
              'text-[24px]/[1.2] font-lora max-w-[700px] m-0 text-black mb-12 font-medium',
              'sm:text-[48px]/[1.2]',
            )}
          >
            “Никто не забыт, <br /> ничто не забыто”
          </h2>
          <HeroSlider persons={persons} />
          <p
            className={cx(
              'text-[11px]/[18px] font-medium mt-7  text-center max-w-[550px] m-0 mb-[30px] text-black order-3',
              'sm:text-[16px]/[24px]',
            )}
          >
            Присоединяйся к онлайн движению «Сириус» – бессмертный полк» и
            поделись историей ветерана
          </p>
          <Link
            href={routes.form}
            className={cx(
              'py-[10px] px-[22px] text-white text-[12px] font-lora bg-[#343434]',
              'sm:text-[16px] sm:py-4 sm:px-7',
            )}
          >
            Принять участие
          </Link>
        </div>
      </div>
    </section>
  );
}
