import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { startTransition } from "react";
import { getCookie, setCookie, hasCookie } from "cookies-next";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const toggleColor = () => {
    toggleColorMode();
    const color = getCookie("chakra-ui-color-mode");
    setCookie("chakra-ui-color-mode", color === "dark" ? "light" : "dark");
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColor}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
