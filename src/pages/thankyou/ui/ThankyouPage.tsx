import Link from 'next/link';

export default async function ThankyouPage() {
  return (
    <section className="py-[60px]">
      <div className="container !px-8 text-center">
        <h1 className="text-3xl font-bold font-lora mb-[16px]">
          Спасибо за участие!
        </h1>
        <p className="text-[20px] mb-10">
          Мы обязательно свяжемся с вами, когда вашу историю проверят.
        </p>
        <Link
          className=" text-white outline-offset-[-3px] font-lora text-[16px]/[1] relative transition-all focus:outline-white focus:outline-3 hover:text-[#989898] data-[active=true]:bg-[#494E53] bg-[#343434] py-[17px] px-[30px]"
          href={'/'}
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
