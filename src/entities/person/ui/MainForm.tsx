'use client';
import { Input } from '@shared/ui/Input';
import { useFormContext } from 'react-hook-form';
import { MainFormValues } from '../model/mainInfoSchema';
import { UserRound, X } from 'lucide-react';
import { Checkbox } from '@shared/ui/checkbox';
import { Label } from '@shared/ui/label';
import Image from 'next/image';
import { Button } from '@shared/ui/Button';
import { useRouter } from 'next/navigation';
import { useFormStore } from '@entities/person/model/store';
import { ACCEPTED_IMAGE_TYPES } from '../model/constants';

export default function MainForm() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit,
  } = useFormContext<MainFormValues>();
  const router = useRouter();

  const setValues = useFormStore((store) => store.setValues);
  const onSubmit = (data: MainFormValues) => {
    setValues(data);
    router.push('/form/medals');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section className="pb-[60px]">
        <h2 className="text-[42px] font-lora mb-[6px]">Основная информация</h2>
        <span className="text-[#C4B695] italic font-lora text-[20px] mb-[40px]">
          * - обязательные поля
        </span>
        <div>
          <div className="flex gap-[5%] mb-14">
            <div className="text-center relative flex-2">
              <label className="flex items-center justify-center">
                <div className="size-[200px] rounded-full bg-[#333] flex items-center justify-center mb-2">
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
                      src={'/images/UnknownSoldier.jpg'}
                      alt=""
                    />
                  )}
                  {!watch('photo')?.length && !watch('hasnt_photo') && (
                    <div className="p-[40px] size-full">
                      <UserRound color="white" className="w-full h-full" />
                    </div>
                  )}
                </div>
                <input
                  {...register('photo')}
                  type="file"
                  disabled={watch('hasnt_photo')}
                  accept={ACCEPTED_IMAGE_TYPES.join(', ')}
                  className="w-[1px] h-[1px]"
                />
              </label>
              {(watch('photo')?.length || watch('hasnt_photo')) && (
                <span
                  onClick={() => {
                    setValue('photo', null);
                    setValue('hasnt_photo', false);
                  }}
                  className="size-10 items-center flex justify-center bg-white border-[2px] border-black rounded-full absolute top-2 right-1/2 translate-x-[100px] cursor-pointer"
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
                Фото отсутствует
              </label>
              {errors.photo && (
                <p className="text-red-400">{errors.photo.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 grid-rows-2 flex-3 gap-[2%]">
              <Input
                required
                error={errors.name?.message}
                {...register('name')}
                name="name"
                placeholder="Семен"
                className="justify-end"
                label={'Имя'}
              />
              <Input
                required
                error={errors.surname?.message}
                {...register('surname')}
                name="surname"
                placeholder="Семенов"
                className="justify-end"
                label={'Фамилия'}
              />
              <Input
                error={errors.lastname?.message}
                {...register('lastname')}
                name="lastname"
                placeholder="Семенович"
                className="justify-end"
                label={'Отчество (при наличии)'}
              />
            </div>
          </div>
          <div className="flex gap-[10%] mb-7">
            <div className="w-full">
              <Input
                required
                error={errors.birth_year?.message}
                {...register('birth_year')}
                name="birth_year"
                type="number"
                placeholder="1900"
                label={'Год рождения'}
                disabled={watch('is_birth_unknown')}
              />
              <Label>
                <Checkbox {...register('is_birth_unknown')} />
                <span>Неизвестно</span>
              </Label>
            </div>
            <div className="w-full">
              <Input
                required
                error={errors.death_year?.message}
                {...register('death_year')}
                name="death_year"
                type="number"
                placeholder="2000"
                label={'Год смерти'}
                disabled={watch('is_alive') || watch('is_death_unknown')}
              />
              <Label className="mb-3">
                <Checkbox {...register('is_death_unknown')} />
                <span>Неизвестно</span>
              </Label>
              <Label>
                <Checkbox {...register('is_alive')} />
                <span>Жив</span>
              </Label>
            </div>
          </div>
          <div className="flex gap-[10%]">
            <Input
              required
              error={errors.city?.message}
              {...register('city')}
              name="city"
              className="w-full"
              placeholder="г. Ульяновск"
              label={'Родной город'}
            />
            <Input
              required
              error={errors.rank?.message}
              {...register('rank')}
              name="rank"
              className="w-full"
              placeholder="Майор"
              label={'Звание'}
            />
          </div>
        </div>
        <div className="w-full flex justify-center mt-7">
          <Button>Сохранить</Button>
        </div>
      </section>
    </form>
  );
}
