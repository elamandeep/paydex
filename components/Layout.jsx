import {
  Grid,
  GridItem,
  Box,
  Heading,
  Center,
  Container,
} from "@chakra-ui/react";
import {useRouter} from 'next/router'
import Link from "next/link";

export const Layout = ({ children }) => {

  const menuListLinks = [
    "",
    "profile",
    "transaction_history",
    "design_payment",
    "create_payment_link",
    "configuration",
  ];
  const menuListName = [
    "Dashboard",
    "My Profile",
    "Transaction History",
    "Design your Payment",
    "Create Payment Link",
    "Configuration",
  ];

  return (
    <>
      <Grid
        templateColumns="18rem 1fr"
        templateRows="4rem 1fr 4rem"
        h="100vh"
        w="100%"
        px="5"
      >
        <GridItem w="full" rowSpan="2">
          <Center h="full" flexDirection="column" gap="2">
            <Heading color="purple.700" mb="10">
              Menu
            </Heading>
            {menuListLinks.map((link, i) => {
              return (
                <>
                  <Link href={`/dashboard/${link}`} key={i}>
                    <Box
                      as="button"
                      py="3"
                      px="10"
                      bgColor="purple.800"
                      color="white"
                      rounded="full"
                      fontWeight="semibold"
                      key={i}
                      w="64"
                      display="flex"
                      justifyContent="start"
                      _hover={{bgColor:"purple.300", color:'purple.700'}}
                    >
                      {menuListName.at(i)}
                    </Box>
                  </Link>
                </>
              );
            })}
            <Box
              as="button"
              py="3"
              px="10"
              bgColor="purple.800"
              color="white"
              rounded="full"
              fontWeight="semibold"
              w="64"
              display="flex"
              justifyContent="start"
              _hover={{bgColor:"purple.300", color:'purple.700'}}
            >
              Logout
            </Box>
          </Center>
        </GridItem>
        <GridItem bgColor="gray.50" w="full" p="2">
          <Center>
            <Heading>Your Store Name</Heading>
          </Center>
        </GridItem>
        <GridItem bgColor="gray.200" w="full"></GridItem>
      </Grid>
    </>
  );
};
