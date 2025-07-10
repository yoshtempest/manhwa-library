import { SqliteDatabase } from "@/core/db";
import BookRepository from "@/db/repositories/book"
import { BookRequest, BookResponse } from "@/schemas/book";


class BookService {
    private bookRepository: BookRepository;

    constructor(dbSession: SqliteDatabase) {
        this.bookRepository = new BookRepository(dbSession);
    }
    // esse toResponse e fromRequest me parece muito com o que eu fiz no UserService
    // mas eu não fiz isso no models/book né
    async add(request: BookRequest): Promise<BookResponse> {
        const bookModel = BookRepository.mapRequestToModel(request);
        const newBook = await this.bookRepository.add(bookModel);
        return await this.bookRepository.mapModelToResponse(newBook);
    }

    async getAll(): Promise<BookResponse[]> {
        const books = await this.bookRepository.getAll();
        const responses: BookResponse[] = [];
        for (const book of books) {
            responses.push(await this.bookRepository.mapModelToResponse(book));
        }
        return responses;    }

    async getById(id: string): Promise<BookResponse | null> {
        const book = await this.bookRepository.getById(id);
        if (!book) {
            return null;
        }
        return await this.bookRepository.mapModelToResponse(book);
    }

    async update(id: string, request: BookRequest): Promise<BookResponse | null> {
        const existingBook = await this.bookRepository.getById(id);
        if (!existingBook) {
            return null;
        }
        Object.assign(existingBook, BookRepository.mapRequestToModel(request));
        await this.bookRepository.update(existingBook);
        return await this.bookRepository.mapModelToResponse(existingBook);
    }

    async delete(id: string): Promise<boolean> {
        const existingBook = await this.bookRepository.getById(id);
        if (!existingBook) {
            return false;
        }
        await this.bookRepository.delete(id);
        return true;
    }
}


export default BookService;