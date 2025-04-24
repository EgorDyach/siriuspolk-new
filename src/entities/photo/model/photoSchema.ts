import { z } from 'zod';

export const photoSchema = z.object({
  description: z
    .string({ message: 'Поле обязательное.' })
    .nonempty('Поле обязательное.'),
  date: z.date({ message: 'Значение должно быть датой.' }).nullable(),
  file: z.custom<FileList | undefined>().superRefine((files, ctx) => {
    if (!files || files.length === 0) {
      return ctx.addIssue({
        path: ['file'],
        message: 'Файл обязательный',
        code: 'custom',
      });
    }
  }),
});

export type PhotoSchemaType = z.infer<typeof photoSchema>;
