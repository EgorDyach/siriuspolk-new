import LoginForm from '@widgets/loginForm/ui/LoginForm';

export default async function LoginPage() {
  return (
    <div className="py-9 sm:py-24 min-h-[calc(90vh-40px-150px)]">
      <div className="container flex items-center flex-col">
        <h2 className="text-2xl font-semibold mb-3 md:text-4xl">
          Вход в панель администратора
        </h2>
        <LoginForm />
      </div>
    </div>
  );
}
