'use client';

import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useFormStore } from '../model/store';
import { HistoryValues } from '../model/historySchema';
import dynamic from 'next/dynamic';
import { Spinner } from '@shared/ui/Spinner';

const Editor = dynamic(() => import('@shared/ui/Editor'), {
  ssr: false,
  loading: () => <Spinner size={'medium'} show />,
});

export default function History() {
  const router = useRouter();
  const { history, setHistory, errors } = useFormStore();
  const { control, handleSubmit, getValues } = useForm<HistoryValues>({
    defaultValues: history,
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
      <section className="pb-[20px]">
        <div className="flex justify-between items-end  mb-[6px]">
          <h2 className="text-[32px] font-lora">История</h2>
          <p className="text-red-400">{errors.content}</p>
        </div>

        <Controller
          name="content"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Editor defaultValue={value} onTextChange={onChange} />
          )}
        />
        <div className="w-full hidden justify-center mt-7 gap-[3%]">
          <Button type="button" onClick={handleCancel} className="bg-[#D9D9D9]">
            <p className="text-black">Назад</p>
          </Button>
          <Button>Сохранить</Button>
        </div>
      </section>
    </form>
  );
}
