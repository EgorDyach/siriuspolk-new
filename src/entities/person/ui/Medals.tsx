'use client';
import { Plus, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@shared/ui/Button';
import { useFormStore } from '@entities/person/model/store';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from '@shared/ui/select';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Medals() {
  const router = useRouter();
  const { setMedals, server_medals, medals } = useFormStore();

  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = (el: string) => {
    const item = server_medals.find((v) => v.id.toString() === el);
    if (!item) return showErrorNotification('Не удалось добавить награду.');
    setMedals([...medals, item]);
    setIsOpen(true);
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

  return (
    <section className="pb-[60px]">
      <h2 className="text-[42px] font-lora mb-[6px]">Награды</h2>
      <ul className="flex flex-wrap">
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
      <Select
        onOpenChange={(open) => setIsOpen(open)}
        open={isOpen}
        onValueChange={(el) => handleAdd(el)}
      >
        <SelectTrigger size="auto" className="w-full">
          <div className="w-full p-10">
            <p className="flex items-center w-full p-5">
              <Plus className="mr-5 size-[50px]" />
              <span className="text-4xl">Выбрать награду</span>
            </p>
          </div>
        </SelectTrigger>
        <SelectContent>
          {server_medals.map(({ src, name, id }) => (
            <SelectItem key={id} value={id.toString()}>
              <Image
                className="size-auto"
                src={src}
                alt={name}
                width={50}
                height={50}
              />
              <p>{name}</p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleSubmit}>Сохранить</Button>
    </section>
  );
}
