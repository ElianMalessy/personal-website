import Head from "next/head";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Page from "../components/layout/page";
import Section from "../components/layout/section";

const WorkItem = ({ title, context, children, tags, result }) => {
  const quiet = useColorModeValue("gray.700", "whiteAlpha.700");

  return (
    <Box py={6}>
      <Heading as="h3" fontSize="xl" mb={1}>{title}</Heading>
      <Text fontSize="sm" color="teal.400" fontWeight="bold" mb={3}>{context}</Text>
      <Text color={quiet}>{children}</Text>
      {result && <Text mt={3} fontSize="sm"><Text as="span" fontWeight="bold">Result:</Text> {result}</Text>}
      <Flex mt={4} gap={2} wrap="wrap">
        {tags.map((tag) => <Tag key={tag} size="sm" variant="subtle" colorScheme="gray">{tag}</Tag>)}
      </Flex>
    </Box>
  );
};

export default function Projects() {
  const quiet = useColorModeValue("gray.700", "whiteAlpha.700");

  return (
    <Page title="Research & Projects">
      <Head>
        <meta name="description" content="Research and machine learning projects by Elian Hijmans Malessy." />
      </Head>
      <Container>
        <Section>
          <Heading as="h1" fontSize={24} mb={3}>Research & projects</Heading>
          <Text color={quiet}>
            Selected work in machine learning research and research-oriented engineering.
          </Text>
        </Section>

        <Section delay={0.1}>
          <Heading as="h2" variant="section-title">Research experience</Heading>
          <WorkItem
            title="Stochastic optimization for discrete world models"
            context="Intelligent Dynamics Lab · Advisor: Roy Fox"
            tags={["PyTorch", "Reinforcement learning", "Optimization"]}
          >
            Developed a PyTorch library of gradient estimators and control variates. I also
            replaced straight-through estimators in DreamerV3 with Gumbel-Softmax relaxations for
            discrete latents and actions.
          </WorkItem>
          <Divider />
          <WorkItem
            title="Double descent and model merging"
            context="Machine Learning Research Group · Advisor: Alexander Ihler"
            tags={["Generalization", "CNNs", "Model compression"]}
          >
            Studied how scale, distillation, and regularization affect minima flatness and
            generalization. I also merged pruned CNNs by combining similar filters and evaluating
            unique filters through grouped convolutions.
          </WorkItem>
          <Divider />
          <WorkItem
            title="Surrogate models for thermal simulation"
            context="California Institute for Telecommunications and Information Technology"
            tags={["Scientific ML", "Simulation", "Python"]}
          >
            Developed physics-informed neural networks as efficient surrogates for finite-element
            simulations used to evaluate thermal-storage systems.
          </WorkItem>
        </Section>

        <Section delay={0.15}>
          <Heading as="h2" variant="section-title">Selected projects</Heading>
          <WorkItem
            title="Molecular generation"
            context="Deep generative models · 2026"
            tags={["Graph VAE", "Transformers", "Normalizing flows"]}
            result="Fréchet ChemNet Distance of 1.81 on ZINC-250k."
          >
            Built a graph variational autoencoder with a property-prediction head, inverse
            autoregressive flow, and autoregressive transformer decoder to generate drug-like molecules.
          </WorkItem>
          <Divider />
          <WorkItem
            title="Semi-supervised code translation"
            context="Programming language translation · 2026"
            tags={["CodeT5", "Semi-supervised learning", "NLP"]}
            result="Approximately 76% CodeBLEU and 20% HumanEval-X."
          >
            Fine-tuned CodeT5 for Python–C++ translation using paired examples alongside
            backtranslation and denoising autoencoding on unpaired code.
          </WorkItem>
        </Section>

        <Section delay={0.2}>
          <Text color={quiet}>
            More implementation details and experiments are available on{" "}
            <Link color="teal.400" href="https://github.com/elian-malessy" isExternal>
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
            , with a complete experience history in my{" "}
            <Link color="teal.400" href="/resume.pdf" isExternal>
              CV <ExternalLinkIcon mx="2px" />
            </Link>.
          </Text>
        </Section>
      </Container>
    </Page>
  );
}
