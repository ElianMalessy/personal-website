import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { getCookie, setCookie, hasCookie } from "cookies-next";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const config = {
  initialColorMode: getCookie("chakra-ui-color-mode"),
  useSystemColorMode: false,
};
const theme = extendTheme({ config, styles });
console.log(getCookie("chakra-ui-color-mode"), theme.config.initialColorMode);
export default theme;
