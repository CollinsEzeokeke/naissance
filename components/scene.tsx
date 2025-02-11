import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Model } from "./house";
export function DisplayHome() {
  return (
    <div className="w-full h-full">
      <Canvas
        className="min-h-[60rem] w-full text-black"
        camera={{
          position: [-1, 0.2, 0],
          //   rotation: [0, -Math.PI / 8, 0],
          fov: 55,
        }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <group position={[1.4, -1, 0]}>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-5, 5, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <Model scale={0.17} />
      <ContactShadows
        opacity={0.75}
        scale={10}
        blur={2.5}
        far={4}
        resolution={512}
        position={[0, -1, 0]}
        color="#000000"
      />
    </group>
  );
}
