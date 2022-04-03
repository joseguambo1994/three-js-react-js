import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function CustomCube(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, setClick] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x -= 0.01))

  const handleClick = () => {
    setClick(!clicked);
    if (props && props.url) window.open(props.url);
  };
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2.5 : 1}
      onClick={(event) => handleClick()}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      visible userData={{ hello: 'world' }} rotation={[Math.PI / 2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? (props && props.url) ? 'red' : props.colorHovered : props.color } transparent />
    </mesh>
  )
}

export default CustomCube;
