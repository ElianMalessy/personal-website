import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Page from "../components/layout/page";
import Section from "../components/layout/section";

export default function Resume() {
  return (
    <Page title="CV">
      <Container>
        <Section>
          <Heading as="h1" variant="section-title">CV</Heading>
          <Text mb={5}>The latest version is stored directly with this site.</Text>
          <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer" rightIcon={<ExternalLinkIcon />} colorScheme="teal">Open CV</Button>
        </Section>
      </Container>
    </Page>
  );
}
