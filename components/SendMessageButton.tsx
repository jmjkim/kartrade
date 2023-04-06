import { Text, Button } from '@chakra-ui/react';
import ChakraImage from './utils/ChakraImage';
import whiteSendMessageLogo from '../asset/icon/whiteSendMessageLogo.svg';

const SendMessageButton = () => {
  return (
    <>
      <Button 
        leftIcon={<ChakraImage src={whiteSendMessageLogo} alt="message" />}
        bg="#1B1B1B"
        colorScheme="white"
        borderRadius="74px"
        width="152px"
        height="55px"
        alignContent="center"
        justifyContent="center"
      >
        <Text fontSize="fs1">
          SEND MESSAGE
        </Text>
      </Button>
    </>
  );
};

export default SendMessageButton;
