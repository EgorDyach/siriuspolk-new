import { X } from 'lucide-react';
import { FC, ButtonHTMLAttributes } from 'react';

export const DeleteMedalButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => (
  <button
    {...props}
    type="button"
    className="absolute top-12 right-2 cursor-pointer bg-[#52545d] size-8 p-2 rounded-full flex items-center justify-center"
  >
    <X color="white" />
  </button>
);
