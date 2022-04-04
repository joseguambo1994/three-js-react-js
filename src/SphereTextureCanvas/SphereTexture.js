import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Sky, Stars, Cloud } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import Model from "../Model/Model";
import CustomCube from "../CustomCube/CustomCube";
import LedModel from "../LedModel/LedModel";

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
      <CustomCube position={[2.5, 2.5, 3.5]} color={'purple'} colorHovered={'yellow'} />
      <CustomCube position={[2.5, -2.5, 3.5]} color={'purple'} colorHovered={'yellow'}
        url={'http://werobot.academy/'}
      />
      <Model position={[-3, -3, -3]} />
      <LedModel position={[4, -3, -4]} />

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

export default function SphereTextureCanvas(props) {
  return (
    <Canvas style={{ flex: 1, minHeight: '100vh', backgroundColor: 'green' }} >
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <Sky
          distance={450000}
          sunPosition={[5, 1, 8]}
          inclination={0}
          azimuth={0.25}
          {...props}
        />
        <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={5} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={10} // Number of particles
        />
        <SphereTexture />
        <OrbitControls autoRotate />
      </Suspense>
    </Canvas>
  );
}
