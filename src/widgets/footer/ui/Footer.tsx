'use server';

import { routes } from '@shared/config/routes';
import Logo from '@shared/ui/Logo';
import Link from 'next/link';

export async function Footer() {
  return (
    <footer className="relative py-[60px] bg-[#52575D]">
      <div className="container flex justify-between flex-col sm:flex-row sm:w-full sm:items-start">
        <Logo color="#fff" width={120} className="mb-8 md:w-40" />
        <ul>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline md:text-[22px]"
              href={routes.home}
            >
              Главная
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline md:text-[22px]"
              href={routes.gallery}
            >
              Галерея
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline md:text-[22px]"
              href={routes.histories}
            >
              Истории
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline md:text-[22px]"
              href={routes.form}
            >
              Принять участие
            </Link>
          </li>
        </ul>
        <div className="flex flex-col mt-6 sm:justify-between sm:h-full sm:m-0">
          <Link
            className="text-white font-lora text-[16px] underline md:text-[22px]"
            href={'mailto:info@полксириус.рф'}
          >
            info@полксириус.рф
          </Link>
          <p className="text-white font-lora text-[10px] md:text-[16px]">
            {new Date().getFullYear()} г. – все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
