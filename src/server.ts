import fastify from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { auth } from "infra/hooks/auth.js";
import fastifyEnv from "@fastify/env";
import { iamRoutes } from "routes/shared/iam.js";
import { options } from "infra/config/environment.js";

const app = fastify({
    logger: {
        transport: {
            target: 'pino-pretty',
            options: {
                colorize: true,
                ignore: 'pid,hostname',
            }
        }
    }
}).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(iamRoutes, {
    prefix: '/api/iam'
})

const start = async () => {
    try {
        await app.register(fastifyEnv, options)

        await app.register(auth)

        await app.listen({
            port: app.config.PORT,
            host: app.config.HOST
        })
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()