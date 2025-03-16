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
    <section className="relative pt-[83px] bg-[#efeade]">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20 object-cover object-center max-h-full max-w-full w-full h-full"
        src={'/images/hero-bg.jpg'}
        width={1920}
        height={1080}
        alt="Фото советских воинов-освободителей"
      />
      <div className="py-32 z-10 relative flex max-w-[1410px] m-auto">
        <div className="text-left">
          <h2 className="text-[80px]/[102px] font-lora max-w-[700px] m-0 text-black mb-12 font-medium">
            “Никто не забыт, <br /> ничто не забыто”
          </h2>
          <p className="text-[28px]/[36px] font-normal max-w-[550px] m-0 mb-[140px] text-black text-left">
            Присоединяйся к онлайн движению «Сириус» – бессмертный полк» и
            поделись историей ветерана
          </p>
          <Link
            href={routes.form}
            className="pt-[24px] px-[65px] pb-[24px] text-white text-2xl font-lora bg-[#343434]"
          >
            Принять участие
          </Link>
        </div>
      </div>
      <HeroSlider persons={persons} />
    </section>
  );
}
