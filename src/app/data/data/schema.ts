import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  Jumlah: z.number(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  createdAt: z.string(),
  NonSK: z.number(),
  SL: z.number(),
  JK: z.number(),
})

export type Task = z.infer<typeof taskSchema>
