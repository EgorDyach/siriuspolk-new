'use server';

import { routes } from '@shared/config/routes';
import Logo from '@shared/ui/Logo';
import Link from 'next/link';

export async function Footer() {
  return (
    <footer className="relative py-[60px] bg-[#52575D]">
      <div className="container flex justify-between flex-col">
        <Logo color="#fff" width={120} className="mb-8" />
        <ul>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline"
              href={routes.home}
            >
              Главная
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline"
              href={routes.gallery}
            >
              Галерея
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline"
              href={routes.histories}
            >
              Истории
            </Link>
          </li>
          <li className="mt-2">
            <Link
              className="text-white font-lora text-[16px] underline"
              href={routes.form}
            >
              Принять участие
            </Link>
          </li>
        </ul>
        <div className="flex flex-col mt-6">
          <Link
            className="text-white font-lora text-[16px] underline"
            href={'mailto:info@полксириус.рф'}
          >
            info@полксириус.рф
          </Link>
          <p className="text-white font-lora text-[10px]">
            2025 г. – все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
