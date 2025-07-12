import { SqliteDatabase } from "@/core/db";
import FavoriteModel from "../models/favorite";


export default class FavoriteRepository{

    constructor(
        private dbSession: SqliteDatabase
    ) {}

        async add(model: FavoriteModel): Promise<FavoriteModel> {
        const result = await this.dbSession.run(
            `INSERT INTO favorites
            (
                user_id,
                book_id,
                created_at,
            )
            VALUES (?, ?, ?)`,
            [
                model.user_id,
                model.book_id,
                model.created_at.toISOString(),
            ]
        );
        const favoriteId = result.lastID;
        if (typeof favoriteId !== "string") {
            throw new Error("Failed to retrieve the last inserted ID.");
        }
        return new FavoriteModel(
            favoriteId,
            model.user_id,
            model.book_id,
            model.created_at
        );
    }

    async delete(favorite_id: string): Promise<void> {
        await this.dbSession.run(
            `DELETE FROM favorites WHERE id = ?`,
            [favorite_id]
        );
    }

    async getById(favorite_id: string): Promise<FavoriteModel | null> {
        const result = await this.dbSession.get(
            `SELECT * FROM favorites WHERE id = ?`,
            [favorite_id]
        );
        if (!result) {
            return null;
        }
        return new FavoriteModel(
            result.id,
            result.user_id,
            result.book_id,
            new Date(result.created_at)
        );
    }

    async getByUserId(user_id: string): Promise<FavoriteModel[]> {
        const results = await this.dbSession.all(
            `SELECT * FROM favorites WHERE user_id = ?`,
            [user_id]
        );
        return results.map(result => new FavoriteModel(
            result.id,
            result.user_id,
            result.book_id,
            new Date(result.created_at)
        ));
    }
}