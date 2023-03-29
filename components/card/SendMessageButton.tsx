import { Flex, Text } from "@chakra-ui/react"
import ChakraImage from "../ChakraImage"
import send_message_logo from "../../asset/icon/send_message_logo.svg"

const SendMessageButton = () => {
    return (
        <Flex w={152} h={55} bg='#1B1B1B' borderRadius='74px' align='center' justify='center'>
            <ChakraImage src={send_message_logo} alt='message' />
            <Text color='white'>message here</Text>
        </Flex>
    )
}

export default SendMessageButton