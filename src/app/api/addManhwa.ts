import db from '../../db';
import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, genres, description, note, author, imageUrl } = req.body;
    
    // Insere o manhwa na tabela
    const stmt = db.prepare(`
      INSERT INTO manhwas (title, author, chapters, isFinished, imageUrl)
      VALUES (?, ?, ?, ?, ?)
    `);
    
    stmt.run(title, genres, description, note, author, imageUrl);
    
    res.status(200).json({ message: 'Manhwa adicionado com sucesso!' });
  } else {
    res.status(405).json({ message: 'Só aceitamos POST aqui!' });
  }
}