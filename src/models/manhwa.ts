import { SqliteDatabase } from "@/core/db";


class ManhwaModel {
    constructor(
        public id: number = 0,
        public title: string,
        public author: string,
        public description: string,
        public genreId: number,
        public createdAt: Date,
        public updatedAt: Date
    ) {}

    // Adiciona um novo manhwa ao banco de dados.
    async add(dbSession: SqliteDatabase): Promise<ManhwaModel> {
        const result = await dbSession.run(
            `INSERT INTO manhwa
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
        const manhwaId = result.lastID;
        if (typeof manhwaId !== "number") {
            throw new Error("Failed to retrieve the last inserted ID.");
        }
        return new ManhwaModel(
            manhwaId,
            this.title,
            this.author,
            this.description,
            this.genreId,
            this.createdAt,
            this.updatedAt
        );
    }

    // Atualiza um manhwa existente.
    async update(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(
            `
                UPDATE manhwas SET title = ?,
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

    // Atualiza os dados do manhwa.
    async delete(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(`DELETE FROM manhwas WHERE id = ?`,
        [this.id]);
    }

    // Busca um manhwa pelo ID.
    static async getById(dbSession: SqliteDatabase, id: number): Promise<ManhwaModel | null> {
        const row = await dbSession.get(
            `SELECT * FROM manhwas WHERE id = ?`, [id]
        );
        if (!row) return null;
        return ManhwaModel.mapRowToModel(row);
    }

    // Retorna todos os manhwas
    static async getAll(dbSession: SqliteDatabase): Promise<ManhwaModel[]> {
        const rows = await dbSession.all(`SELECT * FROM manhwas`);
        return rows.map((row: any) => this.mapRowToModel(row));
    }

    // Mapeia uma linha do banco para o modelo
    static mapRowToModel(row: any): ManhwaModel {
        return new ManhwaModel(
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
    static fromJson(json: any): ManhwaModel {
        return new ManhwaModel(
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


export default ManhwaModel;