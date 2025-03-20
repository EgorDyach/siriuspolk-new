'use client';

import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useFormStore } from '../model/store';
import Editor from '@shared/ui/Editor';

export default function History() {
  const router = useRouter();
  const { history, setHistory } = useFormStore();
  const { control, handleSubmit, getValues } = useForm<{ content: string }>({
    defaultValues: { content: history },
  });

  const onSubmit = () => {
    setHistory(getValues('content'));
    router.push('/form/photos');
  };

  const handleCancel = () => {
    setHistory(getValues('content'));
    router.push('/form/medals');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="pb-[60px]">
        <h2 className="text-[42px] font-lora mb-[6px]">История</h2>
        <Controller
          name="content"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Editor defaultValue={value} onTextChange={onChange} />
          )}
        />
        <div className="w-full flex justify-center mt-7 gap-[3%]">
          <Button type="button" onClick={handleCancel} className="bg-[#D9D9D9]">
            <p className="text-black">Назад</p>
          </Button>
          <Button>Сохранить</Button>
        </div>
      </section>
    </form>
  );
}
