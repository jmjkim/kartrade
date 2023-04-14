import {
  Image,
  Card,
  CardBody,
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import { CardData } from '@/pages/api/cards';
import { useRouter } from 'next/router';

const getImage = (c: CardData) => {
  return c.mainImage.replace('/public', '');
};

const CardDisplayer: React.FC<{ cards: CardData[] }> = ({ cards }) => {
  const router = useRouter();
  const lastCardIndex = cards.length - 1;

  return (
    <>
      {cards.map((c: CardData, idx: Number) => {
        return (
          <Box key={c.id}>
            <Card variant="unstyled" w="100%" mb="25px" px="25px">
              <CardBody>
                <Box pb="17px">
                  <Image
                    src={getImage(c)}
                    alt="card"
                    width="100%"
                    height="100%"
                    onClick={() => router.push(`/cards/${c.id}`)}
                  />
                </Box>

                <VStack spacing="4" align="start">
                  <HStack spacing="2">
                    <Avatar src={getImage(c)} w="38px" h="38px" />
                    <Text>@{c.nickname}</Text>
                  </HStack>

                  <Divider borderBottom="bdBottom" />

                  <Heading fontWeight="medium" fontSize="fs4" lineHeight="lh1">
                    {c.title}
                  </Heading>

                  <Text>{c.description}</Text>

                  <Heading fontSize="fs5" lineHeight="lh2" fontWeight="medium">
                    {`USD ${c.price}`}
                  </Heading>
                </VStack>
              </CardBody>
            </Card>

            {idx === lastCardIndex ? (
              <Divider mt="77px" mb="25px" borderBottom="bdBottom" />
            ) : (
              <Divider mt="22px" mb="25px" borderBottom="bdBottom" />
            )}
          </Box>
        );
      })}
    </>
  );
};

export default CardDisplayer;