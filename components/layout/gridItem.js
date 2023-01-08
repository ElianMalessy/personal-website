import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} style={{ borderRadius: 12 }} />
        <LinkOverlay href={`${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
