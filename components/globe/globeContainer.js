import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Globe from "./globe";
import { useColorMode } from "@chakra-ui/react";
import Loader from "./loader";
export default function GlobeContainer() {
  const { colorMode } = useColorMode();
  return (
    <Box h="100vh" w="100vw" position="absolute">
      <Suspense fallback={<Loader />}>
        <Canvas>
          <Globe colorMode={colorMode} />
        </Canvas>
      </Suspense>
    </Box>
  );
}
