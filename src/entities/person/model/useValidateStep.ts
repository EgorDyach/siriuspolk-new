import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { ZodSchema } from 'zod';
import { useFormStore } from './store';

type ValidationStep = {
  schema: ZodSchema;
  data: unknown;
  redirectTo: string;
};

export const useValidateStep = (validations: ValidationStep[]) => {
  const router = useRouter();
  const { setErrors } = useFormStore();

  return useCallback(() => {
    for (const { schema, data, redirectTo } of validations) {
      const result = schema.safeParse(data);
      console.log(data, result);
      if (!result.success) {
        const errorMessages = Object.fromEntries(
          Object.entries(result.error.flatten().fieldErrors).map(
            ([key, value]) => [key, value?.[0] || 'Неизвестная ошибка...'],
          ),
        );
        console.log(errorMessages);
        setErrors(errorMessages);
        router.replace(redirectTo);
        return false;
      }
    }
    return true;
  }, [router, validations, setErrors]);
};
