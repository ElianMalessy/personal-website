import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";

import Navbar from "./navbar";

export default function Main({ children }) {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Elian Malessy" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <Container maxW="container.md" position="relative">
        {children}
      </Container>
    </Box>
  );
}
