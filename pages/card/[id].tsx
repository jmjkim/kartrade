import { CardData } from '../api/get-cards';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import send_message_logo from '../../asset/icon/send_message_logo.svg';
import ChakraImage from '@/components/ChakraImage';
import CardDetailBreadcrumb from '@/components/card/CardDetailBreadcrumb';
import QuantitySelector from '@/components/card/QuantitySelector';
import SendMessageButton from '@/components/card/SendMessageButton';
import WishListButton from '@/components/WishListButton';
import {
  Image,
  Card,
  CardBody,
  Box,
  VStack,
  HStack,
  Text,
  Flex,
  Heading,
  Divider,
  Avatar,
} from '@chakra-ui/react';

const getAvatarImage = (c: CardData): string => {
  return c.mainImage.replace('/public', '');
};

const getImages = (c: CardData): string[] => {
  return c.detailImage.map((img) => img.replace('/public', ''));
};

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
            <Flex justify="space-between" align="center" pb="19px">
              <HStack>
                <Avatar src={getAvatarImage(card)} w="38px" h="38px" />
                <Text>@{card.nickname}</Text>
              </HStack>

              <HStack>
                <ChakraImage
                  src={send_message_logo}
                  alt="message"
                  width={19}
                  height={19}
                />
                <Text fontSize="fs1">Send Message</Text>
              </HStack>
            </Flex>

            <Divider borderBottom="bdBottom" />

            <VStack spacing="4" align="start" py="28px">
              <Heading fontWeight="medium" fontSize="fs4" lineHeight="lh1">
                {card.title}
              </Heading>

              <Text>{card.description}</Text>

              <Heading fontSize="fs5" lineHeight="lh2" fontWeight="medium">
                {`USD ${card.price}`}
              </Heading>
              <Text>Local Taxes included (where applicable)</Text>
            </VStack>

            <Divider borderBottom="bdBottom" mb="15px" />

            {getImages(card).map((img, i: number) => {
              return (
                <Box key={i}>
                  <Image src={img} alt="card" width="100%" height="100%" />
                  <Divider borderBottom="bdBottom" pt="15px" />
                </Box>
              );
            })}
          </CardBody>
        </Card>
      </Box>

      <QuantitySelector />

      <Flex justify="space-evenly">
        <SendMessageButton />
        <WishListButton />
      </Flex>
    </>
  );
};

export default CardDetailDisplayer;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(
    `http://localhost:3000/api/card/${context.params.id}`
  );
  const card: CardData = await res.json();

  return { props: { card } };
}
