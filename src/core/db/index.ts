import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Define o tipo SqLiteDatabase como o tipo retornado pela função open()
type SqliteDatabase = Awaited<ReturnType<typeof open>>;


/* 
    Classe Responsável por gerenciar a conexão com o banco de dados Sqlite
    Garante que apenas uma conexão seja aberta por vez(singleton)
    Fornece métodos para conectar, obter a sessão, criar e remover tabelas, e desconectar.
*/
class DBConnectionHandler {
    private db: SqliteDatabase | null = null;
    private readonly dbPath = 'library.db'; // Caminho do arquivo do banco de dados.

    // Conecta ao banco de dados, caso não esteja conectado
    async connect() {
        if (!this.db) {
            this.db = await open({
                filename: this.dbPath,
                driver: sqlite3.Database,
            });
        }
    }
    /*
        Retorna a sessão ativa ao banco de dados.
        Se não houver uma sessão ativa, chama o método connect() para criar uma nova.
    */
    async getSession(): Promise<SqliteDatabase> {
        if (!this.db) {
            await this.connect()
        }
        return this.db!;
    }
    /*
        Cria as tabelas necessárias no banco de dados.
        Caso a tabela já exista, não faz nada.
    */
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
            CREATE TABLE IF NOT EXISTS books (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                author TEXT,
                genres TEXT NOT NULL,
                description TEXT,
                note REAL NOT NULL DEFAULT 0,
                image_path TEXT,
            );
        `);
    }
    // Remove as tabelas do banco de dados.
    async dropTables() {
        if (!this.db) throw new Error('Database not connected');
        await this.db.exec(`DROP TABLE IF EXISTS users`);
    }
    // Encerra a conexão com o banco de dados.
    async disconnect() {
        if (this.db) {
            await this.db.close();
            this.db = null;
        }
    }
}


// Instancia a classe DBConnectionHandler e conecta ao banco de dados.
const db = new DBConnectionHandler();
await db.connect()
await db.createTables();

export default db;

export { DBConnectionHandler };
export type { SqliteDatabase };