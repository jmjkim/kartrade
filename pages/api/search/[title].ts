import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData, dummyCardInfo } from '../cards';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData | Object>
) {
  const { title } = req.query;
  const cardFound = dummyCardInfo.filter((card) => { return card.title.includes(title) });

  if (cardFound) {
    res.status(200).json(cardFound);
  } else {
    res.status(404).json({ error: 'card not found' });
  }
}