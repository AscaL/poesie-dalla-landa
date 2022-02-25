import { Container, Divider, Heading } from "@chakra-ui/react";
import { Link, Outlet } from "remix";

export default function PoesieRoute() {
  return (
    <div>
      <Heading size={"md"}>
        <Link to="/" aria-label="Poèsie">
          Home
        </Link>{" "}
        <Link to="/poesie" aria-label="Random Poèsia">
          Poesie
        </Link>
      </Heading>
      <Divider />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
