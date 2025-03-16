'use server';

import { cx } from 'class-variance-authority';
import { steps } from '../api/steps';

export async function Steps() {
  return (
    <section className="relative py-[120px] bg-[#efeade]">
      <div className="container relative">
        <h2 className="text-[80px]/[102px] font-lora  m-0 text-black mb-[48px] font-medium">
          Как принять участие
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] max-h-[calc(100%-120px)] h-full bg-gray-400">
          <div className="w-full h-0 bg-black fill-line"></div>
        </div>

        <ul>
          {steps.map(({ icon, text }, index) => (
            <li
              className={cx(
                'flex justify-center gap-[200px] py-[40px] fade-in-anim opacity-65',
                index % 2 &&
                  'flex-row-reverse [&>div]:justify-start [&>div+div]:items-end text-end',
              )}
              style={{
                animationDelay: `${index * 2.5}s`,
              }}
              key={index}
            >
              <div className="max-w-[calc(41.4%)] w-full flex justify-end items-center">
                {icon}
              </div>
              <div className="flex items-start gap-[30px] flex-col">
                <h3 className="bg-[#52575d] m-0 text-[48px]/[65px] text-center aspect-square font-lora text-white">
                  {index + 1}
                </h3>
                <p className="max-w-[550px] text-[28px] font-lora font-normal">
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
