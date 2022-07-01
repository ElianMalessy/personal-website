import { Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";

import Navbar from "./navbar";
import Head from "next/head";
import Loader from "../globe/loader";
const GlobeContainer = dynamic(() => import("../globe/globeContainer"), {
  ssr: false,
  loading: () => <Loader />,
});
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
      <GlobeContainer />
      <Container maxW="container.md" position="relative">
        {children}
      </Container>
    </Box>
  );
}
