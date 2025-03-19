'use client';

import { cx } from 'class-variance-authority';
import { formLinks } from '../api/formLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getIsActive, getScale } from '../model/helpers';

export function FormNav() {
  const pathname = usePathname();
  return (
    <section className="relative pb-[40px] py-[30px] bg-[#efeade]">
      <div className="absolute left-1/2 -translate-x-1/2 h-[2px] max-w-full w-full bg-gray-400 overflow-hidden">
        <div
          className="h-full bg-black"
          style={{
            width: `${100 / formLinks.length}%`,
            transform: `scaleX(${getScale(pathname)})`,
          }}
        />
      </div>
      <ul className="flex justify-around w-full">
        {formLinks.map(({ link, text }, index) => (
          <Link key={index} href={link} className="-translate-[25px]">
            <li
              data-active={getIsActive(pathname, index)}
              className={cx(
                'relative text-center',
                'before:mb-2 before:relative before:block before:size-[40px] text-gray-400 data-[active=true]:text-[#1e1e1e] before:bg-gray-400 data-[active=true]:before:bg-[#52545d] before:top-0 before:left-1/2 before:-translate-x-1/2',
              )}
            >
              <p className="font-lora text-inherit font-medium w-min">{text}</p>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
