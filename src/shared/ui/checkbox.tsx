'use client';

import { CheckIcon } from 'lucide-react';
import { cx } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, disabled, ...props }, ref) => {
  const { watch } = useFormContext();
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
        className={'opacity-0'}
        {...props}
        checked={checked}
      />
      {checked && (
        <CheckIcon className="size-3 w-full h-full absolute top-0 left-0 right-0 bottom-0" />
      )}
    </span>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
