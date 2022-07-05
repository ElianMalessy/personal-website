export default function shaderFunction(shader, tex2) {
  console.log(tex2);
  const uniforms = {
    value: tex2,
  };
  shader.uniforms.tex2 = uniforms;
  shader.vertexShader = `
    varying vec3 vPos;
    ${shader.vertexShader}
  `.replace(
    `#include <begin_vertex>`,
    `#include <begin_vertex>
      vPos = vec3(modelMatrix * vec4(transformed, 1.));
    `
  );
  //console.log(shader.vertexShader);
  shader.fragmentShader = `
    #define ss(a, b, c) smoothstep(a, b, c)
    uniform sampler2D tex2;
    varying vec3 vPos;
    ${shader.fragmentShader}
  `.replace(
    `#include <map_fragment>`,
    `
    #ifdef USE_MAP
      vec4 texelColor = texture2D( map, vUv );
      texelColor = mapTexelToLinear( texelColor );
      vec4 texelColor2 = texture2D( tex2, vUv);
      texelColor2 = mapTexelToLinear( texelColor2 );
      float f = fwidth(vPos.x);
      float transition = ss(-f, f, vPos.x);
      diffuseColor *= mix(texelColor, texelColor2, transition);
    #endif
    `
  );
}

export const atmosphereShader = {
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
