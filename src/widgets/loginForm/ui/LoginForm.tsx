'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchemaType } from '../model/loginSchema';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';
import { AxiosError } from 'axios';
import { showErrorNotification } from '@shared/lib/utils/notification';
import { requestLogin } from '../api/login';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginSchemaType) => {
    try {
      await requestLogin(values.username, values.password);
      router.push('/admin');
    } catch (e) {
      if (e instanceof AxiosError) return showErrorNotification(e.message);
      if (typeof e === 'string') return showErrorNotification(e);
      return showErrorNotification('Не удалось войти, попробуйте еще раз.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col items-center max-w-xl"
    >
      <Input
        {...register('username')}
        label={'Username'}
        required
        placeholder="Ваш username..."
        className="w-full"
      />
      <Input
        {...register('password')}
        label={'Пароль'}
        type="password"
        required
        placeholder="Ваш пароль..."
        className="w-full mb-3 md:mb-6"
      />
      <Button type="submit">Войти</Button>
    </form>
  );
};

export default LoginForm;
