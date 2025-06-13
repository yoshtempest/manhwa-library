import { SqliteDatabase } from "@/core/db";
import { BookRequest, BookResponse } from "@/schemas/book";


class BookModel {
    constructor(
        public id: number = 0,
        public title: string,
        public author: string,
        public description: string,
        public genreId: number,
        public imagePath: string,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    // Adiciona um novo book ao banco de dados.
    async add(dbSession: SqliteDatabase): Promise<BookModel> {
        const result = await dbSession.run(
            `INSERT INTO book
            (
                title,
                author,
                description,
                genreID,
                imagePath,
                createdAt,
                updatedAt
            )
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                this.title,
                this.author,
                this.description,
                this.genreId,
                this.imagePath,
                this.createdAt.toISOString(),
                this.updatedAt.toISOString()
            ]
        );
        const bookId = result.lastID;
        if (typeof bookId !== "number") {
            throw new Error("Failed to retrieve the last inserted ID.");
        }
        return new BookModel(
            bookId,
            this.title,
            this.author,
            this.description,
            this.genreId,
            this.imagePath,
            this.createdAt,
            this.updatedAt
        );
    }

    // Atualiza um book existente.
    async update(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(
            `
                UPDATE books SET title = ?,
                author = ?,
                description = ?,
                genreID = ?,
                imagePath = ?,
                updatedAt = ?
                WHERE id = ?
            `,
            [
                this.title,
                this.author,
                this.description,
                this.genreId,
                this.imagePath,
                this.updatedAt.toISOString(),
                this.id,
            ]
        );
    }

    // Atualiza os dados do book.
    static async delete(dbSession: SqliteDatabase, id: string): Promise<void> {
        await dbSession.run(`DELETE FROM books WHERE id = ?`,
        [id]);
    }

    // Busca um book pelo ID.
    static async getById(dbSession: SqliteDatabase, id: number): Promise<BookModel | null> {
        const row = await dbSession.get(
            `SELECT * FROM books WHERE id = ?`, [id]
        );
        if (!row) return null;
        return BookModel.mapRowToModel(row);
    }

    // Retorna todos os books
    static async getAll(dbSession: SqliteDatabase): Promise<BookModel[]> {
        const rows = await dbSession.all(`SELECT * FROM books`);
        return rows.map((row: any) => this.mapRowToModel(row));
    }

        // Converte um bookRequest em BookModel
    static mapRequestToModel(request: BookRequest): BookModel {
        return new BookModel(
            0,
            request.title,
            request.author,
            request.genres,
            request.description,
            request.genre_id,
            request.note,
            request.image_path
        );
    }

    // Converte um BookModel em bookResponse
    static mapModelToResponse(model: BookModel): BookResponse {
        return {
            id: model.id,
            title: model.title,
            author: model.author,
            genre_id: model.genreId,
            description: model.description,
            // note: model.note, // nota não está no modelo, mas pode ser adicionada se necessário.
            image_path: model.imagePath
        };
    }

    // Mapeia uma linha do banco para o modelo
    static mapRowToModel(row: any): BookModel {
        return new BookModel(
            row.id,
            row.title,
            row.author,
            row.description,
            row.genre_id,
            row.image_path,
            new Date(row.created_at),
            new Date(row.updated_at)
        );
    }

    // Converte para JSON
    toJson(): any {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
            genreId: this.genreId,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        };
    }

    // Cria uma instância a partir do JSON
    static fromJson(json: any): BookModel {
        return new BookModel(
            json.id,
            json.title,
            json.author,
            json.description,
            json.genreId,
            json.imagePath,
            new Date(json.createdAt),
            new Date(json.updatedAt)
        );
    }
}


export default BookModel;