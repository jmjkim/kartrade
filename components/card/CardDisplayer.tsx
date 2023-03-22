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
import { CardData } from '@/pages/api/get-cards';
import Link from 'next/link'

const CardDisplayer: React.FC<{cards: CardData[]}> = ({ cards }): any => {
  return cards.map((c, idx: Number) => {
    const mainImage = c.mainImage.replace('/public', '');
    const lastCardIndex = cards.length - 1;

    return (
      <Box key={c.id}>
        <Card variant="unstyled" w="100%" px="25px" mb="25px">
          <CardBody>
            <Box pb="17px">
              <Link href={`/card/${c.id}`}>
                <Image
                  src={mainImage}
                  alt="card"
                  width="100%"
                  height="100%"
                />
              </Link>
            </Box>

            <VStack spacing="4" align="start">
              <HStack spacing="2">
                <Avatar src={mainImage} w="38px" h="38px" />
                <Text>@{c.nickname}</Text>
              </HStack>

              <Divider borderBottom="bdBottom" />

              <Heading fontWeight="medium" fontSize="fs4" lineHeight="lh1">
                {c.title}
              </Heading>

              <Text>{c.description}</Text>

              <Text fontSize="fs5" lineHeight="lh2">
                {`USD ${c.price}`}
              </Text>
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
  });
};

export default CardDisplayer;
