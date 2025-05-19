import { SqliteDatabase } from "@/core/db";

class UserModel {
  constructor(
    public id: number = 0,
    public username: string,
    public email: string,
    public password: string,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

    async add(dbSession: SqliteDatabase): Promise<UserModel> {

        const result = await dbSession.run(
            `INSERT INTO users (username, email, password, active, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`,
            [this.username, this.email, this.password, this.active, this.createdAt.toISOString(), this.updatedAt.toISOString()]
        );
        const userId = result.lastID;
        if (typeof userId !== "number") {
            throw new Error("Failed to retrieve last inserted user ID.");
        }
        return new UserModel(
            userId,
            this.username,
            this.email,
            this.password,
            this.active,
            this.createdAt,
            this.updatedAt
        );
    }

    async update(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(
            `UPDATE users SET username = ?, email = ?, password = ?, active = ?, updated_at = ? WHERE id = ?`,
            [this.username, this.email, this.password, this.active, this.updatedAt.toISOString(), this.id]
        );
    }
    async delete(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(
            `DELETE FROM users WHERE id = ?`,
            [this.id]
        );
    }
    static async getById(dbSession: SqliteDatabase, id: string): Promise<UserModel | null> {
        const row = await dbSession.get(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );
        if (!row) {
            return null;
        }
        return UserModel.mapRowToModel(row);
    }
    static async getAll(dbSession: SqliteDatabase): Promise<UserModel[]> {
        const rows = await dbSession.all(`SELECT * FROM users`);
        return rows.map((row: any) => {
            return this.mapRowToModel(row);
        });
    }
    static async getByEmail(dbSession: SqliteDatabase, email: string): Promise<UserModel | null> {
        const row = await dbSession.get(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );
        if (!row) {
            return null;
        }
        return this.mapRowToModel(row);
    }

    static mapRowToModel(row: any): UserModel {
        return new UserModel(
            row.id,
            row.username,
            row.email,
            row.password,
            row.active,
            new Date(row.created_at),
            new Date(row.updated_at)
        );
    }

    toJson(): any {
        return {
        id: this.id,
        username: this.username,
        email: this.email,
        password: this.password,
        active: this.active,
        createdAt: this.createdAt.toISOString(),
        updatedAt: this.updatedAt.toISOString(),
        };
    }

  static fromJson(json: any): UserModel {
    return new UserModel(
      json.id,
      json.username,
      json.email,
      json.password,
      json.active,
      new Date(json.createdAt),
      new Date(json.updatedAt)
    );
  }
}
export default UserModel;