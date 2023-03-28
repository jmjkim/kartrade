import React, { useState } from 'react';
import { CardData } from '@/pages/api/get-cards';
import { InferGetServerSidePropsType } from 'next'
import { Box, Divider } from '@chakra-ui/react';
import SortPrice from '@/components/SortPrice';
import MainCardDisplayer from '@/components/card/MainCardDisplayer';
import CardDisplayer from '@/components/card/CardDisplayer';
import Footer from '@/components/Footer';

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [ cards, setCards ] = useState(data)

  return (
    <>
      <Box w="100%" px="25px">
        <SortPrice cards={cards} setCards={setCards} />
      </Box>
      <Divider mt="18.5px" mb="25.5px" borderBottom="bottom" />

      <Box mx="20px">
        <MainCardDisplayer />
      </Box>
      <Divider my="25px" borderBottom="bdBottom" />

      <CardDisplayer cards={cards} />
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/get-cards`);
  const data: CardData[] = await res.json();

  return { props: { data } };
}