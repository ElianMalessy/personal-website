import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

import shaderFunction, { atmosphereShader } from "./shader";
import EarthNormalMap from "../../public/assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../public/assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../public/assets/8k_earth_clouds.jpg";

export default function Globe({ colorMode }) {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const atmRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    atmRef.current.rotation.y = Math.PI;
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 4.5;
  });
  const [normalMap, specularMap, cloudsMap] = useTexture([
    EarthNormalMap.src,
    EarthSpecularMap.src,
    EarthCloudsMap.src,
  ]);
  const nightMap = useMemo(() => {
    return new THREE.TextureLoader().load(
      "https://firebasestorage.googleapis.com/v0/b/personal-w-51f5c.appspot.com/o/8k_earth_nightmap.jpg?alt=media&token=993cdc96-4343-4f45-b1d9-6bef7c111afc"
    );
  }, []);
  const dayMap = useMemo(() => {
    return new THREE.TextureLoader().load(
      "https://firebasestorage.googleapis.com/v0/b/personal-w-51f5c.appspot.com/o/8k_earth_daymap.jpg?alt=media&token=2cc3537c-7831-448f-9c61-7682204af920"
    );
  }, []);

  function shaderFunctionWrapper(shader) {
    colorMode === "light"
      ? shaderFunction(shader, dayMap)
      : shaderFunction(shader, nightMap);
  }

  return (
    <>
      {colorMode === "light" && (
        <>
          <ambientLight intensity={2} />
          <pointLight color="#ffffff" position={[10, 0, 2]} intensity={1.2} />
        </>
      )}
      {colorMode === "dark" && (
        <>
          <ambientLight intensity={0.2} />

          <pointLight color="#ffffff" position={[-10, 0, 2]} intensity={1.2} />
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
          />
        </>
      )}
      <mesh position={[0, -0.2, 0]} ref={atmRef}>
        <sphereGeometry args={[2.075, 64, 64]} />
        <shaderMaterial
          attach={"material"}
          args={[atmosphereShader]}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh ref={cloudsRef} position={[0, -0.2, 0]}>
        <sphereGeometry args={[2.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh ref={earthRef} position={[0, -0.2, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        {colorMode === "dark" && (
          <meshStandardMaterial
            onBeforeCompile={shaderFunctionWrapper}
            map={dayMap}
            normalMap={normalMap}
            metalness={0.4}
            roughness={0.7}
          />
        )}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
        />
      </mesh>
    </>
  );
}
