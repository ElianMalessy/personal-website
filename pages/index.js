import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Page from "../components/layout/page";
import Section from "../components/layout/section";

const ResearchItem = ({ title, children }) => (
  <ListItem mb={5}>
    <Text fontWeight="bold">{title}</Text>
    <Text color={useColorModeValue("gray.700", "whiteAlpha.700")}>{children}</Text>
  </ListItem>
);

export default function Home() {
  const quiet = useColorModeValue("gray.700", "whiteAlpha.700");

  return (
    <Page title="Home">
      <Head>
        <meta
          name="description"
          content="Elian Hijmans Malessy is an MSc Artificial Intelligence student at the University of Amsterdam."
        />
      </Head>
      <Container>
        <Section delay={0.2}>
          <Box
            borderRadius="lg"
            mb={7}
            p={3}
            textAlign="center"
            shadow="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          >
            Hello, I&apos;m Elian Hijmans Malessy.
          </Box>
        </Section>

        <Section delay={0.25}>
          <Heading as="h1" size="lg" mb={4}>
            Machine learning researcher and engineer
          </Heading>
          <Text color={quiet}>
            I&apos;m pursuing an MSc in Artificial Intelligence at the University of Amsterdam after
            completing my B.S. in Computer Science at UC Irvine.
          </Text>
          <Text mt={3} color={quiet}>
            I&apos;m particularly interested in probabilistic machine learning and generalization.
          </Text>
        </Section>

        <Section delay={0.3}>
          <Heading as="h2" variant="section-title">
            Research
          </Heading>
          <List>
            <ResearchItem title="Stochastic optimization for reinforcement learning">
              At UC Irvine&apos;s Intelligent Dynamics Lab, I built PyTorch tools for gradient
              estimation and studied continuous relaxations for discrete world models.
            </ResearchItem>
            <ResearchItem title="Generalization and model merging">
              With UC Irvine&apos;s Machine Learning Research Group, I investigated double descent,
              minima flatness, and parameter-efficient ways to merge pruned neural networks.
            </ResearchItem>
            <ResearchItem title="Machine learning for physical systems">
              At Calit2, I developed neural-network surrogates for finite-element thermal
              simulations and real-time computer vision pipelines.
            </ResearchItem>
          </List>
        </Section>

        <Section delay={0.35}>
          <Heading as="h2" variant="section-title">
            Recent work
          </Heading>
          <Text color={quiet}>
            Recent projects include a graph variational autoencoder for molecular generation and
            semi-supervised Python–C++ translation with CodeT5. I have also worked on production
            systems at Uber and Microsoft.
          </Text>
          <HStack mt={6} spacing={3} flexWrap="wrap">
            <NextLink href="/projects" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Research & projects
              </Button>
            </NextLink>
            <Button
              as="a"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<DownloadIcon />}
              variant="outline"
            >
              Resume
            </Button>
          </HStack>
        </Section>

        <Section delay={0.4}>
          <Heading as="h2" variant="section-title">
            Contact
          </Heading>
          <Text color={quiet}>
            I&apos;m based in Amsterdam and open to research collaborations and machine learning
            research roles.
          </Text>
          <HStack mt={3} spacing={5}>
            <Link color="teal.400" href="mailto:elian.malessy@gmail.com">
              Email <ExternalLinkIcon mx="2px" />
            </Link>
            <Link color="teal.400" href="https://github.com/ElianMalessy" isExternal>
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </HStack>
        </Section>
      </Container>
    </Page>
  );
}
