import { ChakraProvider } from '@chakra-ui/react'
function MyApp({ Component, pageProps }) {
  
  console.log(pageProps.router)

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
