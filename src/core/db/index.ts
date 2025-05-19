import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

type SqliteDatabase = Awaited<ReturnType<typeof open>>;

class DBConnectionHandler {
    private db: SqliteDatabase | null = null;
    private readonly dbPath = 'library.db';

    async connect() {
        if (!this.db) {
            this.db = await open({
                filename: this.dbPath,
                driver: sqlite3.Database,
            });
        }
    }

    async getSession(): Promise<SqliteDatabase> {
        if (!this.db) {
            await this.connect()
        }
        return this.db!;
    }

    async createTables() {
        if (!this.db) throw new Error('Database not connected');
        await this.db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                email TEXT NOT NULL,
                password TEXT NOT NULL,
                active BOOLEAN DEFAULT TRUE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
    }

    async dropTables() {
        if (!this.db) throw new Error('Database not connected');
        await this.db.exec(`DROP TABLE IF EXISTS users`);
    }

    async disconnect() {
        if (this.db) {
            await this.db.close();
            this.db = null;
        }
    }
}


const db = new DBConnectionHandler();
db.connect()

export default db;

export { DBConnectionHandler };
export type { SqliteDatabase };