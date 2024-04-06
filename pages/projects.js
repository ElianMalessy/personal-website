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
              id="https://github.com/ElianMalessy/stock-trading-simulator"
              title="Stock Market Game"
              thumbnail={tradingSimPic}
            >
              A stock market game where users can simulate buying, selling and
              getting a quote of stocks with real time data from the stock
              market. (IEX changed their terms of service, so this website is no
              longer active)
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="https://github.com/ElianMalessy/FoodFactsApp"
              title="FoodFactsApp"
              thumbnail={foodPic}
            >
              An app that allows users to search for environmentally and
              nutritionally beneficial foods. It can also scan barcodes to
              display the Eco and Nutri scores of products.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="https://next-chess-app.vercel.app/"
              title="Chess For Friends"
              thumbnail={chessPic}
            >
              A chess website where users can friend each other, and send links
              of games to play with each other.
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
