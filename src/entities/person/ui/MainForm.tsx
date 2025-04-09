'use client';
import { Input } from '@shared/ui/Input';
import { FormProvider, useForm } from 'react-hook-form';
import { MainFormSchema, MainFormValues } from '../model/mainInfoSchema';
import { UserRound, X } from 'lucide-react';
import { Checkbox } from '@shared/ui/Checkbox';
import { Label } from '@shared/ui/Label';
import Image from 'next/image';
import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { useFormStore } from '@entities/person/model/store';
import { ACCEPTED_IMAGE_TYPES } from '../model/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';

export default function MainForm() {
  const router = useRouter();
  const { mainInfo, setMainInfo, errors, setErrors } = useFormStore();
  const form = useForm<MainFormValues>({
    resolver: zodResolver(MainFormSchema),
    defaultValues: mainInfo,
  });

  const {
    register,
    formState: { errors: formErrors },
    watch,
    setValue,
    handleSubmit,
  } = form;

  const onSubmit = (data: MainFormValues) => {
    setMainInfo(data);
    setErrors({});
    router.push('/form/medals');
  };

  useEffect(() => {
    const subscription = watch((t) => {
      Object.keys(t).map((key) => {
        if (t[key as keyof typeof t] && errors[key])
          setErrors({ ...errors, [key]: undefined });
      });
    });
    return () => subscription.unsubscribe();
  }, [watch, errors, setErrors]);

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="pb-[20px]">
          <h2 className="text-[20px] font-lora mb-[6px] sm:text-2xl xl:text-5xl">
            Основная информация
          </h2>
          <span className="text-[#C4B695] italic font-lora text-[14px] mb-[40px]">
            * - обязательные поля
          </span>
          <div>
            <div className="flex gap-[5%] mb-4">
              <div className="text-center relative flex-2">
                <label className="flex items-center justify-center cursor-pointer">
                  <div className="size-[75px] rounded-full bg-[#333] flex items-center justify-center mb-2 sm:size-28 xl:size-48">
                    {watch('photo') && watch('photo')?.item(0) && (
                      <Image
                        width={200}
                        height={200}
                        className="object-cover size-full rounded-full"
                        src={URL.createObjectURL(watch('photo')!.item(0)!)}
                        alt=""
                      />
                    )}
                    {!watch('photo')?.length && watch('hasnt_photo') && (
                      <Image
                        width={200}
                        height={200}
                        className="object-cover rounded-full size-full"
                        src={'/UnknownSoldier.jpg'}
                        alt=""
                      />
                    )}
                    {!watch('photo')?.length && !watch('hasnt_photo') && (
                      <div className="p-[20%] size-full">
                        <UserRound color="white" className="w-full h-full" />
                      </div>
                    )}
                  </div>
                  <input
                    {...register('photo')}
                    type="file"
                    disabled={watch('hasnt_photo')}
                    accept={ACCEPTED_IMAGE_TYPES.join(', ')}
                    className="w-[1px] h-[1px] hidden"
                  />
                </label>
                {(watch('photo')?.length || watch('hasnt_photo')) && (
                  <span
                    onClick={() => {
                      setValue('photo', null);
                      setValue('hasnt_photo', false);
                    }}
                    className="size-6 items-center flex justify-center bg-white border-[1px] border-black rounded-full absolute top-0 right-1/2 translate-x-[38px] cursor-pointer sm:size-9 sm:translate-x-[62px] xl:size-11 xl:translate-x-[100px]"
                  >
                    <X />
                  </span>
                )}
                <label className="flex items-center justify-center">
                  <Checkbox
                    disabled={!!watch('photo')?.length}
                    className="mr-2"
                    {...register('hasnt_photo')}
                  />
                  <p className="text-left text-[12px]">Фото отсутствует</p>
                </label>
                {formErrors.photo && (
                  <p className="text-red-400">{formErrors.photo.message}</p>
                )}
                {errors.photo && <p className="text-red-400">{errors.photo}</p>}
              </div>
              <div className="grid grid-cols-1  flex-3 gap-[2%] xl:grid-cols-2">
                <Input
                  required
                  error={formErrors.name?.message || errors.name}
                  {...register('name')}
                  name="name"
                  placeholder="Семен"
                  className="justify-end"
                  label={'Имя'}
                />
                <Input
                  required
                  error={formErrors.surname?.message || errors.surname}
                  {...register('surname')}
                  name="surname"
                  placeholder="Семенов"
                  className="justify-end"
                  label={'Фамилия'}
                />
                <Input
                  error={formErrors.lastname?.message || errors.lastname}
                  {...register('lastname')}
                  name="lastname"
                  placeholder="Семенович"
                  className="justify-end"
                  label={'Отчество (при наличии)'}
                />
              </div>
            </div>
            <div className="flex gap-[10%] flex-col mb-7 xl:flex-row">
              <div className="w-full mb-5">
                <Input
                  required
                  error={formErrors.birth_year?.message || errors.birth_year}
                  {...register('birth_year')}
                  name="birth_year"
                  type="number"
                  placeholder="1900"
                  label={'Год рождения'}
                  disabled={watch('is_birth_unknown')}
                />
                <Label>
                  <Checkbox {...register('is_birth_unknown')} />
                  <span className="text-[10px]">Неизвестно</span>
                </Label>
              </div>
              <div className="w-full">
                <Input
                  required
                  error={formErrors.death_year?.message || errors.death_year}
                  {...register('death_year')}
                  name="death_year"
                  type="number"
                  placeholder="2000"
                  label={'Год смерти'}
                  disabled={watch('is_alive') || watch('is_death_unknown')}
                />
                <Label className="mb-3">
                  <Checkbox {...register('is_death_unknown')} />
                  <span className="text-[10px]">Неизвестно</span>
                </Label>
                <Label>
                  <Checkbox {...register('is_alive')} />
                  <span className="text-[10px]">Жив</span>
                </Label>
              </div>
            </div>
            <div className="flex flex-col gap-[10%]  xl:flex-row">
              <Input
                required
                error={formErrors.city?.message || errors.city}
                {...register('city')}
                name="city"
                className="w-full"
                placeholder="г. Ульяновск"
                label={'Родной город'}
              />
              <Input
                required
                error={formErrors.rank?.message || errors.rank}
                {...register('rank')}
                name="rank"
                className="w-full"
                placeholder="Майор"
                label={'Звание'}
              />
            </div>
          </div>
          <div className="w-full flex justify-center mt-7">
            <Button className="text-[14px]">Сохранить</Button>
          </div>
        </section>
      </form>
    </FormProvider>
  );
}
