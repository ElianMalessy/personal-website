import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";

import Section from "../components/layout/section";
import Page from "../components/layout/page";
const LazyDotGlobe = dynamic(() => import("../components/globe/dotGlobe"), {
  ssr: false,
});
export default function Home() {
  return (
    <Page title={"Homepage"}>
      <Head>
        <meta name="description" content="Homepage" />
      </Head>
      <Container>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello, my name is Elian Malessy!
        </Box>
        <Section delay={0.1}>
          I am a freelance full-stack developer with a passion for building
          interactive websites with engaging UI.
        </Section>
        <LazyDotGlobe />
        <Section delay={0.1}>
          I have been programming for 3+ years and am experienced with
          HTML/CSS/JS, ReactJs, NexJs, Svelte, R and C/C++. Currently I am
          developing a Game Engine using C++ and the Vulkan graphics
          specification as well as learning other languages like Flutter.
        </Section>
      </Container>
    </Page>
  );
}
