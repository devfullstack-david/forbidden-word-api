import { z } from "zod";

export const environmentSchema = z.object({
    HOST: z.string(),
    PORT: z.coerce.number().default(8021),
    USER: z.string(),
    PASSWORD: z.string(),
    DATABASE: z.string(),
})

declare module 'fastify' {
  interface FastifyInstance {
    config: z.infer<typeof environmentSchema>;
  }
}

export const options = {
    confKey: 'config',
    schema: {
        type: 'object',
        required: ['HOST', 'USER', 'PASSWORD', 'DATABASE'],
        properties: {
            HOST: { type: 'string' },
            PORT: { type: 'number', default: 8021 },
            USER: { type: 'string' },
            PASSWORD: { type: 'string' },
            DATABASE: { type: 'string' }
        }
    },
    dotenv: true,
}