import HistoriesList from '@widgets/historiesList/ui/HistoriesList';
import { requestHistories } from '../api/histories';
import { filterNew } from '../model/filterNew';
import HistoriesSwiper from '@widgets/historiesSwiper/ui/HistoriesSwiper';

export default async function HistoriesPage() {
  const details = await requestHistories();
  const newItems = filterNew(details);
  return (
    <section className="py-[60px] md:py-20 2xl:py-24">
      <div className="container px-8 xl:px-[130px]">
        <h1 className="text-[40px] font-lora mb-[32px] xl:text-6xl xl:mb-10 2xl:text-[66px]">
          Истории
        </h1>
        {!!newItems.length && (
          <>
            <h2 className="text-[26px] sm:text-3xl xl:text-5xl font-lora mb-[32px] flex items-center">
              Новые
              <p className="ml-2 text-[16px]/[24px] max-w-[24px] aspect-square rounded-full bg-[#52545d] text-white text-center w-full sm:text-[20px]/[30px] sm:max-w-[30px] xl:text-[28px]/[42px] xl:max-w-[42px] xl:ml-3.5">
                {newItems.length > 99 ? '99+' : newItems.length}
              </p>
            </h2>
            <HistoriesSwiper histories={newItems} />
          </>
        )}
        {!!newItems.length && (
          <>
            <h2 className="text-[26px] sm:text-3xl xl:text-5xl font-lora mb-[14px]">
              Все истории
            </h2>
          </>
        )}
        <HistoriesList histories={details} />
      </div>
    </section>
  );
}
