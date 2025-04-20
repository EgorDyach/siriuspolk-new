import { cx } from 'class-variance-authority';
import React, { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children?: ReactNode;
  size?: 'small' | 'default';
  theme?: 'gray' | 'default';
}

function Button({
  className,
  children,
  size = 'default',
  theme = 'default',
  ...props
}: ButtonProps) {
  return (
    <>
      <button
        className={cx(
          className,
          theme === 'gray' && 'bg-[#D9D9D9] !text-black [&>*]:text-black',
          size === 'small' && 'text-sm md:text-base',
          'py-[12px] px-[32px] text-white text-base md:text-2xl font-lora bg-[#343434] cursor-pointer',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export { Button };
