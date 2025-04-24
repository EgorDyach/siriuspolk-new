'use client';

import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { useFormStore } from '../model/store';
import { HistoryValues } from '../model/historySchema';
import dynamic from 'next/dynamic';
import { Spinner } from '@shared/ui/Spinner';
import { Input } from '@shared/ui/Input';
import { Label } from '@shared/ui/Label';

const Editor = dynamic(() => import('@shared/ui/Editor'), {
  ssr: false,
  loading: () => <Spinner size={'medium'} show />,
});

export default function History() {
  const router = useRouter();
  const { history, setHistory, errors } = useFormStore();
  const { control, handleSubmit, getValues, register } = useForm<HistoryValues>(
    {
      defaultValues: history,
    },
  );

  const onSubmit = () => {
    setHistory(getValues());
    router.push('/form/photos');
  };

  const handleCancel = () => {
    setHistory(getValues());
    router.push('/form/medals');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="pb-[20px]">
        <div className="flex justify-between items-end  mb-[6px]">
          <h2 className="text-[20px] font-lora mb-[6px] sm:text-2xl xl:text-5xl">
            История
          </h2>
          <p className="text-red-400">{errors.content}</p>
        </div>

        <Label className="w-full mb-2 text-[12px] font-normal flex flex-col items-start xl:text-base">
          <div className="text-left w-full flex justify-between items-end mb-2">
            <span>
              <span data-testid="required-mark" className="text-red-400">
                *
              </span>
              Расскажите историю своего предка
            </span>
          </div>
          <Controller
            name="content"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Editor
                className="mb-4 border-black outline-black [&>div]:!border-black [&>div]:!outline-black [&>div]:!border-1 [&>div]:!outline-1 w-full"
                defaultValue={value}
                onChange={onChange}
              />
            )}
          />
        </Label>
        <Input
          placeholder="Правнук"
          label="Кем вы являетесь ветерану?"
          required
          {...register('relative')}
        />
        <div className="w-full flex justify-center mt-7 gap-[3%]">
          <Button type="button" onClick={handleCancel} className="bg-[#D9D9D9]">
            <p className="text-black text-[14px]">Назад</p>
          </Button>
          <Button>
            <p className="text-[14px]">Сохранить</p>
          </Button>
        </div>
      </section>
    </form>
  );
}
