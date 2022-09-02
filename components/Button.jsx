import {Box} from '@chakra-ui/react'

export const Button = ({children}) => {
  return (
    <>
         <Box as="button" py="3" px="10" bgColor="purple.800" color="white" rounded="full" fontWeight="semibold">
              {children}
        </Box>
    </>
  )
}

