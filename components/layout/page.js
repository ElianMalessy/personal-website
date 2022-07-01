import { Flex } from "@chakra-ui/react";
import Layout from "./layout";
export default function Page({ children, title, ...props }) {
  return (
    <Flex
      p="1rem 1rem 1rem 1rem"
      overflow={"hidden"}
      justifyContent={"center"}
      {...props}
    >
      <Layout title={title}>{children}</Layout>
    </Flex>
  );
}
