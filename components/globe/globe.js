import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../public/assets/8k_earth_daymap.jpg";
import EarthNormalMap from "../../public/assets/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../public/assets/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../public/assets/8k_earth_clouds.jpg";
import EarthNightMap from "../../public/assets/8k_earth_nightmap.jpg";

export default function Globe({ colorMode }) {
  //const fetcher = (url) => axios.get(url).then((r) => r.data);
  //const { data: res } = useSWR('/api', fetcher);

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;
  });
  const [dayMap, nightMap, normalMap, specularMap, cloudsMap] = useTexture([
    EarthDayMap.src,
    EarthNightMap.src,
    EarthNormalMap.src,
    EarthSpecularMap.src,
    EarthCloudsMap.src,
  ]);
  const globeShaderMaterial = {
    uniforms: {},
    vertexShader: `
    varying vec3 vertexNormal;
    void main() {
    vertexNormal = normal;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
    gl_Position = projectionMatrix * mvPosition;
    }`,
    fragmentShader: `
    varying vec3 vertexNormal;
    void main() {
    float intensity = pow(0.75 - dot(vertexNormal, vec3(0, 0, 1.0)), 2.0);
    gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
  }`,
  };

  return (
    <>
      <ambientLight />
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      {colorMode === "dark" && (
        <Stars
          radius={300}
          depth={60}
          count={20000}
          factor={7}
          saturation={0}
          fade={true}
        />
      )}
      <mesh
        position={[0, 0, 0]}
        onPointerDown={() => setMouseDown(true)}
        onPointerUp={() => setMouseDown(false)}
      >
        <sphereGeometry args={[1.075, 64, 64]} />
        <shaderMaterial
          attach={"material"}
          args={[globeShaderMaterial]}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh
        ref={cloudsRef}
        position={[0, 0, 0]}
        //animate={controls}
      >
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh
        ref={earthRef}
        position={[0, 0, 0]}
        //animate={controls}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        {colorMode == "light" && (
          <meshStandardMaterial
            map={dayMap}
            normalMap={normalMap}
            metalness={0.4}
            roughness={0.7}
          />
        )}
        {colorMode == "dark" && (
          <meshStandardMaterial
            map={nightMap}
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
