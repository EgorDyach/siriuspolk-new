import Link from 'next/link';

export default async function NotFound() {
  return (
    <section className="pt-[120px] h-[65vh]">
      <div className="container">
        <h1 className="font-bold font-lora text-7xl mb-8">
          Страница не найдена
        </h1>
        <p className="text-2xl max-w-[600px] mb-32">
          Страница, которую вы ищете, не существует. Возможно, она была
          перемещена или удалена. Попробуйте перейти на главную.
        </p>
        <Link
          className=" text-white outline-offset-[-3px] font-lora text-2xl/[1] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] bg-[#343434] py-[36px] px-[65px]"
          href={'/'}
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
