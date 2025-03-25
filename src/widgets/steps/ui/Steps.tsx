'use server';

import { cx } from 'class-variance-authority';
import { steps } from '../api/steps';

export async function Steps() {
  return (
    <section className="relative py-[50px] bg-[#efeade]">
      <div className="container relative">
        <h2 className="text-[32px]/[50px] font-lora  m-0 text-black mb-[24px] font-medium">
          Как принять участие
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] max-h-[calc(100%-120px)] h-full bg-gray-400 hidden">
          <div className="w-full h-0 bg-black fill-line"></div>
        </div>

        <ul>
          {steps.map(({ icon, text }, index) => (
            <li
              className={cx(
                'flex justify-center gap-[10px] py-[26px] fade-in-anim opacity-65 relative max-h-[130px] h-full',
                index % 2 &&
                  'flex-row-reverse [&>div]:justify-end [&>div+div]:items-end text-end',
              )}
              style={{
                animationDelay: `${index * 2.5}s`,
              }}
              key={index}
            >
              <div className="max-w-[60px] max-h-[130px] w-full flex justify-end items-start [&>div]:!h-fit">
                {icon}
              </div>
              <div className="flex items-center gap-[30px] flex-col justify-end">
                <h3
                  className={cx(
                    'bg-[#52575d] m-0 text-[16px]/[24px] text-center aspect-square font-lora text-white absolute top-0 w-[24px]',
                    index % 2 && ' right-0',
                    (index + 1) % 2 && ' left-0',
                  )}
                >
                  {index + 1}
                </h3>
                <p className="max-w-[550px] text-[12px] font-lora font-normal">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
