import Database from 'better-sqlite3';


// Abre a caixinha (cria o arquivo do banco de dados)
const db = new Database('manhwas.db'); 

// Vamos criar uma tabela chamada "manhwas" (como uma planilha de desenhos!)
db.exec(`
  CREATE TABLE IF NOT EXISTS manhwas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genres TEXT NOT NULL,
    description TEXT,
    note REAL,
    author TEXT,
    imageUrl TEXT
  )
`);


export default db;