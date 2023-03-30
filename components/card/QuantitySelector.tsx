import { Box, HStack, Text } from "@chakra-ui/react"
import minusIcon from '../../asset/icon/minusIcon.svg'
import plusIcon from '../../asset/icon/plusIcon.svg'
import ChakraImage from "../ChakraImage"
import { useState } from "react"

const QuantitySelector = () => {
    const [ quantity, setQuantity ] = useState(0)

    return (
        <Box w='100%' fontWeight='medium' py='40px'>
            <HStack spacing={8}>
                <Text as='b'>Quantity</Text>
                <ChakraImage
                    src={minusIcon}
                    alt="minus"
                    width={37}
                    height={37}
                    onClick={() => { return quantity === 0 ? null : setQuantity(quantity - 1) }}
                />
                <Text>{quantity}</Text>
                <ChakraImage
                    src={plusIcon}
                    alt="plus"
                    width={37}
                    height={37}
                    onClick={() => setQuantity(quantity + 1)}
                />
            </HStack>
        </Box>
    )
}

export default QuantitySelector