import { randomUUID } from "crypto";

export function idGenerator(): string {
    return randomUUID();
}