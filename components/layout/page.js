import { Flex } from "@chakra-ui/react";
import Layout from "./layout";
export default function Page({ children, title, ...props }) {
  return (
    <Flex
      h="100vh"
      w="100vw"
      p="1rem 1rem 1rem 1rem"
      overflow={"hidden"}
      justifyContent={"center"}
      {...props}
    >
      <Layout position="relative" title={title}>
        {children}
      </Layout>
    </Flex>
  );
}
