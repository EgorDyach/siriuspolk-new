import HistoriesList from '@widgets/historiesList/ui/HistoriesList';
import { requestHistories } from '../api/histories';
import { filterNew } from '../model/filterNew';
import HistoriesSwiper from '@widgets/historiesSwiper/ui/HistoriesSwiper';

export default async function HistoriesPage() {
  const { details } = await requestHistories();
  const newItems = filterNew(details);
  return (
    <section className="py-[60px]">
      <div className="container !px-8">
        <h1 className="text-[40px] font-lora mb-[32px]">Истории</h1>
        {!!newItems.length && (
          <>
            <h2 className="text-[26px] font-lora mb-[32px] flex items-center">
              Новые
              <p className="ml-2 text-[16px]/[24px] aspect-square rounded-full bg-[#52545d] text-white max-w-[24px] text-center w-full">
                {newItems.length > 99 ? '99+' : newItems.length}
              </p>
            </h2>
            <HistoriesSwiper histories={newItems} />
          </>
        )}
        {!!newItems.length && (
          <>
            <h2 className="text-[26px] font-lora mb-[14px]">Все истории</h2>
          </>
        )}
        <HistoriesList histories={details} />
      </div>
    </section>
  );
}
