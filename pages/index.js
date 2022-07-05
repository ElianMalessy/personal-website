import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Box, useColorModeValue } from "@chakra-ui/react";

import Section from "../components/layout/section";
import Page from "../components/layout/page";
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
      </Container>
    </Page>
  );
}
