import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import DotGlobe from "./dotGlobe";
import { useColorMode } from "@chakra-ui/react";
import Loader from "./loader";
export default function GlobeContainer() {
  const { colorMode } = useColorMode();
  return (
    <Box id="canvas" position="absolute">
      <DotGlobe colorMode={colorMode} />
    </Box>
    // {/* <Suspense fallback={<Loader />}> */}
    // {/* <Canvas camera={{ position: [10, 0, 0] }}> */}

    // {/* </Canvas> */}
    // {/* </Suspense> */}
  );
}
