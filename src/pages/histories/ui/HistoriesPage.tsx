import HistoriesList from '@widgets/historiesList/ui/HistoriesList';
import { requestHistories } from '../api/histories';
export default async function HistoriesPage() {
  const { details } = await requestHistories();
  return (
    <section className="py-[100px]">
      <div className="container">
        <h1 className="text-[80px] font-lora mb-[32px]">Истории</h1>
        <HistoriesList histories={details} />
      </div>
    </section>
  );
}
