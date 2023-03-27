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
  ChakraComponent
} from '@chakra-ui/react';
import { CardData } from '@/pages/api/get-cards';
import Link from 'next/link';
import React from 'react';

const CardDisplayer: React.FC<{ cards: CardData[] }> = ({ cards }) => {
  const getImage = (c: CardData) => {
    return c.mainImage.replace('/public', '');
  };
  const lastCardIndex = cards.length - 1;

  return (
    <>
      {cards.map((c: CardData, idx: Number) => (<Box key={c.id}>
          <Card variant='unstyled' w='100%' px='25px' mb='25px'>
            <CardBody>
              <Box pb='17px'>
                <Link href={`/card/${c.id}`}>
                  <Image
                    src={getImage(c)}
                    alt='card'
                    width='100%'
                    height='100%'
                  />
                </Link>
              </Box>

              <VStack spacing='4' align='start'>
                <HStack spacing='2'>
                  <Avatar src={getImage(c)} w='38px' h='38px' />
                  <Text>@{c.nickname}</Text>
                </HStack>

                <Divider borderBottom='bdBottom' />

                <Heading fontWeight='medium' fontSize='fs4' lineHeight='lh1'>
                  {c.title}
                </Heading>

                <Text>{c.description}</Text>

                <Heading fontSize='fs5' lineHeight='lh2' fontWeight='medium'>
                  {`USD ${c.price}`}
                </Heading>
              </VStack>
            </CardBody>
          </Card>

          {idx === lastCardIndex ? (
            <Divider mt='77px' mb='25px' borderBottom='bdBottom' />
          ) : (
            <Divider mt='22px' mb='25px' borderBottom='bdBottom' />
          )}
        </Box>
      ))}
    </>
  );
};

export default CardDisplayer;