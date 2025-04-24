'use client';
import { useRouter } from 'next/navigation';
import { Person } from '@shared/model/types';
import Image from 'next/image';
import { cx } from 'class-variance-authority';
import { getFullName } from '@shared/model/getFullName';
import { getServerLink } from '@shared/model/getServerLink';
import React from 'react';

interface HeroSlideProps {
  person: Person;
}

export function HeroSlide({ person }: HeroSlideProps) {
  const { photo = [], date_birth, date_death, id } = person;
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
        '2xl:w-[200px] xl:h-[260px]',
      )}
    >
      <Image
        className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-[#333]"
        alt={`${getFullName(person)} (${date_birth} - ${date_death}) – портрет`}
        width={462}
        height={600}
        src={getServerLink(photo?.at(0)?.link)}
        priority={true}
      />
      <p
        className={cx(
          'text-[12px] text-white font-lora w-[calc(100% - 10px)] m-0 p-[5px] relative z-10 block after:top-0 after:left-0 after:bottom-0 after:right-0 after:absolute after:z-[-1] after:bg-[rgba(0,0,0,0.65)] duration-1000',
          'sm:w-full sm:text-[16px]',
          'xl:text-[14px]',
        )}
      >
        {getFullName(person)}
        <br />({date_birth} - {date_death})
      </p>
    </div>
  );
}
