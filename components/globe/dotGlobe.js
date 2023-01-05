import * as THREE from "three";
import { useEffect, useRef, useCallback, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
export default function DotGlobe() {
  const first = useRef(true);
  const group = useRef();

  const [rendererState, setRendererState] = useState();
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (!first.current) {
      return;
    }
    first.current = false;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 285);

    const { current: container } = refContainer;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight - 1);
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);
    setRendererState(renderer);

    const DOT_COUNT = 5000;
    group.current = new THREE.Object3D();
    const dotGeometry = new THREE.SphereGeometry(1, 10);
    const vector = new THREE.Vector3();

    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = function () {
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
      var imgData = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
      for (let i = DOT_COUNT; i >= 0; i--) {
        const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
        const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
        const r = 150;
        const referenceAngle =
          theta - Math.floor(theta / (2 * Math.PI)) * 2 * Math.PI;
        vector.setFromSphericalCoords(r, phi, theta);

        const lat = phi * (180 / Math.PI);
        const long = referenceAngle * (180 / Math.PI);
        const rownr = Math.floor(lat / 0.5);
        let colnr = Math.floor(long / 0.5);

        const cell = Math.round(rownr * 720 + colnr);
        const index = cell * 4;
        if (colnr <= 1 || colnr >= 719) continue;
        if (imgData.data[index] !== 0) {
          continue;
        }

        const material = new THREE.MeshBasicMaterial({
          color: colorMode === "light" ? 0x1a1a1a : 0xf1f1f1,
        });
        const mesh = new THREE.Mesh(dotGeometry, material);
        mesh.position.x = vector.x;
        mesh.position.y = vector.y;
        mesh.position.z = vector.z;
        group.current.add(mesh);
      }
    };
    img.crossOrigin = "Anonymous";
    img.src =
      "https://firebasestorage.googleapis.com/v0/b/personal-w-51f5c.appspot.com/o/world.png?alt=media&token=088adbae-7296-41c1-ac04-6f4f2a1efb72";
    // 720 * 360
    group.current.rotation.x = 0.1;
    scene.add(group.current);
    let season = 10;
    setInterval(() => {
      if (season > 0) {
        const intv = setInterval(() => {
          if (season > -10) {
            season -= 1;
          }
        }, 300);
        if (season <= -10) clearInterval(intv);
      } else if (season < 0) {
        const intv = setInterval(() => {
          if (season < 10) {
            season += 1;
          }
        }, 300);
        if (season >= 10) clearInterval(intv);
      }
    }, 8000);

    function update() {
      //console.log(season);
      group.current.rotation.set(
        group.current.rotation.x + season / 25000,
        group.current.rotation.y + 0.0035,
        group.current.rotation.z
      );

      camera.lookAt(scene.position);
      renderer.render(scene, camera);

      requestAnimationFrame(update);
    }

    update();
  }, []);

  useEffect(() => {
    if (group.current.children <= 0) return;
    for (let i = 0; i < group.current.children.length; i++) {
      group.current.children[i].material = new THREE.MeshBasicMaterial({
        color: colorMode === "light" ? 0x1a1a1a : 0xf1f1f1,
      });
    }
  }, [colorMode]);

  const refContainer = useRef();
  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && rendererState) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
      console.log(scW, scH);
      rendererState.setSize(scW, scH);
    }
  }, [rendererState]);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [rendererState, handleWindowResize]);

  return (
    <Box
      ref={refContainer}
      h="100%"
      w="100%"
      display={"flex"}
      justifyContent="center"
    />
  );
}
