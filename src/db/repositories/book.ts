import { SqliteDatabase } from "@/core/db";
import BookModel from "../models/book";
import { BookRequest, BookResponse } from "@/schemas/book";
import { GenreResponse } from "@/schemas/genre";

export default class BookRepository{
    constructor(
        private dbSession: SqliteDatabase
    ) {}

        // Adiciona um novo book ao banco de dados.
    async add(model: BookModel): Promise<BookModel> {
        const result = await this.dbSession.run(
            `INSERT INTO books
            (
                title,
                author,
                description,
                note,
                image_path,
                created_at,
                updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                model.title,
                model.author,
                model.description,
                model.note,
                model.image_path,
                model.created_at.toISOString(),
                model.updated_at.toISOString()
            ]
        );
        const bookId = result.lastID;
        if (typeof bookId !== "string") {
            throw new Error("Failed to retrieve the last inserted ID.");
        }
        return new BookModel(
            bookId,
            model.title,
            model.author,
            model.description,
            model.note,
            model.image_path,
            model.created_at,
            model.updated_at
        );
    }

    // Atualiza um book existente.
    async update(model: BookModel): Promise<void> {
        await this.dbSession.run(
            `
                UPDATE books SET title = ?,
                author = ?,
                description = ?,
                note = ?,
                image_path = ?,
                updated_at = ?
                WHERE id = ?
            `,
            [
                model.title,
                model.author,
                model.description,
                model.image_path,
                model.updated_at.toISOString(),
                model.id,
            ]
        );
    }

    async delete(id: string): Promise<void> {
        await this.dbSession.run(`DELETE FROM books WHERE id = ?`,
        [id]);
    }

    async getById(id: string): Promise<BookModel | null> {
        const row = await this.dbSession.get(
            `SELECT * FROM books WHERE id = ?`, [id]
        );
        if (!row) return null;
        return BookRepository.mapRowToModel(row);
    }

    // Retorna todos os books
    async getAll(): Promise<BookModel[]> {
        const rows = await this.dbSession.all(`SELECT * FROM books`);
        return rows.map((row: any) => BookRepository.mapRowToModel(row));
    }

        // Converte um bookRequest em BookModel
    static mapRequestToModel(request: BookRequest): BookModel {
        return new BookModel(
            "", // ID será gerado pelo banco de dados
            request.title,
            request.author,
            request.description,
            request.note || 0,
            request.image_path ? "string" : "",
            new Date(), // Define a data de criação como agora
            new Date() // Define a data de atualização como agora
        );
    }

    static mapRowToModel(row: any): BookModel {
        return new BookModel(
            row.id,
            row.title,
            row.author,
            row.description,
            row.note || 0,
            row.image_path,
            new Date(row.created_at),
            new Date(row.updated_at)
        );
    }

    async mapModelToResponse(model: BookModel, user_id?: string): Promise<BookResponse> {
        
        const genres = await this.dbSession.all(
            `SELECT g.id, g.name g.created_at g.updated_at 
            FROM genres g
            JOIN book_genres bg 
            ON g.id = bg.genre_id
            WHERE bg.book_id = ?`, [model.id]
        );
        let is_favorite = false;
        if (user_id){
            const favorite = await this.dbSession.get(
                `SELECT * FROM favorites WHERE user_id = ? AND book_id = ?`, 
                [user_id, model.id]
            );
            if (favorite) {
                is_favorite = true;
            }
        }
    
        const genresResponse: Array<GenreResponse> = []

        for (const genre of genres) {
            genresResponse.push({
                id: genre.id,
                name: genre.name,
                created_at: new Date(genre.created_at).toISOString(),
                updated_at: new Date(genre.updated_at).toISOString()
            });
        }

        const response: BookResponse = {
            id: model.id,
            title: model.title,
            author: model.author,
            genres: genresResponse,
            is_favorite: is_favorite,
            description: model.description,
            note: model.note,
            image_path: model.image_path
        };

        return response;

    }
}