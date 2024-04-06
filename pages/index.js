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
              shadow={"lg"}
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
            Currently I am rewriting my chess website to use NextJS 13
          </Section>
          <Section delay={0.3}>
            <Heading size={"md"} variant="section-title">
              Timeline
            </Heading>
            <Text as="span" fontWeight={"bold"}>
              2021
            </Text>
            <Box style={{ textIndent: "1rem" }} mb="1rem">
              <Text>Completed CS50</Text>
              <Text>Learned C/C++, Python, HTML/CSS/JS, ReactJS</Text>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://github.com/ElianMalessy/stock-trading-simulator"
                  isExternal
                >
                  Stock Market Game <ExternalLinkIcon />
                </Link>
              </LinkBox>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://github.com/ElianMalessy/Chess-App"
                  isExternal
                >
                  Chess Website <ExternalLinkIcon />
                </Link>
              </LinkBox>
            </Box>

            <Text as="span" fontWeight={"bold"}>
              2022
            </Text>
            <Box style={{ textIndent: "1rem" }} mb="1rem">
              <Text> Learned NextJS, Svelte, React Native, R</Text>
              <Text>
                Used R as a Bioinformatics research assistant @{" "}
                <Link
                  color={"teal"}
                  href="https://melotto.ucdavis.edu/"
                  isExternal
                >
                  Melotto Lab <ExternalLinkIcon />
                </Link>
              </Text>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://crop-research-website.vercel.app/"
                  isExternal
                >
                  Crop Research Website <ExternalLinkIcon />
                </Link>
              </LinkBox>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://www.kickstartcodingtutors.com/"
                  isExternal
                >
                  Programming Tutoring Website
                </Link>
              </LinkBox>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://github.com/ElianMalessy/FoodFactsApp"
                  isExternal
                >
                  FoodFactsApp <ExternalLinkIcon />
                </Link>
              </LinkBox>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://github.com/ElianMalessy/VulkanMinecraft"
                  isExternal
                >
                  Vulkan Game Engine <ExternalLinkIcon />
                </Link>
              </LinkBox>
            </Box>
            <Text as="span" fontWeight={"bold"}>
              2023
            </Text>
            <Box style={{ textIndent: "1rem" }} mb="1rem">
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://github.com/ElianMalessy/Image-to-desmos"
                  isExternal
                >
                  Image to Desmos website <ExternalLinkIcon />
                </Link>
              </LinkBox>
              <LinkBox>
                <Link
                  color={"teal"}
                  href="https://next-chess-app.vercel.app/"
                  isExternal
                >
                  Updated Chess App <ExternalLinkIcon />
                </Link>
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
