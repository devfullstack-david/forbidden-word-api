import { FastifyReply, FastifyRequest } from "fastify";
import { RegisterInput } from "./iam.types.js";
import { encryptPassword } from "infra/config/hash.js";
import { IAMDB } from "./iam.db.js";

const repository = new IAMDB();

export class IAMController {
    async login(request: FastifyRequest, reply: FastifyReply) {
        return reply.status(200).send('Login')
    }

    async register(request: FastifyRequest, reply: FastifyReply) {
        try {
            const { email, password, name, birthday, isAgreedToTerms } = request.body as RegisterInput
            const hashedPassword = await encryptPassword(password)

            const userId = await repository.saveUser({
                email,
                password: hashedPassword,
                name,
                birthday,
                isAgreedToTerms,
                confirmPassword: password
            })

            return reply.status(200).send({ message: 'User registered successfully', userId })
        } catch (error) {
            request.log.error(error)
            return reply.status(500).send('Internal server error')
        }
    }
}