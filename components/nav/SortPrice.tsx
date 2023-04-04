import { Flex } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { CardData } from '@/pages/api/cards';

type SortPriceProps = {
  value?: string;
  cards: CardData[];
  setCards: Dispatch<SetStateAction<CardData[]>>;
};

const SortPrice: React.FC<SortPriceProps> = ({ cards, setCards }) => {
  const sortCardsByPrice = (value: string) => {
    if (value === 'lowToHigh') {
      setCards(
        [...cards].sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          } else if (a.price < b.price) {
            return -1;
          } else {
            return 0;
          }
        })
      );
    } else if (value === 'highToLow') {
      setCards(
        [...cards].sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          } else if (a.price < b.price) {
            return 1;
          } else {
            return 0;
          }
        })
      );
    } else {
      setCards(
        [...cards].sort((a, b) => {
          if (a.id > b.id) {
            return 1;
          } else if (a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        })
      );
    }
  };

  return (
    <Flex justify="space-between" fontSize="fs1" my="18.5px">
      <select
        id="sort-by-price"
        onChange={(e) => sortCardsByPrice(e.target.value)}
      >
        <option value="default">Price ($)</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <select id="sort-by">
        <option value="">Sort By</option>
        <option value="1">value 123</option>
        <option value="2">value 456</option>
      </select>
    </Flex>
  );
};

export default SortPrice;
