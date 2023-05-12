import React from 'react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { CardData } from '../api/cards';
import CardDetailHeader from '@/components/card/CardDetailHeader';
import CardDetailDescription from '@/components/card/CardDetailDescription';
import CardDetailBreadcrumb from '@/components/card/CardDetailBreadcrumb';
import CardDetailImages from '@/components/card/CardDetailImages';
import CardDetailIncludedItems from '@/components/card/CardDetailIncludedItems';
import CardDetailShippingReturn from '@/components/card/CardDetailShippingReturn';
import QuantitySelector from '@/components/QuantitySelector';
import CardDetailButtonDisplayer from '@/components/CardDetailButtonDisplayer';
import { Card, CardBody, Box, Divider } from '@chakra-ui/react';

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

        <QuantitySelector />
        <CardDetailButtonDisplayer />
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
  const card: CardData | any = await res.json();

  if (card.error) {
    return { notFound: true };
  }
  return { props: { card } };
}
