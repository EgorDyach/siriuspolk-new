import { renderHook, render, RenderResult } from '@testing-library/react';
import { ReactNode } from 'react';
import {
  useForm,
  FormProvider,
  FieldValues,
  UseFormProps,
  DefaultValues,
  UseFormReturn,
} from 'react-hook-form';

const renderWithForm = <T extends FieldValues>(
  children: ReactNode = null,
  defaultValues: DefaultValues<T>,
  options: UseFormProps<T> = {},
): [UseFormReturn<T, unknown, undefined>, RenderResult] => {
  const { result } = renderHook(() =>
    useForm<T>({ defaultValues, mode: 'onChange', ...options }),
  );
  const utils = render(
    <FormProvider {...result.current}>{children}</FormProvider>,
  );
  return [result.current, utils];
};

export default renderWithForm;
