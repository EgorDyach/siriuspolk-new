'use server';

import { cx } from 'class-variance-authority';
import { steps } from '../api/steps';

export async function Steps() {
  return (
    <section className="relative py-[50px] bg-[#efeade]">
      <div className="container relative">
        <h2 className="text-[32px]/[50px] font-lora  m-0 text-black mb-[24px] font-medium sm:text-center sm:text-[40px]">
          Как принять участие
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] max-h-[calc(100%-120px)] h-full bg-gray-400 hidden md:block">
          <div className="w-full h-0 bg-black fill-line"></div>
        </div>

        <ul className="md:flex md:flex-col md:w-full">
          {steps.map(({ icon, text }, index) => (
            <li
              className={cx(
                'flex justify-center gap-[10px] py-[26px] fade-in-anim opacity-65 relative max-h-[140px] h-full sm:max-h-[170px] md:w-full md:justify-center md:gap-[50px] md:max-h-[240px]',
                index % 2 &&
                  'flex-row-reverse [&>div]:justify-end [&>div+div]:items-end text-end',
              )}
              style={{
                animationDelay: `${index * 2.5}s`,
              }}
              key={index}
            >
              <div
                className={cx(
                  'max-w-[65px] max-h-[140px] w-full flex justify-end items-start [&>div]:!h-fit sm:max-w-[95px]  md:max-w-[calc(50%)] md:w-full md:items-center md:[&>div]:!size-32  md:basis-1/2 md:flex-1/2 ',
                  index % 2 && 'md:!justify-start',
                )}
              >
                {icon}
              </div>
              <div
                className={cx(
                  'flex items-center gap-[30px] flex-col justify-end sm:gap-[14px] md:basis-1/2 md:flex-1/2  md:max-w-[calc(50%)] md:w-full',
                  index % 2 && 'sm:justify-end sm:items-end',
                  (index + 1) % 2 && 'sm:justify-start sm:items-start',
                )}
              >
                <h3
                  className={cx(
                    'bg-[#52575d] m-0 text-[20px]/[28px] text-center aspect-square font-lora text-white absolute top-0 w-[28px] sm:relative sm:left-0 sm:w-[38px] sm:text-[28px]/[38px]',
                    index % 2 && ' right-0',
                    (index + 1) % 2 && ' left-0',
                  )}
                >
                  {index + 1}
                </h3>
                <p className="max-w-[550px] text-[13px] font-normal sm:text-[22px]">
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
