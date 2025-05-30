'use server';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@features/hero-slider/ui/HeroSlider';
import { routes } from '@shared/config/routes';
import { Person } from '@shared/model/types';
import { cx } from 'class-variance-authority';

interface HeroProps {
  persons: Person[];
}

export async function Hero({ persons }: HeroProps) {
  return (
    <section className="relative bg-[#efeade]">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 z-0 opacity-20 object-cover object-center max-h-full max-w-full w-full h-full"
        src={'/hero-bg.jpg'}
        width={1920}
        height={1080}
        priority={true}
        alt="Фото советских воинов-освободителей"
      />
      <div className="py-12 z-10 relative flex max-w-[1410px] m-auto px-4 justify-center md:pt-32 xl:px-0 2xl:max-w-[1670px]">
        <div className="text-center md:flex md:justify-between md:w-full container">
          <div className="hidden md:flex flex-col xl:min-h-90">
            <h2
              className={cx(
                'text-[48px]/[1.2] font-lora max-w-[800px] m-0 text-black mb-10 font-medium text-left 2xl:text-6xl/[1.4] 2xl:mb-6 3xl:text-7xl/[1.4]',
              )}
            >
              “Никто не забыт, <br /> ничто не забыто”
            </h2>
            <p
              className={cx(
                'text-[23px]/[38px] flex-1/3 font-medium max-w-[450px] text-black text-left mb-14 2xl:text-2xl/[1.5]',
              )}
            >
              Присоединяйся к онлайн движению «Сириус» – бессмертный полк» и
              поделись историей ветерана
            </p>
            <Link
              href={routes.form}
              className={cx(
                'py-[22px] px-[50px] text-white text-[24px] w-fit font-lora bg-[#343434]',
              )}
            >
              Принять участие
            </Link>
          </div>
          <h2
            className={cx(
              'text-[28px]/[1.2] font-lora max-w-[700px] m-0 text-black mb-6 font-medium',
              'sm:text-[48px]/[1.2]',
              'md:hidden',
            )}
          >
            “Никто не забыт, <br /> ничто не забыто”
          </h2>
          {!!persons.length && <HeroSlider persons={persons} />}
          <p
            className={cx(
              'text-[13px]/[22px] font-medium mt-7  text-center max-w-[550px] m-0 mb-[30px] text-black order-3',
              'sm:text-[20px]/[32px] sm:font-normal md:hidden mx-auto',
            )}
          >
            Присоединяйся к онлайн движению «Сириус» – бессмертный полк» и
            поделись историей ветерана
          </p>
          <Link
            href={routes.form}
            className={cx(
              'py-[15px] px-[32px] text-white text-[18px] font-lora bg-[#343434]',
              'sm:text-[16px] sm:py-4 sm:px-7 md:hidden',
            )}
          >
            Принять участие
          </Link>
        </div>
      </div>
    </section>
  );
}
