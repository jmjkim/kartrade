import CardDisplayer from '@/components/CardDisplayer';
import SortPrice from '@/components/nav/SortPrice';
import { useState, useEffect } from 'react';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import { CardData } from '../api/cards';
import { Flex, Text, Divider } from '@chakra-ui/react';

const SearchResult = ({ cards, keyword }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [ cardFound, setCardFound ] = useState(cards)

  // client side에 CardDisplayer prop re-rendering을 위해 아래처럼 useEffect를 넣는게 맞는지?
  useEffect(() => {
    setCardFound(cards)
  }, [cards])

  if (cards.length === 0) {
    return <Text px="25px" py="30vh">Sorry, &apos;<b>{keyword}</b>&apos; returned no results. Please search another word or try checking the spelling.</Text>
  }

  return (
    <>
      <Flex flexDir="column" alignItems="center" px="25px" py="50px">
        <Text>Searched</Text>
        <Text fontSize="fs4">&apos;<b>{keyword}</b>&apos;</Text>
        <Text fontWeight="medium">{cards.length} results</Text>
      </Flex>
      <Divider borderBottom="bdBottom" />

      <SortPrice cards={cardFound} setCards={setCardFound}/>
      <Divider borderBottom="bdBottom" mb="25px" />

      <CardDisplayer cards={cardFound} />
    </>
  )
};

export default SearchResult;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { keyword } = context.query
  const res = await fetch(`http://localhost:3000/api/search?keyword=${keyword}`);
  const cards: CardData[] = await res.json(); 

  return { props: { cards, keyword } };
}