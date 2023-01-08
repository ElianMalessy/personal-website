import { Flex } from "@chakra-ui/react";
import Layout from "./layout";

export default function Page({ children, title, ...props }) {
  return (
    <Flex
      display={"flex"}
      flexDirection="column"
      overflow={"hidden"}
      justifyContent={"center"}
      {...props}
    >
      <Layout title={title}>{children}</Layout>
    </Flex>
  );
}
