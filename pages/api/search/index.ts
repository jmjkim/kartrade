import type { NextApiRequest, NextApiResponse } from 'next';
import { CardData, dummyCardInfo } from '../cards';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData | Object>
) {
  const { keyword, sort } = req.query;
  const searchQuery = new RegExp(keyword as string, 'i');
  const foundCards = dummyCardInfo.filter(card => { return searchQuery.test(card.title) });

  if (keyword === undefined) {
    res.status(404).json({ error: 'Card not found' });
  } 
  
  else if (keyword && sort === 'price_asc') {
    foundCards.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      } else if (a.price < b.price) {
        return -1;
      } else {
        return 0;
      }
    })
  }

  else if (keyword && sort === 'price_desc') {
    foundCards.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      } else if (a.price < b.price) {
        return 1;
      } else {
        return 0;
      }
    })
  }

  res.status(200).json(foundCards);
}