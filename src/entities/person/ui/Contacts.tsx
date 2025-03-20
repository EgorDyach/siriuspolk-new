'use client';
import { Input } from '@shared/ui/Input';
import { useForm } from 'react-hook-form';
import { ContactsSchema, ContactsSchemaValues } from '../model/contactsSchema';
import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { useFormStore } from '@entities/person/model/store';
import { zodResolver } from '@hookform/resolvers/zod';

export default function MainForm() {
  const router = useRouter();
  const { contacts, setContacts } = useFormStore();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactsSchemaValues>({
    resolver: zodResolver(ContactsSchema),
    defaultValues: contacts,
  });

  const onSubmit = (data: ContactsSchemaValues) => {
    console.log(data);
    setContacts(data);
    router.push('/form/medals');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="pb-[60px]">
        <h2 className="text-[42px] font-lora mb-[6px]">Обратная связь</h2>
        <p className="text-2xl max-w-[830px] mb-[32px]">
          Оставьте свои контактные данные, чтобы мы могли связаться с вами,
          когда вашу историю проверят.
        </p>
        <div className="flex gap-[5%] mb-14">
          <div className="grid grid-cols-3 flex-3 gap-[2%]">
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
        <div className="flex gap-[10%] mb-7">
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

        <div className="w-full flex justify-center mt-7">
          <Button onClick={() => console.log(errors)}>Отправить</Button>
        </div>
      </section>
    </form>
  );
}
