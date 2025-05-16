import openDb from '../../db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await openDb();
  const manhwas = await db.all('SELECT * FROM manhwas');
  res.status(200).json(manhwas);
}