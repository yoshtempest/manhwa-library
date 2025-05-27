import { SqliteDatabase } from "@/core/db";
import BookModel from "@/models/book";
import { BookRequest, BookResponse } from "@/schemas/book";


class BookService {
    private dbSession: SqliteDatabase;

    constructor(dbSession: SqliteDatabase) {
        this.dbSession = dbSession;
    }
    // esse toResponse e fromRequest me parece muito com o que eu fiz no UserService
    // mas eu não fiz isso no models/book né
    async add(request: BookRequest): Promise<BookResponse> {
        const bookModel = BookModel.fromRequest(request);
        const newBook = await bookModel.add(this.dbSession);
        return BookModel.toResponse(newBook);
    }

    async getAll(): Promise<BookResponse[]> {
        const books = await BookModel.getAll(this.dbSession);
        return books.map(BookModel.toResponse);
    }

    async getById(id: number): Promise<BookResponse | null> {
        const book = await BookModel.getById(this.dbSession, id);
        if (!book) {
            return null;
        }
        return BookModel.toResponse(book);
    }

    async update(id: number, request: BookRequest): Promise<BookResponse | null> {
        const bookModel = BookModel.fromRequest(request);
        const updatedBook = await bookModel.update(this.dbSession, id);
        if (!updatedBook) {
            return null;
        }
        return BookModel.toResponse(updatedBook);
    }

    async delete(id: number): Promise<boolean> {
        const result = await BookModel.delete(this.dbSession, id);
        return result;
    }
}