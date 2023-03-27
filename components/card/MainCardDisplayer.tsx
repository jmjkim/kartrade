import { Box, Text, VStack } from '@chakra-ui/react';

const MainCardDisplayer = () => {
  return (
    <Box
      w="100%"
      minH="mainCardMobileHeight"
      bg="gradientGray"
      pos="relative"
      color="white"
    >
      <VStack
        w="100%"
        spacing="6px"
        pos="absolute"
        top="185px"
        left="50%"
        transform="translate(-50%, 0)"
        px="20px"
      >
        <Text fontSize="fs6" fontWeight="medium" lineHeight="35px">
          We are creative traders
        </Text>

        <Text fontSize="fs3" lineHeight="22px">
          Sell, Trade, Buy all Kpop photocards across the World. We are here to
          enable K-Pop fans to instantly trade cards like never before.
        </Text>
      </VStack>
    </Box>
  );
};

export default MainCardDisplayer;
