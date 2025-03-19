'use client';

import { CheckIcon } from 'lucide-react';
import { cx } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';

const Checkbox = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const { watch } = useFormContext();
  const checked = watch(props.name as string);

  return (
    <span
      className={cx(
        'relative border-2 border-black aspect-square block size-5',
        className,
      )}
    >
      <input
        type="checkbox"
        ref={ref}
        className={'opacity-0'}
        {...props}
        checked={checked}
      />
      {checked && (
        <CheckIcon className="size-3.5 w-full h-full absolute top-0 left-0 right-0 bottom-0" />
      )}
    </span>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
