'use client';
import { Medal, Person } from '@shared/model/types';
import { DialogContent, DialogHeader, DialogFooter } from '@shared/ui/dialog';
import { FC, memo, useState } from 'react';
import { getFullName, getModalTitle } from '../model/helpers';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import MedalsSelect from '@entities/person/ui/MedalsSelect';
import { showErrorNotification } from '@shared/lib/utils/notification';

import { Checkbox } from '@shared/ui/Checkbox';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Editor from '@shared/ui/Editor';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from '@shared/ui/alert-dialog';
import { Label } from '@shared/ui/Label';
import MedalsList from '@widgets/MedalsList/ui/MedalsList';
import { AddPersonType } from '../model/types';
import { getServerLink } from '@shared/model/getServerLink';
import Image from 'next/image';
import React from 'react';

interface AdminCardModalProps {
  item: Person;
  handleDelete: VoidFunction;
  handleApprove: (values: AddPersonType) => void;
  isChecked: boolean;
  serverMedals: Medal[] | null;
}

const AdminCardModal: FC<AdminCardModalProps> = memo(
  ({ item, isChecked, handleDelete, handleApprove, serverMedals }) => {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const form = useForm({
      defaultValues: {
        ...item,
        is_birth_unknown: item?.date_birth === 0,
        is_death_unknown: item?.date_death === 0,
        is_alive: item?.date_death === 1,
        addToMainPage: false,
      },
    });

    const removeMedal = (index: number) => {
      const medals = form.getValues().medals || [];
      form.setValue('medals', [
        ...medals.slice(0, index),
        ...medals.slice(index + 1),
      ]);
    };

    return (
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
        }}
        className="max-h-[90%] !max-w-5xl overflow-y-auto  h-full"
      >
        <DialogHeader className="sticky -top-6 bg-white py-6 z-10">
          <h4 className="font-semibold">{getModalTitle(item, isChecked)}</h4>
        </DialogHeader>
        {serverMedals === null && (
          <div className="text-center w-full">Загрузка...</div>
        )}
        {serverMedals !== null && (
          <FormProvider {...form}>
            <form className="w-full">
              <div className="flex gap-7 items-start">
                <PhotoProvider>
                  <PhotoView
                    src={
                      getServerLink(item?.photo?.at(0)?.link) ||
                      '/UnknownSoldier.jpg'
                    }
                  >
                    <Image
                      src={
                        getServerLink(item?.photo?.at(0)?.link) ||
                        '/UnknownSoldier.jpg'
                      }
                      onError={(e) =>
                        (e.currentTarget.src = '/UnknownSoldier.jpg')
                      }
                      width={500}
                      height={800}
                      className="flex-1/3 object-contain sticky top-[48.4px]  aspect-[5/8] max-h-[500px] h-[75vh]"
                      alt={`${item.surname} ${item.name} ${item.patronymic}`}
                    />
                  </PhotoView>
                </PhotoProvider>
                <div className="overflow-y-auto flex-1/2">
                  <h5 className="text-2xl font-bold text-[#333] mb-5">
                    Основная информация
                  </h5>
                  <Input
                    required
                    label="Имя"
                    className="w-full"
                    {...form.register('name')}
                  />
                  <Input
                    required
                    label="Фамилия"
                    className="w-full"
                    {...form.register('surname')}
                  />
                  <Input
                    label="Отчество"
                    className="w-full"
                    {...form.register('patronymic')}
                  />
                  <div className="flex gap-3">
                    <div className="w-full mb-5">
                      <Input
                        required
                        error={form.formState.errors.date_birth?.message}
                        {...form.register('date_birth')}
                        name="date_birth"
                        type="number"
                        placeholder="1900"
                        label={'Год рождения'}
                        disabled={form.watch('is_birth_unknown')}
                      />
                      <Label>
                        <Checkbox {...form.register('is_birth_unknown')} />
                        <span className="text-[10px]">Неизвестно</span>
                      </Label>
                    </div>
                    <div className="w-full">
                      <Input
                        required
                        error={form.formState.errors.date_death?.message}
                        {...form.register('date_death')}
                        name="date_death"
                        type="number"
                        placeholder="2000"
                        label={'Год смерти'}
                        disabled={
                          form.watch('is_alive') ||
                          form.watch('is_death_unknown')
                        }
                      />
                      <div className="flex gap-3">
                        <Label className="mb-3">
                          <Checkbox {...form.register('is_death_unknown')} />
                          <span className="text-[10px]">Неизвестно</span>
                        </Label>
                        <Label>
                          <Checkbox {...form.register('is_alive')} />
                          <span className="text-[10px]">Жив</span>
                        </Label>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Input
                      required
                      label="Родной город"
                      className="w-full"
                      {...form.register('city')}
                    />
                    <Input
                      required
                      label="Звание"
                      className="w-full"
                      {...form.register('rank')}
                    />
                  </div>
                  <h5 className="text-2xl font-bold text-[#333] my-4">
                    Награды
                  </h5>
                  <MedalsList
                    medals={form.watch('medals', []) || []}
                    onDelete={(_, index) => removeMedal(index)}
                  />
                  <MedalsSelect
                    server_medals={serverMedals}
                    handleAdd={(medal) => {
                      const finded = serverMedals.find(
                        (item) => item.id === medal.value,
                      );
                      if (!finded)
                        return showErrorNotification(
                          'Не удалось добавить медаль.',
                        );
                      form.setValue('medals', [
                        ...(form.watch('medals') || []),
                        finded,
                      ]);
                    }}
                  />
                  <h5 className="text-2xl font-bold text-[#333] my-4">
                    История
                  </h5>
                  <Controller
                    name="history"
                    control={form.control}
                    defaultValue={item.history}
                    render={({ field: { onChange, value } }) => (
                      <Editor
                        className="mb-3"
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  <Input
                    required
                    label="Кем приходится ветерану"
                    className="w-full"
                    {...form.register('relative')}
                  />
                  <h5 className="text-2xl font-bold text-[#333] my-4">
                    Дополнительные фото
                  </h5>
                  {!!item.photo.slice(1).length && (
                    <PhotoProvider>
                      <div className="grid grid-cols-2 gap-4">
                        {item.photo.slice(1).map((el) => (
                          <PhotoView key={el.id} src={getServerLink(el.link)}>
                            <Image
                              className="w-full aspect-square object-cover mx-auto my-auto"
                              src={getServerLink(el.link)}
                              width={1000}
                              height={1000}
                              alt={''}
                            />
                          </PhotoView>
                        ))}
                      </div>
                    </PhotoProvider>
                  )}
                  <h5 className="text-2xl font-bold text-[#333] my-4">
                    Контакты
                  </h5>
                  <div className="flex gap-3">
                    <Input
                      required
                      label="Имя"
                      className="w-full"
                      {...form.register('contact_name')}
                    />
                    <Input
                      required
                      label="Фамилия"
                      className="w-full"
                      {...form.register('contact_surname')}
                    />
                    <Input
                      label="Отчество"
                      className="w-full"
                      {...form.register('contact_patronymic')}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Input
                      required
                      label="Email"
                      className="w-full"
                      {...form.register('contact_email')}
                    />
                    <Input
                      required
                      label="Telegram"
                      className="w-full"
                      {...form.register('contact_telegram')}
                    />
                  </div>
                </div>
              </div>
              <AlertDialog open={isConfirmOpen}>
                <AlertDialogContent
                  onFocusOutside={() => setIsConfirmOpen(false)}
                >
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Вы уверены, что хотите{' '}
                      {isChecked ? 'удалить' : 'отклонить'} анкету (
                      {getFullName(item)}
                      )?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription>
                    Данное действие отменить невозможно, анкета будет удалена
                    навсегда.
                  </AlertDialogDescription>
                  <AlertDialogFooter>
                    <Button
                      size="small"
                      theme="gray"
                      onClick={() => setIsConfirmOpen(false)}
                    >
                      <p className="text-black">Назад</p>
                    </Button>
                    <Button size="small" onClick={handleDelete}>
                      {isChecked ? 'Удалить' : 'Отклонить'}
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <DialogFooter className="sticky bottom-0">
                <Label>
                  <Checkbox {...form.register('addToMainPage')} />
                  <p>Добавить на главный экран</p>
                </Label>
                <Button
                  type="button"
                  className="!text-base bg-[#D9D9D9]"
                  onClick={() => setIsConfirmOpen(true)}
                >
                  <p className=" text-black">
                    {isChecked ? 'Удалить' : 'Отклонить'}
                  </p>
                </Button>
                <Button
                  type="button"
                  className="!text-base"
                  onClick={() => handleApprove(form.getValues())}
                >
                  {isChecked ? 'Обновить' : 'Одобрить'}
                </Button>
              </DialogFooter>
            </form>
          </FormProvider>
        )}
      </DialogContent>
    );
  },
);

AdminCardModal.displayName = 'AdminCardModal';

export default AdminCardModal;
