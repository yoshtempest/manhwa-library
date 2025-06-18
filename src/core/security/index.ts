import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "default_secret"; // Use uma variável de ambiente em produção

export default class SecurityHandler {

    static async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, SALT_ROUNDS);
    }

    static async verifyPassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    static generateTokenFromId(id: string, expiresIn: SignOptions["expiresIn"] = "1h"): string {
        return jwt.sign({ id }, JWT_SECRET, { expiresIn });
    }

    static getIdFromToken(token: string): string | null {
        try {
            const decoded = jwt.verify(token, JWT_SECRET) as { id?: string };
            return decoded.id ?? null;
        } catch {
            return null;
        }
    }
}

