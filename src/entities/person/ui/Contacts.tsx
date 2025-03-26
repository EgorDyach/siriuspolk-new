'use client';
import { Input } from '@shared/ui/Input';
import { useForm } from 'react-hook-form';
import { ContactsSchema, ContactsSchemaValues } from '../model/contactsSchema';
import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { useFormStore } from '@entities/person/model/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { requestCreatePerson } from '../api/create';
import { useValidateStep } from '../model/useValidateStep';
import { MainFormSchema } from '../model/mainInfoSchema';
import { HistorySchema } from '../model/historySchema';

export default function Contacts() {
  const router = useRouter();
  const { contacts, mainInfo, photos, history, medals, setContacts } =
    useFormStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactsSchemaValues>({
    resolver: zodResolver(ContactsSchema),
    defaultValues: contacts,
  });

  const checkData = useValidateStep([
    { schema: MainFormSchema, redirectTo: '/form/main', data: mainInfo },
    { schema: HistorySchema, redirectTo: '/form/history', data: history },
  ]);

  const onSubmit = async (data: ContactsSchemaValues) => {
    setContacts(data);
    if (!checkData()) return;
    // TODO: Добавить try/catch полсе фикса на бэке
    await requestCreatePerson({
      contacts: data,
      mainInfo,
      photos,
      history,
      medals,
    });
  };

  const handleCancel = () => {
    router.push('/form/photos');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="pb-[40px]">
        <h2 className="text-[32px] font-lora mb-[6px]">Обратная связь</h2>
        <p className="text-[12px] max-w-[830px] mb-[32px]">
          Оставьте свои контактные данные, чтобы мы могли связаться с вами,
          когда вашу историю проверят.
        </p>
        <div className="flex mb-3">
          <div className="grid grid-cols-1 flex-3 gap-[2%]">
            <Input
              required
              error={errors.name?.message}
              {...register('name')}
              name="name"
              placeholder="Дмитрий"
              className="justify-end"
              label={'Имя'}
            />
            <Input
              required
              error={errors.surname?.message}
              {...register('surname')}
              name="surname"
              placeholder="Дмитриев"
              className="justify-end"
              label={'Фамилия'}
            />
            <Input
              error={errors.lastname?.message}
              {...register('lastname')}
              name="lastname"
              placeholder="Дмитриевич"
              className="justify-end"
              label={'Отчество (при наличии)'}
            />
          </div>
        </div>
        <div className="flex flex-col gap-[10%] mb-7">
          <Input
            required
            error={errors.tg?.message}
            className="w-full"
            {...register('tg')}
            name="tg"
            placeholder="@dmitriy_dmitriev"
            label={'Ваш ник в Telegram'}
          />
          <Input
            required
            error={errors.email?.message}
            className="w-full"
            {...register('email')}
            name="email"
            type="email"
            placeholder="dmitriy_dmitriev@mail.ru"
            label={'Email'}
          />
        </div>

        <div className="w-full flex justify-center mt-4  gap-[3%]">
          <Button
            type="button"
            onClick={handleCancel}
            className="bg-[#D9D9D9] hidden"
          >
            <p className="text-black">Назад</p>
          </Button>
          <Button>
            <p className="text-[14px]">Сохранить</p>
          </Button>
        </div>
      </section>
    </form>
  );
}
