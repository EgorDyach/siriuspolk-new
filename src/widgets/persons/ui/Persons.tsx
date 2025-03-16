'use server';
import { ShortPerson } from '@shared/model/types';
import PersonsSlider from '@features/personsSwiper/ui/PersonsSlider';

interface PersonsProps {
  persons: ShortPerson[];
}

export async function Persons({ persons }: PersonsProps) {
  return (
    <section className="relative pt-[120px] pb-[70px] bg-[#696d72]">
      <div className="container">
        <h2 className="text-[80px]/[102px] font-lora max-w-[700px] m-0 text-white font-normal mb-[48px]">
          Истории
        </h2>
        <PersonsSlider persons={persons} />
      </div>
    </section>
  );
}
