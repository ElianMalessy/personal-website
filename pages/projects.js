import { SimpleGrid, Container, Heading } from "@chakra-ui/react";

import Page from "../components/layout/page";
import Section from "../components/layout/section";
import { WorkGridItem } from "../components/layout/gridItem";

import tradingSimPic from "../public/stockmarketpic.png";
import chessPic from "../public/chesspic.png";
import cropPic from "../public/croppic.png";
import foodPic from "../public/foodpic.png";

export default function projects() {
  return (
    <Page title={"Projects"}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="https://elianmalessy.pythonanywhere.com/"
              title="Stock Market Game"
              thumbnail={tradingSimPic}
            >
              A stock market game where users can simulate buying, selling and
              getting a quote of stocks with real time data from the stock
              market
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="https://github.com/ElianMalessy/FoodFactsApp"
              title="FoodFactsApp"
              thumbnail={foodPic}
            >
              An app that allows users to search for environmentally and
              nutritionally beneficial foods. It also can be used to scan
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="https://first-project-b7070.web.app/"
              title="Chess For Friends"
              thumbnail={chessPic}
            >
              A chess website where users can send links of games to play with
              each other.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="https://crop-research-website.vercel.app/"
              title="IMAGE Research"
              thumbnail={cropPic}
            >
              A website displaying crop data collection research funded by the
              Gates Foundation done in African countries
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Page>
  );
}
