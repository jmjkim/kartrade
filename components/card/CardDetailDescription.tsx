import { VStack, Heading, Text } from '@chakra-ui/react';
import { CardData } from '@/pages/api/cards';

const CardDetailDescription: React.FC<{ card: CardData }> = ({ card }) => {
  return (
    <VStack spacing="4" align="start" pt="28px">
      <Heading fontWeight="medium" fontSize="fs4" lineHeight="lh1">
        {card.title}
      </Heading>

      <Text>{card.description}</Text>

      <Heading fontSize="fs5" lineHeight="lh2" fontWeight="medium">
        {`USD ${card.price}`}
      </Heading>
      <Text>Local Taxes included (where applicable)</Text>
    </VStack>
  );
};

export default CardDetailDescription;
