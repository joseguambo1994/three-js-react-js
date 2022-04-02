import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import './App.css';
import CameraController from './CameraController/CameraController';

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Sphere(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x -= 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      visible userData={{ hello: 'world' }} rotation={[Math.PI / 2, 0, 0]}>
      <sphereGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'purple'} transparent />
    </mesh>
  )
}

function App() {
  return (
    //     <div style={{flex:1, backgroundColor:'red'}}>

    //     </div>
    <div className="App">
      <header className="App-header">
        <Canvas style={{ flex: 1, backgroundColor: 'blue' }}>
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
      </header>
    </div>
  );
}

export default App;
