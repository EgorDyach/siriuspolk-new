"use server";
import { routes } from "@shared/config/routes";
import Logo from "@shared/ui/Logo";
import Link from "next/link";
import { getPathname } from "../model/getPathname";

export async function Header() {
  const pathname = await getPathname();

  return (
    <header className="bg-[#52575D] fixed top-0 left-0 right-0 z-50 m-0">
      <div className="flex container items-center justify-between">
        <Link href="/">
          <Logo height={60} color="#fff" />
        </Link>
        <div>
          <ul className="list-none flex m-0 absolute left-[50%] transform-[translateX(-50%)] h-full">
            <Link
              data-active={pathname.includes(routes.home)}
              className={`text-white outline-offset-[-3px] font-lora text-2xl/[1] py-[35px] px-[38px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] `}
              href={routes.home}
            >
              Главная
            </Link>
            <Link
              data-active={pathname.includes(routes.gallery)}
              className={`text-white outline-offset-[-3px] font-lora text-2xl/[1] py-[35px] px-[38px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] `}
              href={routes.gallery}
            >
              Галерея
            </Link>
            <Link
              data-active={pathname.includes(routes.histories)}
              className={`text-white outline-offset-[-3px] font-lora text-2xl/[1] py-[35px] px-[38px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] `}
              href={routes.histories}
            >
              Истории
            </Link>
            <Link
              data-active={pathname.includes(routes.admin)}
              className={`text-white outline-offset-[-3px] font-lora text-2xl/[1] py-[35px] px-[38px] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] `}
              href={routes.admin}
            >
              Панель
            </Link>
          </ul>
          <Link
            href={routes.form}
            className="text-white outline-offset-[-3px] font-lora text-2xl/[1] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] bg-[#343434] py-[36px] px-[65px] block"
          >
            Принять участие
          </Link>
        </div>
      </div>
    </header>
  );
}
