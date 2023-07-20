import { NextApiRequest, NextApiResponse } from 'next';
import { brc721 } from '../../lib/brc721';

export default async function inscribe(req: NextApiRequest, res: NextApiResponse) {
  const { tokenId, message } = req.body;

  try {
    const result = await brc721.inscribeToken(tokenId, message);
    res.status(200).json({ message: 'INSRIBE_SUCCESS', result });
  } catch (error) {
    res.status(500).json({ message: 'INSRIBE_ERROR', error: error.message });
  }
}