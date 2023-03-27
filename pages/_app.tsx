import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import ChakraImage from '@/components/ChakraImage';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Divider,
  Flex,
} from '@chakra-ui/react';
import LogoGroup2751 from '../public/nav/LogoGroup2751.svg';
import TopNav from '@/components/TopNav';

const backgroundImageSize = [0, 0, 400];

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
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        bg="gray.200"
        align="center"
        justify="space-evenly"
        // backgroundImage="url('/nav/LogoGroup2751.svg')"
      >
        <Box minW={backgroundImageSize} minH={400}>
          <ChakraImage
            src={LogoGroup2751}
            alt="logo"
            width={backgroundImageSize}
            height={backgroundImageSize}
          />
        </Box>

        <Box
          maxH="100vh"
          overflowY="scroll"
          maxW={['100%', '380px']}
          fontFamily="body"
          bg="white"
          zIndex={1}
        >
          <TopNav />
          <Divider mt="16px" mb="18px" borderBottom="bottom" />

          <main>
            <Component {...pageProps} />
          </main>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
