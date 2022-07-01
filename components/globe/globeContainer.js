import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import Globe from "./globe";

export default function GlobeContainer() {
  return (
    <Box h="100vh" w="100vw" position="absolute" p="1rem 1rem 1rem 1rem">
      <Canvas>
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </Box>
  );
}
