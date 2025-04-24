import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/Button';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { photoSchema, PhotoSchemaType } from '../model/photoSchema';
import { Input } from '@shared/ui/Input';
import { Calendar } from '@shared/ui/calendar';
import { ru } from 'date-fns/locale';
import { Label } from '@shared/ui/Label';
import { ACCEPTED_IMAGE_TYPES } from '@entities/person/model/constants';

interface PhotoFormProps {
  onSubmit: (value: PhotoSchemaType) => void;
}

const PhotoForm: FC<PhotoFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(photoSchema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        error={errors?.description?.message}
        label="Описание"
        required
        {...register('description')}
      />
      <div className="mt-3 text-base mb-2 flex justify-between items-center">
        <Label className="">
          <span className="text-red-400">*</span> Дата фотографии
        </Label>
        <Label className="text-red-400">{errors?.date?.message}</Label>
      </div>
      <Calendar
        locale={ru}
        classNames={{
          root: 'w-full mb-4',
          months: 'w-full',
          head_row: 'w-1/7 text-center',
          head_cell: 'w-1/7 text-center',
          row: 'w-1/7 text-center',
          cell: 'w-1/7 text-center',
        }}
        weekStartsOn={1}
        mode="single"
        selected={watch('date') || undefined}
        onSelect={(n) => setValue('date', n || null)}
        className="rounded-md border"
      />
      <Input
        error={errors.file?.message}
        required
        label="Фото"
        accept={ACCEPTED_IMAGE_TYPES.join(', ')}
        type="file"
        {...register('file')}
      />
      <Button size="small">Добавить фото</Button>
    </form>
  );
};

export default PhotoForm;
