import { Flex, Box, Input, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../components/Button";
import { Meta } from "../helpers/Meta";

const login = () => {
  return (
    <>
      <Meta title="Paydex | Login" />
      <Flex justifyContent="center" alignItems="center" h="100vh">
        <Box
          w="96"
          display="flex"
          flexDirection="column"
          gap="2"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="lg" color="purple.700">
            Login
          </Heading>
          <Input
            type="email"
            variant="filled"
            placeholder="Email"
            colorScheme="purple"
          />
          <Input type="password" variant="filled" placeholder="Password" />
          <Link href="/dashboard">
            <Box
              as="button"
              py="3"
              px="10"
              bgColor="purple.800"
              color="white"
              rounded="full"
              fontWeight="semibold"
            >
              Login
            </Box>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default login;
