import { renderHook, render } from '@testing-library/react';
import { ReactNode } from 'react';
import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormProps,
  DefaultValues,
} from 'react-hook-form';

const renderWithForm = <T extends FieldValues>(
  children: ReactNode = null,
  defaultValues: DefaultValues<T>, // Исправлено здесь
  options: UseFormProps<T> = {},
) => {
  const { result } = renderHook(() =>
    useForm<T>({ defaultValues, mode: 'onChange', ...options }),
  );
  render(<FormProvider {...result.current}>{children}</FormProvider>);
  return result.current;
};

export default renderWithForm;
