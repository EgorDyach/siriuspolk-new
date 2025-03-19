'use client';

import { FormNav } from '@widgets/formNav/ui/FormNav';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MainFormSchema } from '../model/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStore } from '../model/store';

export default function FormLayout({ children }: PropsWithChildren) {
  const values = useFormStore();
  const form = useForm({
    resolver: zodResolver(MainFormSchema),
    defaultValues: values,
  });

  return (
    <section className=" pt-[80px]">
      <div className="container">
        <h1 className="font-lora text-7xl font-medium  mb-11">
          Расскажи историю своего предка
        </h1>
        <FormNav />
        <FormProvider {...form}>{children}</FormProvider>
      </div>
    </section>
  );
}
