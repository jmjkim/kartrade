import { Box, VStack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import LogoGroup2752 from '../../asset/icon/nav/LogoGroup2752.svg';

const Footer = () => {
  return (
    <Box as="footer" px="25px">
      <Box my="35px">
        <Image src={LogoGroup2752} alt="brand" width={105} height={17} />
      </Box>

      <VStack align="start" textTransform="uppercase">
        <Text>about us</Text>

        <Text>terms of service</Text>

        <Text>contact</Text>

        <Text>privacy policy</Text>

        <Text fontSize="fs0" pt="18px" pb="25px">
          @ 2021 kartrade limited - all right reserved.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
