// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type CardData = {
  id: number;
  mainImage: string;
  title: string;
  description: string;
  price: number;
  detailImage: string[];
  nickname: string;
};

const dummyCardInfo: CardData[] = [
  {
    id: 1,
    mainImage: '/public/photocard/photo1.svg',
    nickname: 'kartrade1',
    title: 'Deco-Sumi Killer of Queen Collection',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 199,
    detailImage: [
      '/public/photocard/photo1.svg',
      '/public/photocard/photo2.svg',
      '/public/photocard/photo3.svg',
      '/public/photocard/photo4.svg',
    ],
  },
  {
    id: 2,
    mainImage: '/public/photocard/photo2.svg',
    nickname: 'kartrade2',
    title: '2022 Season Greetings',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 250,
    detailImage: [
      '/public/photocard/photo2.svg',
      '/public/photocard/photo3.svg',
    ],
  },
  {
    id: 3,
    mainImage: '/public/photocard/photo3.svg',
    nickname: 'kartrade3',
    title: '2020 Map Of The Soul:7 Ver3',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.sit voluptatem accusantium doloremque laudantium, totam rem aperiam, ',
    price: 150,
    detailImage: [
      '/public/photocard/photo3.svg',
      '/public/photocard/photo4.svg',
      '/public/photocard/photo5.svg',
    ],
  },
  {
    id: 4,
    mainImage: '/public/photocard/photo4.svg',
    nickname: 'kartrade4',
    title: "2018 Loveyourself 'Answer' L Type",
    description:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    price: 100,
    detailImage: [
      '/public/photocard/photo4.svg',
      '/public/photocard/photo5.svg',
      '/public/photocard/photo6.svg',
    ],
  },
  {
    id: 5,
    mainImage: '/public/photocard/photo5.svg',
    nickname: 'kartrade5',
    title: 'Deco-Antifragile',
    description:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur',
    price: 220,
    detailImage: [
      '/public/photocard/photo5.svg',
      '/public/photocard/photo6.svg',
      '/public/photocard/photo7.svg',
    ],
  },
  {
    id: 6,
    mainImage: '/public/photocard/photo6.svg',
    nickname: 'kartrade6',
    title: 'Deco Kit',
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?',
    price: 400,
    detailImage: [
      '/public/photocard/photo6.svg',
      '/public/photocard/photo7.svg',
      '/public/photocard/photo1.svg',
    ],
  },
  {
    id: 7,
    mainImage: '/public/photocard/photo7.svg',
    nickname: 'kartrade7',
    title: 'Soundwave Lucky Draw Round 2 Benefit Photocard',
    description:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    price: 80,
    detailImage: [
      '/public/photocard/photo7.svg',
      '/public/photocard/photo1.svg',
      '/public/photocard/photo2.svg',
    ],
  },
  {
    id: 8,
    mainImage: '/public/photocard/photo1.svg',
    nickname: 'kartrade8',
    title: "Perception: Chapter Two' Makestar POB Benefit",
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.',
    price: 130,
    detailImage: ['/public/photocard/photo7.svg'],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CardData[]>
) {
  res.status(200).json(dummyCardInfo);
}
