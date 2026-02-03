import { FastifyReply, FastifyRequest } from "fastify";

export class IAMController {
    async login(request: FastifyRequest, reply: FastifyReply) {
        return reply.status(200).send('Login')
    }
}