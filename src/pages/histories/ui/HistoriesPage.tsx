import HistoriesList from '@widgets/historiesList/ui/HistoriesList';
import { requestHistories } from '../api/histories';
import { filterNew } from '../model/filterNew';
import HistoriesSwiper from '@widgets/historiesSwiper/ui/HistoriesSwiper';

export default async function HistoriesPage() {
  const { details } = await requestHistories();
  const newItems = filterNew(details);
  return (
    <section className="py-[100px]">
      <div className="container">
        <h1 className="text-[80px] font-lora mb-[32px]">Истории</h1>
        {!!newItems.length && (
          <>
            <h2 className="text-[40px] font-lora mb-[32px] flex items-center">
              Новые
              <p className="ml-2 text-[20px]/[40px] aspect-square rounded-full bg-[#52545d] text-white max-w-[40px] text-center w-full">
                {newItems.length > 99 ? '99+' : newItems.length}
              </p>
            </h2>
            <HistoriesSwiper histories={newItems} />
          </>
        )}
        {!!newItems.length && (
          <>
            <h2 className="text-[40px] font-lora mb-[32px]">Все истории</h2>
          </>
        )}
        <HistoriesList histories={details} />
      </div>
    </section>
  );
}
