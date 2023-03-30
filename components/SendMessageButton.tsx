import { HStack, Text } from '@chakra-ui/react';
import ChakraImage from './ChakraImage';
import whiteSendMessageLogo from '../asset/icon/whiteSendMessageLogo.svg'

const SendMessageButton = () => {
  return (
    <HStack
      w={152}
      h={55}
      bg="#1B1B1B"
      borderRadius="74px"
      align="center"
      justify="center"
    >
        <ChakraImage src={whiteSendMessageLogo} alt="message" />
        <Text as='b' fontSize='fs1' color="white">SEND MESSAGE</Text>
    </HStack>
  );
};

export default SendMessageButton;
