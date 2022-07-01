import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const GlobeSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const SpinnerContainer = ({ children }) => (
  <Box
    d="flex"
    w="100vw"
    h="100vh"
    justifyContent="center"
    alignItems="center"
    position="absolute"
  >
    {children}
  </Box>
);

const Loader = () => {
  return (
    <SpinnerContainer>
      <GlobeSpinner />
    </SpinnerContainer>
  );
};

export default Loader;
