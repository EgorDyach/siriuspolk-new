'use client';
import AdminCard from '@features/adminCard/ui/AdminCard';
import { useAdminStore } from '@entities/admin/model/store';

const UncheckedPersons = () => {
  const { uncheckedPersons, medals } = useAdminStore();

  return (
    <div className="">
      <h3 className="text font-semibold md:text-2xl mb-8">
        Непросмотренные истории
      </h3>
      {uncheckedPersons === null && (
        <div className="text-center w-full">Загрузка...</div>
      )}
      {uncheckedPersons !== null && (
        <div className="grid grid-cols-1 gap-4 2sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {uncheckedPersons.map((el) => (
            <AdminCard
              serverMedals={medals}
              isChecked={false}
              key={el.id}
              item={el}
            />
          ))}
        </div>
      )}
      {uncheckedPersons !== null && !uncheckedPersons.length && (
        <span className="text-[#777] italic">Нет непросмотренных историй.</span>
      )}
    </div>
  );
};

export default UncheckedPersons;
