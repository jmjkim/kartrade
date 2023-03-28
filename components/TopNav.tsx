import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import LogoGroup2751 from '../asset/icon/nav/LogoGroup2751.svg';
import LogoGroup2752 from '../asset/icon/nav/LogoGroup2752.svg';
import searchVector from '../asset/icon/nav/searchVector.svg';
import menuVector from '../asset/icon/nav/menuVector.svg';

const TopNav = () => {
  return (
    <Flex zIndex="9999" pt="25px" bg="white" justify="space-between" w="100%" px="25px" pos="sticky" top={0}>
      <Flex align="center" gap={4}>
        <Image src={LogoGroup2751} alt="logo" width={38} height={17} />
        <Image src={LogoGroup2752} alt="brand" width={100} height={15} />
      </Flex>

      <Flex align="center" gap={6}>
        <Image src={searchVector} alt="search" />
        <Image src={menuVector} alt="menu" />
      </Flex>
    </Flex>
  );
};

export default TopNav;
