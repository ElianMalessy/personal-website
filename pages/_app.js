import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { createContext } from "react";

import { Chakra } from "../components/chakra";
import Main from "../components/layout/main";

export const PathContext = createContext();
function App({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
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
    </Chakra>
  );
}
export { getServerSideProps } from "../components/chakra";

export default App;
