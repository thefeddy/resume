/* SCSS */
import './styles.scss'

/* React */
import React, { useRef, useMemo } from 'react';

/* Libs */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const TopoMaterialSpec = {
  uniforms: {
    uHeightmap: { value: null },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(0, 0) },
    uContourDensity: { value: 5.0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D uHeightmap; // This is your map texture asset
    uniform vec2 uMouse;
    uniform vec2 uResolution;
    varying vec2 vUv;

    void main() {
      vec2 mouse = uMouse / uResolution;
      float dist = distance(vUv, mouse);
    
      float distortionRadius = 0.25;
      float distortionStrength = 0.05; // Lower = subtle, Higher = dramatic
      
      float distortion = smoothstep(distortionRadius, 0.0, dist) * distortionStrength;

      vec2 dir = vUv - mouse;
      vec2 distortedUv = vUv + normalize(dir) * distortion;
      vec4 mapColor = texture2D(uHeightmap, distortedUv);
  
      gl_FragColor = mapColor;
    }
  `
};

const ShaderPlane = ({ heightmapUrl }: { heightmapUrl: string }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { size, viewport } = useThree();

  const texture = useTexture(heightmapUrl);

  const uniforms = useMemo(() => ({
    uHeightmap: { value: texture },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(size.width, size.height) },
  }), [texture]);

  useFrame((state) => {
    const { pointer } = state;
    if (materialRef.current) {
      const mouseX = ((pointer.x + 1) / 2) * size.width;
      const mouseY = ((pointer.y + 1) / 2) * size.height;

      const mUniforms = materialRef.current.uniforms;
      mUniforms.uMouse.value.x += (mouseX - mUniforms.uMouse.value.x) * 0.08;
      mUniforms.uMouse.value.y += (mouseY - mUniforms.uMouse.value.y) * 0.08;

      mUniforms.uResolution.value.set(size.width, size.height);
    }
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms}
        vertexShader={TopoMaterialSpec.vertexShader}
        fragmentShader={TopoMaterialSpec.fragmentShader}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  );
};

export default function TopoBackground() {
  return (
    <div className="topomap-bg">
      <React.Suspense fallback={<div className="topomap-bg" />}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ShaderPlane heightmapUrl="/assets/textures/10860210.png" />
        </Canvas>
      </React.Suspense>
    </div>
  );
}