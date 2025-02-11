import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type PlantProps = {
  scale?: number | [number, number, number];
  position?: [number, number, number];
};
type GLTFResult = GLTF & {
  nodes: {
    home1: THREE.Mesh;
  };
  materials: Record<string, unknown>;
};

export function Model(props: PlantProps) {
  const { nodes } = useGLTF("/home without interior.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.home1.geometry}
        material={nodes.home1.material}
        scale={props.scale}
      />
    </group>
  );
}
