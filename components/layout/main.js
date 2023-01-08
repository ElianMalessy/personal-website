import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";

import GlobeLoader from "../globe/globeLoader";
const LazyDotGlobe = dynamic(() => import("../globe/dotGlobe"), {
  ssr: false,
  loading: () => <GlobeLoader />,
});
import Navbar from "./navbar";
import Footer from "./footer";

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
      <Container
        maxW="container.md"
        position="relative"
        p="1rem 1rem 1rem 1rem"
      >
        <LazyDotGlobe />
        {children}
        <Footer />
      </Container>
    </Box>
  );
}
