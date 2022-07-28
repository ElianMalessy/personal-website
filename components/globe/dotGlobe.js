import * as THREE from "three";
import { useEffect, useRef } from "react";
export default function DotGlobe() {
  let first = useRef(true);
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
    camera.position.set(0, 0, 250);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight - 1);
    renderer.setClearColor(0xffffff, 0);
    document.getElementById("canvas").appendChild(renderer.domElement);

    const group = new THREE.Object3D();
    const DOT_COUNT = 15000;
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
      // var red = imgData.data[0];
      // var green = imgData.data[1];
      // var blue = imgData.data[2];
      // var alpha = imgData.data[3];
      for (let i = DOT_COUNT; i >= 0; i--) {
        const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
        // phi only goes from 0 to pi not from 0 to 2pi
        const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
        const r = 110;
        const referenceAngle =
          theta - Math.floor(theta / (2 * Math.PI)) * 2 * Math.PI;
        vector.setFromSphericalCoords(r, phi, theta);

        const lat = phi * (180 / Math.PI);
        const long = referenceAngle * (180 / Math.PI);
        const rownr = Math.floor(lat / 0.5);
        let colnr = Math.floor(long / 0.5);

        const cell = Math.round(rownr * 720 + colnr);
        const index = cell * 4;
        if (colnr <= 1 || colnr >= 718) continue;
        if (imgData.data[index] !== 0) {
          continue;
        }

        const material = new THREE.MeshBasicMaterial({
          color: 0x1a1a1a,
        });
        const mesh = new THREE.Mesh(dotGeometry, material);
        mesh.position.x = vector.x;
        mesh.position.y = vector.y;
        mesh.position.z = vector.z;
        group.add(mesh);
      }
    };
    img.crossOrigin = "Anonymous";
    img.src =
      "https://firebasestorage.googleapis.com/v0/b/personal-w-51f5c.appspot.com/o/world.png?alt=media&token=088adbae-7296-41c1-ac04-6f4f2a1efb72";
    // 720 * 360
    group.rotation.x = 0.2;
    scene.add(group);
    let season = 0.0005;
    setInterval(() => {
      if (season > 0) {
        setInterval(() => {
          if (season > -0.0005) {
            season -= 0.00005;
          }
        }, 300);
        console.log(season);
      } else if (season < 0) {
        setInterval(() => {
          if (season < 0.0005) {
            season += 0.00005;
          }
        }, 300);
        console.log(season);
      }
    }, 10000);

    function update() {
      group.rotation.set(
        group.rotation.x + season,
        group.rotation.y + 0.0035,
        group.rotation.z
      );

      camera.lookAt(scene.position);
      renderer.render(scene, camera);

      requestAnimationFrame(update);
    }
    update();
  }, []);

  return <></>;
}
