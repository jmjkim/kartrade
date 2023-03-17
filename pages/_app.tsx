import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    sizes: {
      cardMobileWidth: "325px",
      cardMobileHeight: "325px",
      mainCardMobileHeight: "420px",
    },

    fonts: {
      body: `'Neue Haas Unica'`,
    },

    fontSizes: {
      fs0: "10px",
      fs1: "13px",
      fs2: "14px",
      fs3: "16px",
      fs4: "20px",
      fs5: "22px",
      fs6: "35px",
    },

    fontWeights: {
      medium: 500,
    },

    lineHeights: {
      lh0: "22px",
      lh1: "25px",
      lh2: "34px",
      lh3: "35px",
    },

    colors: {
      white: "#fff",
      gradientGray: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
    },

  });

  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    )
}
