import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Model from "../Model/Model";
import CustomCube from "../CustomCube/CustomCube";

 const name = (type) => `WeRobotLogo.jpg`;

function SphereTexture() {
  const [
    colorMap,
     aoMap
  ] = useLoader(TextureLoader, [
    name("Color"),
     name("AmbientOcclusion")
  ]);

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <CustomCube position={[1.5, 1.5, 1.5]} color={'purple'} colorHovered={'yellow'} />
      <CustomCube position={[1.5, -1.5, 1.5]} color={'purple'} colorHovered={'yellow'} />
      <Model position={[-2, -2, -2]} />

      <mesh>
        <sphereBufferGeometry args={[1, 100, 100]} />
        <meshStandardMaterial
          displacementScale={0.4}
          map={colorMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}

export default function SphereTextureCanvas() {
  return (
      <Canvas style={{ flex: 1, minHeight: '100vh', backgroundColor: 'green' }} >
        <Suspense fallback={null}>
          <SphereTexture />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
  );
}
