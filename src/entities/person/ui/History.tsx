'use client';

import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import FormEditor from '@shared/ui/Editor';
import { useFormContext } from 'react-hook-form';
import { useFormStore } from '../model/store';

export default function History() {
  const router = useRouter();
  const { getValues } = useFormContext();
  const { setHistory } = useFormStore();
  const handleSubmit = () => {
    setHistory(getValues('history'));
    router.push('/form/photos');
  };

  return (
    <section className="pb-[60px]">
      <h2 className="text-[42px] font-lora mb-[6px]">История</h2>
      <FormEditor className="min-h-[200px]" name="history" />
      <Button onClick={handleSubmit}>Сохранить</Button>
    </section>
  );
}
