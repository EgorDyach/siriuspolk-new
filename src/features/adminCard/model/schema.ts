import { z } from 'zod';

export const adminSchema = z.object({
  history: z
    .string({ message: 'История обязательная.' })
    .nonempty({ message: 'История обязательная.' }),
});
