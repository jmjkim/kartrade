import React, { useState } from 'react';
import { CardData } from '@/pages/api/cards';
import { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next';
import { Box, Divider } from '@chakra-ui/react';
import MainCardDisplayer from '@/components/card/MainCardDisplayer';
import LoginPage from '@/components/main/LoginPage';
import CardDisplayer from '@/components/CardDisplayer';
import SortPrice from '@/components/nav/SortPrice';

export default function Home({ cards }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [showLoginPage, setShowLoginPage] = useState(false);
  
  return (
    <>
      {/* 임시 로그인 전 후 화면 변환버튼 */}
      <button onClick={() => setShowLoginPage(true)}>Login Bypass</button>
      {showLoginPage ? (
        <>
          <SortPrice />
          <Divider mt="18.5px" mb="25.5px" borderBottom="bdBottom" />

          <Box px="25px">
            <MainCardDisplayer />
          </Box>
          <Divider my="25px" borderBottom="bdBottom" />

          <CardDisplayer cards={cards} />
        </>
      ) : (
        <>
          <LoginPage />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { sort } = context.query;
  const res = await fetch(`http://localhost:3000/api/cards`);
  const cards: CardData[] = await res.json();

  if (sort === 'price_asc' || sort === 'price_desc') {
    const res = await fetch(`http://localhost:3000/api/cards?sort=${sort}`);
    const cards: CardData[] = await res.json();

    return { props: { cards } }
  }
  return { props: { cards } };
}
