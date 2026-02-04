import { db } from "infra/db.js";
import { RegisterInput } from "./iam.types.js";

export class IAMDB {
    async saveUser(props: RegisterInput): Promise<number> {
        const [id] = await db('user').insert({
            email: props.email,
            password: props.password,
            name: props.name,
            birthday: props.birthday,
            isAgreedToTerms: props.isAgreedToTerms,
            createdAt: new Date(),
        });

        return id;
    }
}
