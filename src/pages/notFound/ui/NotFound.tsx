import Link from 'next/link';

export default async function NotFound() {
  return (
    <section className="pt-10 xl:pt-[100px] h-[65vh]">
      <div className="container">
        <h1 className="text-4xl  font-bold font-lora xl:text-7xl mb-4 xl:mb-8">
          Страница не найдена
        </h1>
        <p className="text-[14px] xl:text-2xl max-w-[600px] mb-8 xl:mb-24">
          Страница, которую вы ищете, не существует. Возможно, она была
          перемещена или удалена. Попробуйте перейти на главную.
        </p>
        <Link
          className="text-[14px] py-3.5 px-8 text-white outline-offset-[-3px] font-lora xl:text-2xl/[1] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] bg-[#343434] xl:py-[36px] xl:px-[65px]"
          href={'/'}
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
