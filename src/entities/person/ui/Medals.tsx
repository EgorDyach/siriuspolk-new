'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@shared/ui/Button';
import { useFormStore } from '@entities/person/model/store';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { useRouter } from 'next/navigation';
import MedalsSelect from './MedalsSelect';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { MedalOption } from '../model/types';

export default function Medals() {
  const router = useRouter();
  const { setMedals, server_medals, medals } = useFormStore();
  const handleAdd = (el: MedalOption) => {
    if (!server_medals) return;
    const item = server_medals.find((v) => v.name === el.text);
    if (!item) return showErrorNotification('Не удалось добавить награду.');
    setMedals([...medals, item]);
  };

  const handleRemove = (index: number) => {
    setMedals([
      ...medals.slice(0, index),
      ...medals.slice(index + 1, medals.length),
    ]);
  };

  const handleSubmit = () => {
    router.push('/form/history');
  };

  const handleCancel = () => {
    router.push('/form/main');
  };

  return (
    <section className="pb-[20px]">
      <h2 className="text-[20px] font-lora mb-[16px] sm:text-2xl sm:mb-5 xl:mb-8 xl:text-5xl">
        Награды
      </h2>
      <PhotoProvider>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {medals.map((el, index) => (
            <li
              key={index}
              className="gap-6 flex items-center flex-col justify-between relative"
            >
              <PhotoView src={el.photo_link}>
                <Image
                  src={el.photo_link}
                  alt={el.name}
                  width={200}
                  height={300}
                  className="h-28 text-center object-contain"
                />
              </PhotoView>
              <p className="text-[10px] mb-6 font-medium text-center">
                {el.name}
              </p>
              <button
                type="button"
                onClick={() => handleRemove(index)}
                className="absolute top-2 right-2 cursor-pointer bg-[#52545d] size-5 p-1 rounded-full flex items-center justify-center"
              >
                <X color="white" />
              </button>
            </li>
          ))}
        </ul>
      </PhotoProvider>
      <MedalsSelect handleAdd={handleAdd} server_medals={server_medals || []} />
      <div className="w-full flex justify-center mt-7 gap-[30px]">
        <Button onClick={handleCancel} className="bg-[#D9D9D9]">
          <p className="text-black text-[14px]">Назад</p>
        </Button>
        <Button className="text-[14px]" onClick={handleSubmit}>
          Сохранить
        </Button>
      </div>
    </section>
  );
}
