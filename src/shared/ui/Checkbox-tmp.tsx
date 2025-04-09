'use client';

import { CheckIcon } from 'lucide-react';
import { cx } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, disabled, onChange, ...props }, ref) => {
  const { watch, setValue } = useFormContext();
  const checked = watch(props.name as string);

  return (
    <span
      data-disabled={disabled}
      className={cx(
        'relative border-[1px] border-black aspect-square block size-4',
        'data-[disabled=true]:border-gray-500',
        className,
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        disabled={disabled}
        className="opacity-0"
        checked={watch(props.name as string)}
        onChange={(e) => {
          if (disabled) return;
          const newValue = !watch(props.name as string);
          setValue(props.name as string, newValue);
          onChange?.(e);
        }}
        {...props}
      />
      <CheckIcon
        className={cx(
          'size-3 w-full h-full absolute top-0 left-0 right-0 bottom-0',
          !checked && 'hidden',
        )}
      />
    </span>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
