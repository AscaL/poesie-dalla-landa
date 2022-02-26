import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "remix";
import type { MetaFunction } from "remix";
import {
  ChakraProvider,
  Box,
  Heading,
  CSSReset,
  Image,
  Center,
  extendTheme,
} from "@chakra-ui/react";
import logo from "../public/title.png";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.800",
      },
    },
  },
});

export const meta: MetaFunction = () => {
  const title = `Poèsie dalla Landa`;
  const description = `Le Magnifiche Poèsie`;
  return { title, description };
};

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Center>
          <Image src={logo}></Image>
        </Center>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}

function Document({
  children,
  title = `Poèsie dalla Landa`,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <title>{title}</title>
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="purple.600">
            [CatchBoundary]: {caught.status} {caught.statusText}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document title="Error!">
      <ChakraProvider>
        <Box>
          <Heading as="h1" bg="blue.500">
            [ErrorBoundary]: There was an error: {error.message}
          </Heading>
        </Box>
      </ChakraProvider>
    </Document>
  );
}
