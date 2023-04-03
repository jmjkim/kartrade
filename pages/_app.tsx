import '@/styles/globals.css';
import BackgroundImageDisplayer from '@/components/BackgroundImageDisplayer';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import TopNav from '@/components/TopNav';
import SearchBar from '@/components/SearchBar';
import Footer from '@/components/Footer';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Divider,
  Flex,
} from '@chakra-ui/react';

const theme = extendTheme({
  sizes: {
    cardMobileWidth: '325px',
    cardMobileHeight: '325px',
    mainCardMobileHeight: '420px',
  },

  fonts: {
    body: `'NeueHaasUnica'`,
  },

  fontSizes: {
    fs0: '10px',
    fs1: '13px',
    fs2: '14px',
    fs3: '16px',
    fs4: '20px',
    fs5: '22px',
    fs6: '35px',
  },

  fontWeights: {
    medium: 500,
  },

  lineHeights: {
    lh0: '22px',
    lh1: '25px',
    lh2: '34px',
    lh3: '35px',
  },

  colors: {
    white: '#fff',
    gradientGray: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
  },

  borders: {
    bdBottom: '1px solid #D8D8D8',
  }
});

export default function App({ Component, pageProps }: AppProps) {
  const [ flag, setFlag ] = useState(false)

  const handleClick = (): void => {
    setFlag(flag => !flag)
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        bg="gray.200"
        align="center"
        justify="space-evenly"
        // backgroundImage="url('/nav/LogoGroup2751.svg')"
      >
        <BackgroundImageDisplayer />
        <Box
          maxH="100vh"
          overflowY="scroll"
          maxW={['100%', '380px']}
          fontFamily="body"
          bg="white"
          zIndex={1}
        >
          <TopNav handleClick={handleClick} />
          { flag ? <SearchBar /> : null }
          <Divider mt="16px" mb="18px" borderBottom="bdBottom" />


          <main>
            <Component {...pageProps} />
          </main>

          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
