'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@shared/ui/Button';
import { useFormStore } from '@entities/person/model/store';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { useRouter } from 'next/navigation';
import MedalsSelect, { MedalOption } from './MedalsSelect';
import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function Medals() {
  const router = useRouter();
  const { setMedals, server_medals, medals } = useFormStore();
  const handleAdd = (el: MedalOption) => {
    console.log(el);
    const item = server_medals.find((v) => v.id === el.value);
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
      <h2 className="text-[20px] font-lora mb-[6px]">Награды</h2>
      <PhotoProvider>
        <ul className="grid grid-cols-2">
          {medals.map((el, index) => (
            <li
              key={index}
              className="gap-6 flex items-center flex-col justify-between relative"
            >
              <PhotoView src={el.src}>
                <Image
                  src={el.src}
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
      <MedalsSelect handleAdd={handleAdd} server_medals={server_medals} />
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
