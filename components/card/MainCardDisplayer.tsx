import { Box, Text } from "@chakra-ui/react"

const MainCardDisplayer = () => {
    return (
        <Box
            w="100%"
            minH="mainCardMobileHeight" 
            bg="gradientGray" 
            pos="relative" 
            color="white"
        >
            <Text 
                fontSize="fs6"
                fontWeight="medium"
                lineHeight="35px" 
                minW="285px" 
                minH="70px" 
                pos="absolute" 
                top="50%" 
                left="50%" 
                transform="translate(-50%, -50%)"
                mx="20px"
                mb="6px" 
                pt="203px" 
                pb="146px"
            >
                We are creative traders
            </Text>

            <Text 
                fontSize="fs3"
                lineHeight="22px" 
                minW="285px" 
                minH="88px" 
                pos="absolute" 
                top="50%" 
                left="50%" 
                transform="translate(-50%, -50%)" 
                mx="20px" 
                pt="279.5px" 
                pb="52.5px"
            >
                Sell, Trade, Buy all Kpop photocards across the World. We are here to enable K-Pop fans to instantly trade cards like never before.
            </Text>
        </Box>
    )
}

export default MainCardDisplayer