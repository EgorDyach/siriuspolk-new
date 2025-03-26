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
    <header className="py-4 bg-[#52575D] fixed top-0 left-0 right-0 z-50 m-0">
      <div className="flex container items-center justify-between">
        <Link onClick={() => setIsMenuOpened(!isMenuOpened)} href="/">
          <Logo className="w-[90px]" color="#fff" />
        </Link>
        <button onClick={() => setIsMenuOpened(!isMenuOpened)}>
          <Menu size={24} color="#fff" />
        </button>
        <div
          style={{ top: `${-Number(!isMenuOpened) * 10}0vh` }}
          className="h-screen bg-gray-500 w-screen absolute flex flex-col left-0 items-center gap-3 p-7 pt-20 transition-[top_0.35s_ease_in_out]"
        >
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            href="/"
            className="left-5 top-5 absolute"
          >
            <Logo className="h-[30px]" color="#fff" />
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            data-active={pathname?.includes(routes.home)}
            className={`text-white outline-offset-[-3px] font-lora text-[12px]/[1] py-[12px] px-[20px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53]`}
            href={routes.home}
          >
            Главная
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            data-active={pathname?.includes(routes.gallery)}
            className={`text-white outline-offset-[-3px] font-lora text-[12px]/[1] py-[12px] px-[20px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53]`}
            href={routes.gallery}
          >
            Галерея
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            data-active={pathname?.includes(routes.histories)}
            className={`text-white outline-offset-[-3px] font-lora text-[12px]/[1] py-[12px] px-[20px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53]`}
            href={routes.histories}
          >
            Истории
          </Link>
          <Link
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            href={routes.form}
            className="text-white outline-offset-[-3px] font-lora text-[12px]/[1] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] border-2 bg-transparent py-[12px] px-[65px] mt-9"
          >
            Принять участие
          </Link>
          <button
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            className="top-5 right-5 absolute "
          >
            <X color="white" />
          </button>
        </div>
      </div>
    </header>
  );
}
