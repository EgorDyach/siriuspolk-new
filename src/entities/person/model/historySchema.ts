import { z } from 'zod';

export const HistorySchema = z.object({
  content: z
    .string({ message: 'История обязательная.' })
    .nonempty({ message: 'История обязательная.' }),
  relative: z
    .string({ message: 'Поле обязательное.' })
    .nonempty({ message: 'Поле обязательное.' }),
});

export type HistoryValues = z.infer<typeof HistorySchema>;
