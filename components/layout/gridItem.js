import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
      <NextLink href={`${id}`} passHref scroll={false}>
        <LinkBox cursor="pointer">
          <Image src={thumbnail} alt={title} style={{ borderRadius: 12 }} />
          <LinkOverlay href={`${id}`}></LinkOverlay>
        </LinkBox>
      </NextLink>
    </motion.div>

    <Text fontSize={20}>{title}</Text>
    <Text fontSize={14}>{children}</Text>
  </Box>
);
