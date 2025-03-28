'use client';
import { useRouter } from 'next/navigation';
import { ShortPerson } from '@shared/model/types';
import Image from 'next/image';
import { cx } from 'class-variance-authority';

interface HeroSlideProps {
  person: ShortPerson;
}

export function HeroSlide({
  person: { main_photo, date_birth, date_death, id, SNL: name },
}: HeroSlideProps) {
  const router = useRouter();
  const handleClick = () => router.push(`/histories/${id}`);
  return (
    <div
      onClick={handleClick}
      className={cx(
        'my-auto w-[164px] h-[256px] text-center items-end justify-end transition flex duration-1000 align-middle relative mx-auto',
        'sm:w-[300px] sm:h-[400px]',
        'md:w-[200px] md:h-[260px]',
        'xl:w-[150px] xl:h-[200px]',
      )}
    >
      <Image
        className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-[#333]"
        alt={`${name} (${date_birth} - ${date_death}) – портрет`}
        width={462}
        height={600}
        src={main_photo || '/UnknownSoldier.jpg'}
      />
      <p
        className={cx(
          'text-[12px] text-white font-lora w-[calc(100% - 10px)] m-0 p-[5px] relative z-10 block after:top-0 after:left-0 after:bottom-0 after:right-0 after:absolute after:z-[-1] after:bg-[rgba(0,0,0,0.65)] duration-1000',
          'sm:w-full sm:text-[16px]',
          'xl:text-[14px]',
        )}
      >
        {name}
        <br />({date_birth} - {date_death})
      </p>
    </div>
  );
}
