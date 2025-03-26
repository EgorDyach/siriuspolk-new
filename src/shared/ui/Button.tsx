import { cx } from 'class-variance-authority';
import React, { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children?: ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={cx(
          'py-[12px] px-[32px] text-white text-2xl font-lora bg-[#343434] cursor-pointer',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export { Button };
