// import { open } from 'sqlite';
// import sqlite3 from 'sqlite3';

// async function setupDatabase() {
//   // 1. Abre a conexão
//   const db = await open({
//     filename: './src/books.db',
//     driver: sqlite3.Database
//   });

//   // 2. Cria a tabela se não existir
//   await db.exec(`
//     CREATE TABLE IF NOT EXISTS books (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       title TEXT NOT NULL,
//       genres TEXT NOT NULL,
//       description TEXT,
//       note REAL NOT NULL DEFAULT 0,
//       author TEXT,
//       image_path TEXT
//     )
//   `);

//   console.log("Tabela 'books' verificada/criada com sucesso! ✅");
//   await db.close();
// }

// setupDatabase();