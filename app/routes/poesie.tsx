import { Text, Center, Box, Divider, Heading } from "@chakra-ui/react";
import { Link, LinksFunction, Outlet } from "remix";
import styles from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function PoesieRoute() {
  return (
    <Box>
      <Heading size={"md"}>
        <Link prefetch="intent" to="/" aria-label="Poèsie">
          <Text color="pink">Home</Text>
        </Link>{" "}
        <Link prefetch="intent" to="/poesie" aria-label="Random Poèsia">
          <Text color="pink">Poesie</Text>
        </Link>
      </Heading>
      <Divider variant={"dashed"} />
      <Center>
        <Outlet />
      </Center>
    </Box>
  );
}
