import React, { useState } from 'react';
import { CardData } from '@/pages/api/get-cards';
import { InferGetServerSidePropsType } from 'next'
import { Box, Divider } from '@chakra-ui/react';
import SortPrice from '@/components/SortPrice';
import MainCardDisplayer from '@/components/card/MainCardDisplayer';
import CardDisplayer from '@/components/card/CardDisplayer';
import Footer from '@/components/Footer';

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [ sortedCards, setSortedCards ] = useState(data)

  const sortCardPriceLowToHigh = () => {
    const sortCardPriceLowToHigh = [...sortedCards].sort((a, b) => {
      if (a.price > b.price) {
        return 1
      } else if (a.price < b.price) {
        return -1
      } else {
        return 0
      }
    })

    setSortedCards(sortCardPriceLowToHigh)
  }

  const sortCardPriceHighToLow = () => {
    const sortCardPriceHighToLow = [...sortedCards].sort((a, b) => {
      if (a.price > b.price) {
        return -1
      } else if (a.price < b.price) {
        return 1
      } else {
        return 0
      }
    })

    setSortedCards(sortCardPriceHighToLow)
  }
  
  const sortCardPriceDefault = () => {
    setSortedCards(data)
  }

  return (
    <Box>
      <Box w="100%" px="25px">
        <SortPrice 
          sortCardPriceDefault={sortCardPriceDefault} 
          sortCardPriceLowToHigh={sortCardPriceLowToHigh} 
          sortCardPriceHighToLow={sortCardPriceHighToLow} 
        />
      </Box>
      <Divider mt="18.5px" mb="25.5px" borderBottom="bottom" />

      <Box mx="20px">
        <MainCardDisplayer />
      </Box>
      <Divider my="25px" borderBottom="bdBottom" />

      <CardDisplayer cards={sortedCards} />
      <Footer />
    </Box>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get-cards`);
  const data: CardData[] = await res.json();

  return { props: { data } };
}