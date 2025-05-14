import db from '../../db';
import { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const manhwas = db.prepare('SELECT * FROM manhwas').all();
  res.status(200).json(manhwas);
}