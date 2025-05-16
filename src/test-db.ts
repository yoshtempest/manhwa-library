import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

async function test() {
  const db = await open({
    filename: './src/manhwas.db',
    driver: sqlite3.Database
  });

  await db.exec('CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY)');
  console.log('Tabela criada com sucesso! 🎉');
  await db.close();
}

test();