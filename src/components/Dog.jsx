import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Scene } from "three";

const Dog = () => {
  useThree(({ camera, Scene, gl }) => {
    console.log(camera.position);
  });
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="purple" />
    </mesh>
  );
};

export default Dog;
