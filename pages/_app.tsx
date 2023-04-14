import '@/styles/globals.css';
import BackgroundImageDisplayer from '@/components/BackgroundImageDisplayer';
import type { AppProps } from 'next/app';
import TopNav from '@/components/nav/TopNav';
import Footer from '@/components/Footer';
import {
  ChakraProvider,
  extendTheme,
  Box,
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
  return (
    <ChakraProvider theme={theme}>
      <Flex
        bg="gray.200"
        align="center"
        justify="space-evenly"
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
          <TopNav />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}