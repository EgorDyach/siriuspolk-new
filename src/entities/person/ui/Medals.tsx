'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@shared/ui/Button';
import { useFormStore } from '@entities/person/model/store';
import {
  showErrorNotification,
  showSuccessNotification,
} from '@shared/lib/utils/notification';
import { useRouter } from 'next/navigation';
import MedalsSelect from './MedalsSelect';

export default function Medals() {
  const router = useRouter();
  const { setMedals, server_medals, medals } = useFormStore();

  const handleAdd = (el: string) => {
    const item = server_medals.find((v) => v.id.toString() === el);
    if (!item) return showErrorNotification('Не удалось добавить награду.');
    setMedals([...medals, item]);
    showSuccessNotification(`Добавлена награда «${item.name}»`);
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
    <section className="pb-[60px]">
      <h2 className="text-[42px] font-lora mb-[6px]">Награды</h2>
      <ul className="flex flex-wrap mb-8">
        {medals.map((el, index) => (
          <li
            key={index}
            className="basis-[21%] flex items-center flex-col justify-between relative"
          >
            <Image
              src={el.src}
              alt={el.name}
              width={200}
              height={300}
              className="max-w-[200px] text-center"
            />
            <p className="text-[24px] font-medium text-center">{el.name}</p>
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 cursor-pointer bg-[#52545d] size-10 rounded-full flex items-center justify-center"
            >
              <X color="white" />
            </button>
          </li>
        ))}
      </ul>
      <MedalsSelect handleAdd={handleAdd} server_medals={server_medals} />
      <div className="w-full flex justify-center mt-7 gap-[3%]">
        <Button onClick={handleCancel} className="bg-[#D9D9D9]">
          <p className="text-black">Назад</p>
        </Button>
        <Button onClick={handleSubmit}>Сохранить</Button>
      </div>
    </section>
  );
}
