'use server';
import { ShortPerson } from '@shared/model/types';
import PersonsSlider from '@features/personsSwiper/ui/PersonsSlider';
import { cx } from 'class-variance-authority';

interface PersonsProps {
  persons: ShortPerson[];
}

export async function Persons({ persons }: PersonsProps) {
  return (
    <section className="relative pt-[40px] pb-[70px] bg-[#696d72]">
      <div className="container">
        <h2
          className={cx(
            'text-[32px]/[102px] font-lora max-w-[700px] m-0 text-white font-normal mb-[24px]',
            'sm:text-[42px] sm:text-center',
          )}
        >
          Истории
        </h2>
        <PersonsSlider persons={persons} />
      </div>
    </section>
  );
}
