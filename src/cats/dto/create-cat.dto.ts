import { z } from 'zod';

export const createCatSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type CreateCatDto = z.infer<typeof createCatSchema>;
