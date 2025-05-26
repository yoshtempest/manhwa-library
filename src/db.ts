import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Abre a conexão com o banco de dados
async function openDb() {
  return open({
    filename: './src/books.db', // Caminho do arquivo
    driver: sqlite3.Database
  });
}

// Cria a tabela (se não existir)
async function setupDatabase() {
  const db = await openDb();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      genres TEXT NOT NULL,
      description TEXT,
      note REAL NOT NULL DEFAULT 0,
      author TEXT,
      image_path TEXT
    )
  `);
  await db.close();
}

setupDatabase(); // Executa quando o arquivo é carregado

export default openDb;