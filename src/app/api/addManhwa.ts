import openDb from '../../db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const db = await openDb();
    const { title, author, chapters, isFinished, imageUrl } = req.body;

  await db.run(
    'INSERT INTO manhwas (title, genres, description, note, author, image_path) VALUES (?, ?, ?, ?, ?, ?)',
  );

    res.status(200).json({ message: 'Manhwa adicionado!' });
  } else {
    res.status(405).json({ message: 'Método não permitido!' });
  }
}