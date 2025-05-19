import openDb from '../../db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDb();
  const manhwas = await db.all('SELECT * FROM manhwas');
  res.status(200).json(manhwas);
}

// possivelmente o código abaixo seja uma versão aprimorada do código acima

// import { open } from 'sqlite';
// import sqlite3 from 'sqlite3';
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Método não permitido!' });
//   }

//   const { title, genres, description, note, author, image_path } = req.body;

//   // Validação completa dos campos obrigatórios
//   if (!title || typeof title !== 'string') {
//     return res.status(400).json({ message: 'Título é obrigatório e deve ser texto.' });
//   }
//   if (!author || typeof author !== 'string') {
//     return res.status(400).json({ message: 'Autor é obrigatório e deve ser texto.' });
//   }
//   if (note && typeof note !== 'number') {
//     return res.status(400).json({ message: 'Nota deve ser um número.' });
//   }

//   try {
//     const db = await openDb();

//     // Garante que a tabela existe (opcional, pode ser removido em produção)
//     await db.run(`
//       CREATE TABLE IF NOT EXISTS manhwas (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         title TEXT NOT NULL,
//         genres TEXT,
//         description TEXT,
//         note REAL NOT NULL DEFAULT 0,
//         author TEXT NOT NULL,
//         image_path TEXT
//       )
//     `);

//     const result = await db.run(
//       `INSERT INTO manhwas (title, genres, description, note, author, image_path)
//        VALUES (?, ?, ?, ?, ?, ?)`,
//       [
//         title,
//         genres || null,
//         description || null,
//         note,
//         author,
//         image_path || null
//       ]
//     );
//     res.status(201).json({ message: 'Manhwa adicionado!', id: result.lastID });
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao adicionar manhwa.', error: (error as Error).message });
//   }
// }