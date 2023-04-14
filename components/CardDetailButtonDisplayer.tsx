import { Flex } from '@chakra-ui/react'
import SendMessageButton from './SendMessageButton'
import WishListButton from './WishListButton'

const CardDetailButtonDisplayer = () => {
    return (
        <Flex
            w="100%"
            py="15px"
            backgroundColor="white"
            position={'sticky'}
            bottom={0}
            justify="space-between"
        >
            <SendMessageButton />
            <WishListButton />
        </Flex>
    )
}

export default CardDetailButtonDisplayer