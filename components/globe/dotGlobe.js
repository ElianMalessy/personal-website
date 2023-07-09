import * as THREE from "three";
import { useEffect, useRef, useCallback, useState, useMemo } from "react";
import { useColorMode } from "@chakra-ui/react";
export default function DotGlobe() {
  const first1 = useRef(true);
  const first2 = useRef(true);

  const [rendererState, setRendererState] = useState();
  const { colorMode } = useColorMode();

  const group = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (first1.current === true) {
      first1.current = false;
      const DOT_COUNT = 7000;

      const dotGeometry = new THREE.SphereGeometry(1, 10);
      const vector = new THREE.Vector3();

      const canvas = document.createElement("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        var imgData = ctx.getImageData(
          0,
          0,
          img.naturalWidth,
          img.naturalHeight
        );

        const material = new THREE.MeshBasicMaterial({
          color: colorMode === "light" ? 0x1a1a1a : 0xf1f1f1,
        });
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

          const mesh = new THREE.Mesh(dotGeometry, material);
          mesh.position.x = vector.x;
          mesh.position.y = vector.y;
          mesh.position.z = vector.z;
          group.add(mesh);

          mesh.geometry.dispose();
        }
        material.dispose();
        console.log("ended");
      };
      img.crossOrigin = "Anonymous";
      img.src =
        "https://firebasestorage.googleapis.com/v0/b/personal-w-51f5c.appspot.com/o/world.png?alt=media&token=088adbae-7296-41c1-ac04-6f4f2a1efb72";
      // 720 * 360
    }
    return () => {
      group.children.forEach((child) => {
        child.material.dispose();
        child.geometry.dispose();
      });

      group.children = [];
    };
  }, [group]);

  useEffect(() => {
    if (first2.current === true) {
      first2.current = false;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      camera.position.set(0, 0, 285);

      const { current: container } = refContainer;
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight - 1);
      renderer.setClearColor(0xffffff, 0);
      container.appendChild(renderer.domElement);
      setRendererState(renderer);

      group.rotation.x = 0.2;
      group.rotation.y = 0.1;
      scene.add(group);

      let season = 500;
      function changeSeasons() {
        requestAnimationFrame(changeSeasons);
        console.log(season);
        if (group.rotation.x >= Math.PI / 4 && season >= -500) season--;
        else if (group.rotation.x <= -0.05 && season <= 500) season++;
      }
      changeSeasons();

      function update() {
        requestAnimationFrame(update);
        group.rotation.set(
          group.rotation.x + season / 2500000,
          group.rotation.y + 0.002,
          group.rotation.z
        );
        renderer.render(scene, camera);
      }
      update();
    }

    return () => {
      group.children.forEach((child) => {
        child.material.dispose();
        child.geometry.dispose();
      });

      group.children = [];
    };
  }, [group]);

  useEffect(() => {
    const newColor = colorMode === "light" ? 0x1a1a1a : 0xf1f1f1;
    if (group.children.length > 0) {
      for (let i = 0; i < group.children.length; i++) {
        group.children[i].material = new THREE.MeshBasicMaterial({
          color: newColor,
        });
      }
    }
  }, [colorMode, group]);

  const refContainer = useRef();
  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && rendererState) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
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
    <div
      ref={refContainer}
      style={{
        marginTop: "4rem",
        display: "flex",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    />
  );
}
