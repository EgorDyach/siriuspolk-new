'use server';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@features/hero-slider/ui/HeroSlider';
import { routes } from '@shared/config/routes';
import { ShortPerson } from '@shared/model/types';

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
      <div className="py-10 z-10 relative flex max-w-[1410px] m-auto px-4">
        <div className="text-center">
          <h2 className="text-[24px]/[1.2] font-lora max-w-[700px] m-0 text-black mb-12 font-medium">
            “Никто не забыт, <br /> ничто не забыто”
          </h2>
          <HeroSlider persons={persons} />
          <p className="text-[11px]/[18px] font-medium mt-7  text-center max-w-[550px] m-0 mb-[30px] text-black order-3">
            Присоединяйся к онлайн движению «Сириус» – бессмертный полк» и
            поделись историей ветерана
          </p>
          <Link
            href={routes.form}
            className="py-[10px] px-[22px] text-white text-[12px] font-lora bg-[#343434]"
          >
            Принять участие
          </Link>
        </div>
      </div>
    </section>
  );
}
