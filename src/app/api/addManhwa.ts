import { open } from 'sqlite';
import sqlite3 from 'sqlite3';


// Função para garantir que a tabela existe
async function ensureTable() {
  // Abre a conexão
  const db = await open({
    filename: './src/manhwas.db',
    driver: sqlite3.Database
  });

  // Espera o banco de dados estar pronto
  await db.run(
    "INSERT INTO manhwas (title, genres) VALUES (?, ?)",
    ["Teste", "Ação"] // TESTE QUE NÃO FUNCIONOU, SUPONHO TER QUE EXPORTAR A FUNÇÃO DE ABRIR/CRIAR O BANCO DE DADOS PARA QUE EU A IMPORTE AQUI E PODER INSERIR MEUS MANHWAS APÓS ISSO.
  );

  const result = await db.get("SELECT * FROM manhwas");
  console.log("Primeiro manhwa inserido:", result);
}
// ensureTable(); // Para rodar o código basta descomentar esta linha e usar npm run dev.

// Depois comente novamente para evitar que a tabela seja criada toda vez que o servidor reiniciar.
