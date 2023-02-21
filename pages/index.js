import Head from "next/head";
import NextLink from "next/link";
import styles from "../styles/Home.module.css";
import {
  Container,
  Box,
  useColorModeValue,
  Button,
  Text,
  Heading,
  Link,
  LinkBox,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import Section from "../components/layout/section";
import Page from "../components/layout/page";

export default function Home() {
  return (
    <Page title={"Homepage"}>
      <Head>
        <meta name="description" content="Homepage" />
      </Head>
      <Section delay={0.3}>
        <Container>
          <Section delay={0.3}>
            <Box
              borderRadius="lg"
              mb={6}
              p={3}
              textAlign="center"
              bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            >
              Hello, my name is Elian Malessy!
            </Box>
          </Section>

          <Section delay={0.3}>
            I am a self-taught freelance full-stack developer with a passion for
            building interactive websites with engaging UI.
          </Section>
          <Section delay={0.3}>
            Currently I am developing a Game Engine using C++ and the Vulkan
            graphics API.
          </Section>
          <Section delay={0.3}>
            <Heading size={"md"} variant="section-title">
              Timeline
            </Heading>
            <Text as="span" fontWeight={"bold"}>
              2020
            </Text>
            <Box style={{ textIndent: "1rem" }} mb="1rem">
              <Text>Started CS50</Text>
              <Text>Learned C/C++, Python, HTML/CSS/JS, ReactJS</Text>
            </Box>
            <Text as="span" fontWeight={"bold"}>
              2021
            </Text>
            <Box style={{ textIndent: "1rem" }} mb="1rem">
              <Text>Completed CS50</Text>
              <LinkBox>
                <NextLink
                  href="https://elianmalessy.pythonanywhere.com/"
                  passHref
                >
                  <Link color={"teal"}>
                    Stock Market Game <ExternalLinkIcon />
                  </Link>
                </NextLink>
              </LinkBox>
              <LinkBox>
                <NextLink href="https://first-project-b7070.web.app/" passHref>
                  <Link color={"teal"}>
                    Chess Website <ExternalLinkIcon />
                  </Link>
                </NextLink>
              </LinkBox>
            </Box>
            <Text as="span" fontWeight={"bold"}>
              2022
            </Text>
            <Box style={{ textIndent: "1rem" }} mb="1rem">
              <Text> Learned NextJS, Svelte, React Native, R</Text>
              <Text>
                Used R as a Bioinformatics research assistant @{" "}
                <NextLink href="https://melotto.ucdavis.edu/" passHref>
                  <Link color={"teal"}>
                    Melotto Lab <ExternalLinkIcon />
                  </Link>
                </NextLink>
              </Text>
              <LinkBox>
                <NextLink
                  href="https://crop-research-website.vercel.app/"
                  passHref
                >
                  <Link color={"teal"}>
                    Crop Research Website <ExternalLinkIcon />
                  </Link>
                </NextLink>
              </LinkBox>
              <LinkBox>
                <NextLink
                  href="https://github.com/ElianMalessy/FoodFactsApp"
                  passHref
                >
                  <Link color={"teal"}>
                    FoodFactsApp <ExternalLinkIcon />
                  </Link>
                </NextLink>
              </LinkBox>
              <LinkBox>
                <NextLink
                  href="https://github.com/ElianMalessy/VulkanMinecraft"
                  passHref
                >
                  <Link color={"teal"}>
                    Vulkan Game Engine <ExternalLinkIcon />
                  </Link>
                </NextLink>
              </LinkBox>
            </Box>
          </Section>
          <Box align="center" my={4}>
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Container>
      </Section>
    </Page>
  );
}
