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
    const DOT_COUNT = 10000;
    const dotGeometry = new THREE.SphereGeometry(1, 5);
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
        const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
        const r = 100;
        const referenceAngle =
          theta - Math.floor(theta / (2 * Math.PI)) * 2 * Math.PI;
        vector.setFromSphericalCoords(r, phi, theta);
        const x = Math.round(r * referenceAngle);
        const y = Math.round(r * Math.log(Math.tan(Math.PI / 4 + phi / 2)));
        const arr = [180, 181, 176];
        if (y < 593) {
          console.log(
            imgData.data[x * y * 4],
            imgData.data[x * y * 4 + 1],
            imgData.data[x * y * 4 + 2],
            imgData.data[x * y * 4 + 3]
          );
          if (arr.indexOf(imgData.data[Math.round(x * y * 4)]) != -1) {
            console.log("here");
            continue;
          }
        }

        var material = new THREE.MeshBasicMaterial({
          color: 0x1a1a1a,
        });
        var mesh = new THREE.Mesh(dotGeometry, material);

        mesh.position.x = vector.x;
        mesh.position.y = vector.y;
        mesh.position.z = vector.z;
        group.add(mesh);
      }
      console.log(imgData.data);
    };
    img.crossOrigin = "Anonymous";
    img.src =
      "https://firebasestorage.googleapis.com/v0/b/personal-w-51f5c.appspot.com/o/map.webp?alt=media&token=425071af-9be1-480a-af1b-6dbafc9266c8";
    // water is the color rgb(181,225,236)
    // 1200 * 593
    scene.add(group);
    function update() {
      group.rotation.set(
        group.rotation.x,
        group.rotation.y + 0.005,
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
