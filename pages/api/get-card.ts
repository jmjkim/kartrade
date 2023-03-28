import type { NextApiRequest, NextApiResponse } from "next";
import { CardData, dummyCardInfo } from "./get-cards";

export default function handler (
    req: NextApiRequest, 
    res: NextApiResponse<CardData | object>
) {
    // const card = dummyCardInfo.find(card => card.id === req.query.cid);
    const card = dummyCardInfo.find(card => card.id === 1);

    if (card) {
        res.status(200).send(card);
    } else {
        res.status(404).send({ message: "Card not found" });
    }
  }