import { Flex, Center, Heading, Box } from "@chakra-ui/react";
import Link from "next/link";
import { Meta } from "../helpers/Meta";

const errorPage = () => {
  return (
    <>
    <Meta title="Paydex | 404" />
      <Center flexDirection="column" h="100vh">
        <Heading mb="2">Page Not Found</Heading>
        <Link href="/">
          <Box as="button" bgColor="purple.700" color="white" py="3" px="8" rounded="full" fontWeight="semibold" >Go Back</Box>
        </Link>
      </Center>
    </>
  );
};

export default errorPage;
