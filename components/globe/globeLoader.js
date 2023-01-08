import { Spinner } from "@chakra-ui/react";

export default function GlobeLoader() {
  return (
    <Spinner
      size="xl"
      position="absolute"
      left="calc(50% + calc(0px - var(--spinner-size) / 2))"
      top="calc(4rem + 170px)"
    />
  );
}
