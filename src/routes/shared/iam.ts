import { FastifyInstance } from "fastify";
import { IAMController } from "modules/iam/iam.controller.js";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { LoginSchema, RegisterSchema } from "modules/iam/iam.types.js";

const iamController = new IAMController()

export async function iamRoutes(app: FastifyInstance) {
    const api = app.withTypeProvider<ZodTypeProvider>();

    api.post('/iam/login', { 
        schema: {
            body: LoginSchema
        } 
    }, async (request, reply) => {
        return iamController.login(request, reply)
    });

    api.post('/iam/register', {
        schema: {
            body: RegisterSchema
        }
    }, async (request, reply) => {
        return iamController.register(request, reply)
    })
}