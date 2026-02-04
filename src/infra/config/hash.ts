import { compare, genSalt, hash } from "bcryptjs";

export async function encryptPassword(password: string): Promise<string> {
    const salt = await genSalt(10)
    return hash(password, salt)
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
    return compare(password, hash)
}