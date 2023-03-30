import { HStack, Text } from "@chakra-ui/react"
import ChakraImage from "../components/ChakraImage"
import wishListIcon from "../asset/icon/wishListIcon.svg"

const WishListButton = () => {
    return (
        <HStack
            w={152} 
            h={55} 
            bg='#FFF' 
            border='1px solid #777' 
            borderRadius='74px' 
            align='center' 
            justify='center'
        >
            <ChakraImage src={wishListIcon} alt='wishlist' />
            <Text as='b' fontSize='fs1' color='#1B1B1B'>WISH LIST</Text>
        </HStack>
    )
}

export default WishListButton