'use client';
import { routes } from '@shared/config/routes';
import Logo from '@shared/ui/Logo';
import Link from 'next/link';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <header className="py-2.5 bg-[#52575D] fixed top-0 left-0 right-0 z-50 m-0 sm:py-6 xl:py-0">
      <div className="flex container px-7.5 items-center justify-between md:px-[100px]">
        <Link onClick={() => setIsMenuOpened(!isMenuOpened)} href="/">
          <Logo
            className="w-[90px] sm:w-[140px] xl:w-[120px] 2xl:w-[150px]"
            color="#fff"
          />
        </Link>
        <button
          className="xl:hidden"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <Menu color="#fff" className="size-8 sm:size-10" />
        </button>
        <div
          style={{ top: `${-Number(!isMenuOpened) * 10}0vh` }}
          className="h-screen bg-gray-500 w-screen absolute flex flex-col left-0 items-center gap-3 p-7 pt-32 transition-[top_0.35s_ease_in_out] xl:h-[86.3px] xl:w-auto  xl:transform-none xl:!top-0 xl:p-0 xl:bg-transparent xl:flex-row xl:relative"
        >
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            href="/"
            className="left-7 top-4 absolute md:left-[100px] md:top-7 xl:hidden"
          >
            <Logo className="w-[90px] sm:w-[140px] " color="#fff" />
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            data-active={pathname === routes.home}
            className={`text-white outline-offset-[-3px] font-lora text-[16px]/[1] py-[16px] px-[28px] relative transition-all focus:outline-white focus:outline-3 2xl:text-2xl hover:text-[#989898] xl:h-[86.3px] xl:content-center xl:px-12 data-[active=true]:bg-[#494E53]`}
            href={routes.home}
          >
            Главная
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            data-active={pathname?.includes(routes.gallery)}
            className={`text-white outline-offset-[-3px] font-lora text-[16px]/[1] py-[16px] px-[28px] relative transition-all focus:outline-white focus:outline-3 2xl:text-2xl hover:text-[#989898] xl:h-[86.3px] xl:content-center xl:px-12 data-[active=true]:bg-[#494E53]`}
            href={routes.gallery}
          >
            Галерея
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            data-active={pathname?.includes(routes.histories)}
            className={`text-white outline-offset-[-3px] font-lora text-[16px]/[1] py-[16px] px-[28px] relative transition-all focus:outline-white focus:outline-3 2xl:text-2xl hover:text-[#989898] xl:h-[86.3px] xl:content-center xl:px-12 data-[active=true]:bg-[#494E53]`}
            href={routes.histories}
          >
            Истории
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            href={routes.form}
            className="text-white outline-offset-[-3px] font-lora text-[16px]/[1] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] 2xl:text-2xl border-2 bg-transparent py-[12px] px-[65px] mt-9 xl:m-0 xl:h-full xl:content-center xl:bg-[#343434] xl:border-0 xl:w-max"
          >
            Принять участие
          </Link>
          <button
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            className="top-4 right-7 absolute md:right-[100px] md:top-7 md:[&>*]:!size-10 xl:hidden"
          >
            <X color="white" size={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
