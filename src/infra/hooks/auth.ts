import fastifyJwt from "@fastify/jwt";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import fastifyPlugin from "fastify-plugin";

declare module 'fastify' {
    interface FastifyInstance {
        authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>
    }
}

async function authPlugin(app: FastifyInstance) {
    app.register(fastifyJwt, {
        secret: app.config.JWT_SECRET
    })

    app.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            await request.jwtVerify()
        } catch (error) {
            reply.send(error)
        }
    })
}

export const auth = fastifyPlugin(authPlugin)