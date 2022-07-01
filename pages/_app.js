import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/layout/navbar";
import theme from "../components/theme";

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar path={router.asPath} />
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
