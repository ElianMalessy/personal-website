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

while (true) {
  if (!hasCookie("chakra-ui-color-mode"))
    setCookie("chakra-ui-color-mode", "dark");
  else break;
}

const config = {
  initialColorMode: getCookie("chakra-ui-color-mode"),
  useSystemColorMode: false,
};
fetch(`http://localhost:3000/api?color=${config.initialColorMode}`);
const theme = extendTheme({ config, styles });
console.log(getCookie("chakra-ui-color-mode"), theme.config.initialColorMode);
export default theme;
