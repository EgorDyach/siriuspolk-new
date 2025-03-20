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

  const handleCancel = () => {
    setHistory(getValues('history'));
    router.push('/form/medals');
  };

  return (
    <section className="pb-[60px]">
      <h2 className="text-[42px] font-lora mb-[6px]">История</h2>
      <FormEditor className="min-h-[200px]" name="history" />
      <div className="w-full flex justify-center mt-7 gap-[3%]">
        <Button onClick={handleCancel} className="bg-[#D9D9D9]">
          <p className="text-black">Назад</p>
        </Button>
        <Button onClick={handleSubmit}>Сохранить</Button>
      </div>
    </section>
  );
}
