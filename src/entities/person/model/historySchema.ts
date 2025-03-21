import { z } from 'zod';

export const HistorySchema = z.object({
  content: z
    .string({ message: 'История обязательная.' })
    .nonempty({ message: 'История обязательная.' }),
});

export type HistoryValues = z.infer<typeof HistorySchema>;
