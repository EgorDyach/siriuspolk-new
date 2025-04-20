'use server';
import { Person } from '@shared/model/types';
import PersonsSlider from '@features/personsSwiper/ui/PersonsSlider';
import { cx } from 'class-variance-authority';

interface PersonsProps {
  persons: Person[];
}

export async function Persons({ persons }: PersonsProps) {
  return (
    <section className="relative pt-[40px] pb-[70px] bg-[#696d72] md:pt-16 xl:pt-20">
      <div className="container">
        <h2
          className={cx(
            'text-[40px]/[42px] font-lora m-0 text-white font-normal mb-[32px] w-full text-center xl:text-left',
            'sm:text-[42px] sm:text-center',
            'md:text-[60px] md:mb-14',
          )}
        >
          Истории
        </h2>
        <PersonsSlider persons={persons} />
      </div>
    </section>
  );
}
