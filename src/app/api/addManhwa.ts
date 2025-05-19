import { open } from 'sqlite';
import sqlite3 from 'sqlite3';


// Função para garantir que a tabela existe
async function ensureTable() {
  // abre a conexão
  const db = await open({
    filename: './src/manhwas.db',
    driver: sqlite3.Database
  });

  // espera o banco de dados estar pronto
  await db.run(
    "INSERT INTO manhwas (title, genres) VALUES (?, ?)",
    ["Teste", "Ação"]
  );

  const result = await db.get("SELECT * FROM manhwas");
  console.log("Primeiro manhwa inserido:", result);
}
// Rode manualmente apenas em ambiente de desenvolvimento para criar a tabela

// ensureTable(); // para rodar o código basta descomentar esta linha

// rodar o servidor novamente
// e depois comentar novamente
// para evitar que a tabela seja criada toda vez que o servidor reiniciar
