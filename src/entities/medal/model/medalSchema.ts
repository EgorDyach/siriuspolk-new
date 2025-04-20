import { z } from 'zod';

export const medalSchema = z.object({
  name: z
    .string({ message: 'Поле обязательное.' })
    .nonempty('Поле обязательное.'),
  photo_link: z
    .string({ message: 'Поле обязательное.' })
    .nonempty('Поле обязательное.')
    .url('Значение должно быть ссылкой.'),
});

export type MedalSchemaType = z.infer<typeof medalSchema>;
