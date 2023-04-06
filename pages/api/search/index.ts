import { URLSearchParams } from 'url';
import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData, dummyCardInfo } from '../cards';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData | Object>
) {
  const { keyword } = req.query
  const searchQuery = new RegExp(keyword as string, 'i')

  console.log(searchQuery);
  console.log(searchQuery.exec(keyword as string))

  // const cardFound = dummyCardInfo.filter(card => { return card.title.includes(keyword as string) });
  const cardFound = dummyCardInfo.filter(card => { return card.title.includes(keyword as string) });

  if (keyword === undefined) {
    res.status(404).json({ error: 'Card not found' });
  } else {
    res.status(200).json(cardFound);
  }
}
