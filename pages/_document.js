import { ColorModeScript } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import theme from "../components/theme";
import { getCookie, setCookie, hasCookie } from "cookies-next";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* 👇 Here's the script */}
        {getCookie("chakra-ui-color-mode") && (
          <ColorModeScript
            initialColorMode={getCookie("chakra-ui-color-mode")}
            type={"cookie"}
          />
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
