import { Flex, Heading, Box } from "@chakra-ui/react"
import { Meta } from "../helpers/Meta"
import Link from 'next/link'
import {Button} from '../components/Button'

export default function Home() {
  return (
   <>
    <Meta title="Paydex | Home"/>
    <Flex direction="column" justifyContent="center" alignItems="center" h="100vh" gap="8">
      <Heading color="purple.800" >Welcome to Paydex</Heading>
      <Flex w="full" justifyContent="center" gap="6">
        <Link href="/login">
        <Box as="button" py="3" px="10" bgColor="purple.800" color="white" rounded="full" fontWeight="semibold">
          Login
          </Box>
        </Link>
        <Link href="/signup">
        <Box as="button" py="3" px="10" bgColor="purple.800" color="white" rounded="full" fontWeight="semibold">
          Signup
          </Box>
        </Link>
      </Flex>
    </Flex>
   </>
  )
}
