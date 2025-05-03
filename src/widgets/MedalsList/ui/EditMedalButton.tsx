import { PencilIcon } from 'lucide-react';
import { FC, ButtonHTMLAttributes } from 'react';

export const EditMedalButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => (
  <button
    {...props}
    type="button"
    className="absolute top-2 right-2 cursor-pointer bg-[#52545d] size-8 p-2 rounded-full flex items-center justify-center"
  >
    <PencilIcon color="white" />
  </button>
);
