import { Flex, Box, Divider } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import Image from 'next/image';
import LogoGroup2751 from '../../asset/icon/nav/LogoGroup2751.svg';
import LogoGroup2752 from '../../asset/icon/nav/LogoGroup2752.svg';
import searchVector from '../../asset/icon/nav/searchVector.svg';
import menuVector from '../../asset/icon/nav/menuVector.svg';

import SearchBar from './SearchBar';
import { useState } from 'react';

const TopNav = () => {
  const [ activateSearchBar, setActivateSearchBar ] = useState(false)

  const handleClick = (): void => {
    setActivateSearchBar(activateSearchBar => !activateSearchBar)
  }

  return (
    <>
      <Flex zIndex="9999" px="25px" py="16px" bg="white" justify="space-between" w="100%" pos="sticky" top={0}>
        <Link href='/'>
          <Flex align="center" gap={4}>
              <Image src={LogoGroup2751} alt="logo" width={38} height={17} />
              <Image src={LogoGroup2752} alt="brand" width={100} height={15} />
          </Flex>
        </Link>

        <Flex align="center" gap={6}>
          <Image src={searchVector} alt="search" onClick={() => handleClick()}/>
          <Image src={menuVector} alt="menu" />
        </Flex>
      </Flex>

      <Divider borderBottom="bdBottom" />

      <Box w="100%" mt="-1px">
        { activateSearchBar ? <SearchBar handleClick={handleClick} /> : null }
      </Box>
    </>
  );
};

export default TopNav;
