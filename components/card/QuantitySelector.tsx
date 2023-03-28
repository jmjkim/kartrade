import { Box, HStack, Text } from "@chakra-ui/react"
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

const QuantitySelector = () => {
    return (
        <Box w='100%' px='25px' fontWeight='medium'>
            <HStack spacing={8}>
                <Text>Quantity</Text>
                <MinusIcon />
                <Text>number</Text>
                <AddIcon />
            </HStack>
        </Box>
    )
}

export default QuantitySelector