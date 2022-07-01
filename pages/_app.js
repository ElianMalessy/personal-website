import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";
import Main from "../components/layout/main";
import theme from "../components/theme";

export const PathContext = createContext();
function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <PathContext.Provider value={router.asPath}>
        <Main>
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
        </Main>
      </PathContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
