import { randomUUID } from "crypto";

export function idGenerator(): string {
    return randomUUID();
}

export function bookIdGenerator(): string {
    return `book-${idGenerator()}`;
}

export function userIdGenerator(): string {
    return `user-${idGenerator()}`;
}

export function genreIdGenerator(): string {
    return `genre-${idGenerator()}`;
}

export function favoriteIdGenerator(): string {
    return `favorite-${idGenerator()}`;
}

export function bookLikeIdGenerator(): string {
    return `booklike-${idGenerator()}`;
}

export function bookGenreIdGenerator(): string {
    return `bookgenre-${idGenerator()}`;
}