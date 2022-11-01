import {
  Box,
  Button,
  Heading,
  IconButton,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";
import { categories, tags } from "../data";

function Tile({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link
      href={href}
      variant="secondary"
      display="flex"
      alignItems="center"
      px="4"
      py="2"
      borderRadius="md"
      _hover={{
        background: "primary-rgba",
        color: "primary-darker",
        textDecoration: "underline",
      }}
    >
      {children}
    </Link>
  );
}

function Introduction() {
  const router = useRouter();

  return (
    <Stack
      as="nav"
      boxShadow="0 0 0 1px var(--chakra-colors-grey-900-rgba-2)"
      borderRadius="md"
      background="white"
      p="4"
      spacing="4"
    >
      <Heading size="md">
        <Link href="/" variant="blue">
          Tech blog
        </Link>{" "}
        is a community of 938,136 amazing developers
      </Heading>
      <Text>
        We&apos;re a place where coders share, stay up-to-date and grow their
        careers.
      </Text>

      <Stack direction="column" spacing="1">
        <Button
          onClick={() => router.push("/signup")}
          variant="outline"
          colorScheme="blue"
          fontWeight="600"
        >
          Create account
        </Button>

        <Button
          onClick={() => router.push("/login")}
          variant="ghost"
          colorScheme="blue"
          fontWeight="400"
        >
          Log in
        </Button>
      </Stack>
    </Stack>
  );
}

function Category() {
  return (
    <Box as="nav">
      <List>
        {categories.map((cat) => (
          <ListItem key={cat.href}>
            <Tile href={cat.href}>
              <Box mr="2"> {cat.icon}</Box> {cat.title}
            </Tile>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function SocialNetwork() {
  return (
    <Stack as="nav" direction="row">
      <IconButton
        variant="ghost"
        aria-label="twitter"
        icon={<FaTwitter />}
        title="Twitter"
      />
      <IconButton
        variant="ghost"
        aria-label="facebook"
        icon={<FaFacebookF />}
        title="Facebook"
      />
      <IconButton
        variant="ghost"
        aria-label="github"
        icon={<FaGithub />}
        title="Github"
      />
      <IconButton
        variant="ghost"
        aria-label="instagram"
        icon={<FaInstagram />}
        title="Instagram"
      />
      <IconButton
        variant="ghost"
        aria-label="twitch"
        icon={<FaTwitch />}
        title="Twitch"
      />
    </Stack>
  );
}

function Tag() {
  return (
    <Box as="nav">
      <Heading as="h3" size="sm" p="2">
        Popular Tags
      </Heading>
      <Box maxH="42vh" overflow="auto">
        {tags.map((tag) => (
          <Tile key={tag} href={`/t/${tag}`}>
            #{tag}
          </Tile>
        ))}
      </Box>
    </Box>
  );
}

export default function IndexLeft() {
  const { status } = useSession();

  return (
    <Stack as="aside" spacing="4">
      {status === "unauthenticated" && <Introduction />}
      <Category />
      <SocialNetwork />
      <Tag />
    </Stack>
  );
}
