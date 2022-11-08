import { Box, Link, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack p="12" textAlign="center" background="grey.200" fontSize="sm">
      <Text>
        <Link href="/" variant="blue" fontWeight="500">
          Tech blog
        </Link>{" "}
        — A constructive and inclusive social network for software developers.
        With you every step of your journey.
      </Text>
      <Box>
        <Text>
          Built on{" "}
          <Link
            isExternal
            variant="blue"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.forem.com"
          >
            Forem
          </Link>{" "}
          — the{" "}
          <Link
            isExternal
            variant="blue"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/t/opensource"
          >
            open source
          </Link>{" "}
          software that powers{" "}
          <Link
            isExternal
            variant="blue"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to"
          >
            Teblo
          </Link>{" "}
          and other inclusive communities.
        </Text>
        <Text>
          Made with love and{" "}
          <Link
            isExternal
            variant="blue"
            target="_blank"
            rel="noopener noreferrer"
            href="https://dev.to/t/rails"
          >
            NextJS
          </Link>
          . Tech blog <span title="copyright">©</span> 2022.
        </Text>
      </Box>
    </Stack>
  );
}
