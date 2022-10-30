import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
import Layout from "../../components/layout/layout";

export default function Login() {
  const loginOptions = {
    callbackUrl: "/",
  };

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        background="#f5f5f5"
      >
        <Flex
          direction="column"
          p={12}
          background="white"
          width="35%"
          borderRadius="1rem"
        >
          <Flex display="flex" direction="column" mb={12}>
            <Heading mb={6} fontSize="2rem">
              Welcome to DEV Community 👩‍💻👨‍💻
            </Heading>
            <Text fontSize="20px" ml="2rem" mt="-1rem" mb="1.7rem">
              DEV Community 👩‍💻👨‍💻 is a community of 939,039 amazing developers
            </Text>

            <Button
              onClick={() => signIn("facebook", loginOptions)}
              mb={2}
              colorScheme="facebook"
              data-cy="login-with-facebook"
            >
              <BsTwitter />
              Continue with Facebook
            </Button>
            <Button mb={2} colorScheme="twitter" color="white">
              Continue with Twitter
            </Button>
            <Button
              onClick={() => signIn("github", loginOptions)}
              mb={2}
              background="#24292e"
              color="white"
              data-cy="login-with-github"
            >
              Continue with Github
            </Button>
            <Button mb={2} background="#1da1f2" color="white">
              Continue with Google
            </Button>
          </Flex>

          <Flex display="flex" direction="column">
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input variant="filled" mb={3} type="email" />

              <FormLabel>Password</FormLabel>
              <Input variant="filled" mb={3} type="password" />

              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button width="100%" mt="1rem">
                Continue
              </Button>
            </FormControl>
          </Flex>
          <Box textAlign="center" color="blue" mt="3rem">
            <Link href="">I for got my password</Link>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
}
