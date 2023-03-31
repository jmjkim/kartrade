import React from 'react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { CardData } from '../api/cards';
import CardDetailHeader from '@/components/card/CardDetailHeader';
import CardDetailDescription from '@/components/card/CardDetailDescription';
import CardDetailBreadcrumb from '@/components/card/CardDetailBreadcrumb';
import CardDetailImages from '@/components/card/CardDetailImages';
import CardDetailIncludedItems from '@/components/card/CardDetailIncludedItems';
import CardDetailShippingReturn from '@/components/card/CardDetailShippingReturn';
import QuantitySelector from '@/components/card/QuantitySelector';
import SendMessageButton from '@/components/SendMessageButton';
import WishListButton from '@/components/WishListButton';
import Footer from '@/components/Footer';
import { Card, CardBody, Box, Flex, Divider } from '@chakra-ui/react';

const CardDetailDisplayer = ({
  card,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <CardDetailBreadcrumb />
      <Divider borderBottom="bdBottom" />

      <Box key={card.id} w="100%" px="25px">
        <Card variant="unstyled" w="100%" pt="27px">
          <CardBody>
            <CardDetailHeader card={card} />
            <Divider borderBottom="bdBottom" />

            <CardDetailDescription card={card} />
            <Divider borderBottom="bdBottom" pb="28px" />

            <CardDetailImages card={card} />
          </CardBody>
        </Card>

        <Flex flexDir="column" align="center" w="100%" pt="40px" pb="25px">
          <QuantitySelector />
        </Flex>

        <Flex
          w="100%"
          py="15px"
          backgroundColor="white"
          position={'sticky'}
          bottom={0}
          justify="space-between"
        >
          <SendMessageButton />
          <WishListButton />
        </Flex>

        <Divider borderBottom="bdBottom" mb="29px" />

        <CardDetailIncludedItems />
        <Divider borderBottom="bdBottom" />

        <CardDetailShippingReturn />
      </Box>

      <Divider borderBottom="bdBottom" mb="50px" />
    </>
  );
};

export default CardDetailDisplayer;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`http://localhost:3000/api/cards/${context.query.id}`);
  const card: CardData = await res.json();

  return { props: { card } };
}
