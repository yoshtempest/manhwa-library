import { SqliteDatabase } from "@/core/db";


class BookModel {
    constructor(
        public id: number = 0,
        public title: string,
        public author: string,
        public description: string,
        public genreId: number,
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
                createdAt,
                updatedAt
            )
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                this.title,
                this.author,
                this.description,
                this.genreId,
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
                updatedAt = ?
                WHERE id = ?
            `,
            [
                this.title,
                this.author,
                this.description,
                this.genreId,
                this.updatedAt.toISOString(),
                this.id,
            ]
        );
    }

    // Atualiza os dados do book.
    async delete(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(`DELETE FROM books WHERE id = ?`,
        [this.id]);
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

    // Mapeia uma linha do banco para o modelo
    static mapRowToModel(row: any): BookModel {
        return new BookModel(
            row.id,
            row.title,
            row.author,
            row.description,
            row.genre_id,
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
            new Date(json.createdAt),
            new Date(json.updatedAt)
        );
    }
}


export default BookModel;