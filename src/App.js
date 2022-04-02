import React from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Suspense } from "react";
// import { Environment, PerspectiveCamera } from '@react-three/drei'
import './App.css';
// import CameraController from './CameraController/CameraController';
// import Model from './Model/Model';
import SphereTextureCanvas from './SphereTextureCanvas/SphereTexture';

function App() {

  // const [objectPosition, setObjectPosition] = useState([10, 10, 10]);

  return (

    <div className='App-header'>
      {/* <Canvas style={{ flex: 1, minHeight: '100vh', backgroundColor: 'red' }} >

        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-2.2, 0, 0]} />
        <Box position={[2.2, 0, 0]} />
        <Box position={[4.2, 0, 0]} />
        <Box position={[-4.2, 0, 0]} />
        <Sphere position={[0, 0, 0]} />
        <Sphere position={[2, 2, 2]} />
        <Sphere position={[2, -2, 2]} />
        <Sphere position={[0, 2, 0]} />

      </Canvas>

      <Canvas style={{ flex: 1, minHeight: '100vh', backgroundColor: 'orange' }} >
        <PerspectiveCamera makeDefault />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Sphere position={[0, 0, 0]} />
          <Sphere position={[2, 2, 2]} />
          <Sphere position={[2, -2, 2]} />
      </Canvas> */}
{/* 
      <Canvas style={{ flex: 1, minHeight: '100vh', backgroundColor: 'green' }} >
        <CameraController />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
       */}
      <SphereTextureCanvas />
    </div>
  );
}

export default App;
