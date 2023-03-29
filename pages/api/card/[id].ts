import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData, dummyCardInfo } from '../get-cards';

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<CardData | Object>
) {
  const { id } = req.query
  const card = dummyCardInfo.find(card => String(card.id) === id);

  if (card) {
    res.status(200).json(card);
  } else {
    res.status(404).json({ error: "card not found" });
  }
}