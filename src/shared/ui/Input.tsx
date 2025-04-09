import { cx } from 'class-variance-authority';
import * as React from 'react';
import { Label } from './Label';

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
        data-testid="label"
        htmlFor={name}
        className={cx(
          'mb-2 text-[12px] font-normal flex flex-col items-start xl:text-base',
          className,
        )}
      >
        <div className="text-left w-full flex justify-between items-end">
          <span>
            {required && (
              <span data-testid="required-mark" className="text-red-400">
                *
              </span>
            )}
            {label}
          </span>
          {error && (
            <span className="ml-2 text-end text-red-400 text-[12px] xl:text-[14px]">
              {error}
            </span>
          )}
        </div>
        <input
          name={name}
          type={type}
          data-slot="input"
          data-testid="input"
          required={required}
          className={cx(
            'file:text-foreground placeholder:text-[#B3B3B3] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-black border-[1px] flex text-[10px] w-full min-w-32  bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:border-[#999] disabled:cursor-not-allowed disabled:opacity-50 p-[5px]',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]',
            'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
            '2sm:p-3 2sm:text-base',
            'xl:p-4 2sm:text-3xl xl:border-2',
          )}
          {...props}
        />
      </Label>
    </>
  );
}

export { Input };
