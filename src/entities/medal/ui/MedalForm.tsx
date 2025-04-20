import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/Button';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { medalSchema, MedalSchemaType } from '../model/medalSchema';
import { Input } from '@shared/ui/Input';
import { Medal } from '@shared/model/types';
import { getButtonContent } from '../model/helpers';

interface MedalFormProps {
  onSubmit: (value: MedalSchemaType) => void;
  defaultValues?: Medal;
}

const MedalForm: FC<MedalFormProps> = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(medalSchema),
    defaultValues,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors?.name?.message}
        label="Название"
        required
        {...register('name')}
      />
      <Input
        error={errors?.photo_link?.message}
        label="Ссылка на изображение"
        required
        {...register('photo_link')}
      />
      <Button size="small">{getButtonContent(!!defaultValues)}</Button>
    </form>
  );
};

export default MedalForm;
