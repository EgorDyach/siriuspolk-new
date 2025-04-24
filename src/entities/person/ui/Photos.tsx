'use client';

import { showErrorNotification } from '@shared/lib/utils/notification';
import { useRef } from 'react';
import { useDragAndDrop } from '@shared/lib/hooks/useDragAndDrop';
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from '../model/constants';
import ImagePlus from '@shared/ui/icons/ImagePlus';
import Image from 'next/image';
import { X } from 'lucide-react';
import { filelistToFileArray } from '../model/helpers';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { removeDuplicates } from '@shared/lib/utils/removeDuplicates';
import { useFormStore } from '../model/store';
import { useRouter } from 'next/navigation';
import { Button } from '@shared/ui/Button';

export default function Photos() {
  const router = useRouter();
  const dragZoneRef = useRef<HTMLLabelElement | null>(null);
  const { photos, setPhotos } = useFormStore();
  const handleSetFiles = (files: File[]) => {
    if (files.length > 5)
      showErrorNotification('Максимальное число загружаемых файлов – 5.');
    files = files.slice(0, 5);
    removeDuplicates(files)
      .slice(0, 5)
      .forEach((file) => {
        if (!ACCEPTED_IMAGE_TYPES.includes(file.type))
          showErrorNotification(
            `Неподдерживаемый тип файла ${file.name}. Поддерживаемые: ${ACCEPTED_IMAGE_TYPES.map((el) => `.${el}`).join(', ')}`,
          );
        else if (file.size > MAX_FILE_SIZE * 1024 * 1024)
          showErrorNotification(
            `Файл ${file.name} превышает максимальный размер – ${MAX_FILE_SIZE} МБ.`,
          );
      });

    setPhotos(
      [
        ...photos,
        ...files.filter(
          (file) =>
            ACCEPTED_IMAGE_TYPES.includes(file.type) &&
            file.size <= MAX_FILE_SIZE * 1024 * 1024,
        ),
      ].slice(0, 5),
    );
  };

  const handleSubmit = () => {
    router.push('/form/contacts');
  };

  const handleCancel = () => {
    router.push('/form/history');
  };

  const handleRemoveItem = (removable: File) =>
    setPhotos(photos.filter((file) => file !== removable));

  useDragAndDrop(dragZoneRef.current, handleSetFiles, 'test');

  return (
    <section className="pb-[60px]">
      <h2 className="text-[20px] font-lora mb-[16px] sm:text-2xl sm:mb-5 xl:mb-8 xl:text-5xl">
        Дополнительные фото
      </h2>
      <p className="text-[14px] max-w-[830px] mb-[12px] xl:text-[17px]">
        Если у вас есть ещё фото, связанные с вашим предком, добавляйте их.
        Подойдут любые: семейные, домашние, с работы, фото документов и т.д.
      </p>
      <PhotoProvider>
        <ul className="mb-9 flex flex-wrap gap-6">
          {photos.map((file, index) => (
            <div key={index} className="relative inline-block">
              <PhotoView src={URL.createObjectURL(file)}>
                <Image
                  className="aspect-[1/1.4] object-cover basis-[30%] px-5 h-80"
                  src={URL.createObjectURL(file)}
                  alt=""
                  width={400}
                  height={400}
                />
              </PhotoView>
              <button
                onClick={() => handleRemoveItem(file)}
                className="absolute top-2 right-2 size-10 bg-[#52545d] rounded-full flex items-center justify-center cursor-pointer"
                type="button"
              >
                <X color="white" />
              </button>
            </div>
          ))}
        </ul>
      </PhotoProvider>
      <label
        className="w-full h-[120px] items-center border-4 border-[#B3B3B3] flex p-3"
        ref={dragZoneRef}
      >
        <input
          name="photos"
          onChange={(e) => handleSetFiles(filelistToFileArray(e.target.files))}
          type="file"
          multiple
          accept={ACCEPTED_IMAGE_TYPES.join(', ')}
          className="size-[1px]"
        />
        <ImagePlus size={50} color="#B3B3B3" />
        <p className="ml-5 text-[#B3B3B3]">
          <span className="underline text-black underline-offset-[6px]">
            Добавьте
          </span>{' '}
          или{' '}
          <span className="underline text-black underline-offset-[6px]">
            перетащите
          </span>{' '}
          фото сюда.
        </p>
      </label>
      <div className="w-full flex justify-center mt-7 gap-[3%]">
        <Button onClick={handleCancel} className="bg-[#D9D9D9]">
          <p className="text-black text-[14px]">Назад</p>
        </Button>
        <Button onClick={handleSubmit}>
          <p className="text-[14px]">Сохранить</p>
        </Button>
      </div>
    </section>
  );
}
