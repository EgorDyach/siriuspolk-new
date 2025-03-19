import { cx } from 'class-variance-authority';
import * as React from 'react';
import { Label } from './label';

interface InputProps extends React.ComponentProps<'input'> {
  label?: React.ReactNode;
  error?: string;
}

function Input({
  className,
  required,
  label,
  type,
  name,
  error,
  ...props
}: InputProps) {
  return (
    <>
      <Label
        htmlFor={name}
        className={cx(
          'mb-2 text-[20px] font-normal flex flex-col items-start',
          className,
        )}
      >
        <div className="text-left">
          {required && <span className="text-red-400">*</span>}
          {label}
          {error && (
            <span className="ml-2 text-red-400 text-[16px]">
              Это обязательное поле
            </span>
          )}
        </div>
        <input
          name={name}
          type={type}
          data-slot="input"
          className={cx(
            'file:text-foreground placeholder:text-[#B3B3B3] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-black border-2 flex text-[20px] w-full min-w-32  bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:border-[#999] disabled:cursor-not-allowed disabled:opacity-50 p-[15px]',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          )}
          {...props}
        />
      </Label>
    </>
  );
}

export { Input };
