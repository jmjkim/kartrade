import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {  
  // const colors = {
  //   colors: {
  //     bg: '#fff',
  //     textBackgroundColor2: '#1A1A1A',
  //   }
  // }

  // const sizes = {
  //   sizes: {
  //     container: {
  //       max: '420px',
  //       height: '968px',
  //     }
  //   }
  // }

  // const borders = {
  //   bottom: "1px solid #E5E5E5"
  // }

  const theme = extendTheme({ })

  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    )
}
