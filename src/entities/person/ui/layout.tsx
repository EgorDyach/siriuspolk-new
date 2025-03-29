'use client';

import { FormNav } from '@widgets/formNav/ui/FormNav';
import { PropsWithChildren, useEffect } from 'react';
import { useFormStore } from '../model/store';
import { requestMedals } from '../api/medals';

export default function FormLayout({ children }: PropsWithChildren) {
  const values = useFormStore();

  useEffect(() => {
    (async () => {
      if (values.server_medals.length) return;
      const medals = await requestMedals();
      values.setServerMedals(medals.details);
    })();
  }, [values]);

  return (
    <section className="pt-[40px] sm:pt-20 xl:pt-32">
      <div className="container">
        <h1 className="font-lora text-[40px]/[45px] font-medium mb-11 md:text-6xl 2xl:text-7xl">
          Расскажи историю своего предка
        </h1>
        <FormNav />
        <div>{children}</div>
      </div>
    </section>
  );
}
