import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData, dummyCardInfo } from '../cards';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData | object>
) {
  const { id } = req.query;
  const card = dummyCardInfo.find((card) => String(card.id) === id);

  if (card === undefined) {
    res.status(404).json({ error: 'Card not found' });
  } else {
    res.status(200).json(card);
  }
}
