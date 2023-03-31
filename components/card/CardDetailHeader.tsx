import { Flex, HStack, Text, Avatar } from '@chakra-ui/react'
import ChakraImage from '../ChakraImage';
import send_message_logo from '../../asset/icon/send_message_logo.svg';
import { CardData } from '@/pages/api/get-cards';

const CardDetailHeader: React.FC<{ card : CardData }> = ({ card }) => {
    return (
        <Flex justify="space-between" align="center" pb="19px">
            <HStack>
              <Avatar src={card.mainImage.replace('/public', '')} w="38px" h="38px" />
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
    )
}

export default CardDetailHeader