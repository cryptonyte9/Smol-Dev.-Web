import { NextApiRequest, NextApiResponse } from 'next';
import { mintToken } from '../../lib/brc721';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { tokenId } = req.body;
      const result = await mintToken(tokenId);
      res.status(200).json({ message: 'MINT_SUCCESS', result });
    } catch (error) {
      res.status(500).json({ message: 'MINT_ERROR', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}