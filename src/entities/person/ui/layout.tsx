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
    <section className=" pt-[80px]">
      <div className="container">
        <h1 className="font-lora text-7xl font-medium  mb-11">
          Расскажи историю своего предка
        </h1>
        <FormNav />
        {children}
      </div>
    </section>
  );
}
