import { z } from 'zod';

export const loginSchema = z.object({
  username: z
    .string({ message: 'Username должен быть строкой.' })
    .nonempty('Username обязательный.'),
  password: z
    .string({ message: 'Пароль должен быть строкой.' })
    .nonempty('Пароль обязательный.'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
