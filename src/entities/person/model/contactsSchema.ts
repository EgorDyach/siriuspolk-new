import { z } from 'zod';

export const ContactsSchema = z.object({
  name: z.string().min(2, { message: 'Минимальная длина - 2 символа' }),
  surname: z.string().min(2, { message: 'Минимальная длина - 2 символа' }),
  lastname: z.string().nullable(),
  tg: z
    .string()
    .min(2, { message: 'Минимальная длина - 2 символа' })
    .regex(new RegExp('@?'), {
      message: 'Неверный формат ника, введите в формате @example.',
    }),
  email: z.string().email({
    message: 'Неверный формат Email, введите в формате example@mail.ru',
  }),
});

export type ContactsSchemaValues = z.infer<typeof ContactsSchema>;
