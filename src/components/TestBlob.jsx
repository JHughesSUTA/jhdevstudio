import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Test3d = () => {
  return (
    <>
      <Canvas>
        <mesh>
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
              color="#fafafa"
              attach="material"
              distort={0.5}
              speed={1}
            />
          </Sphere>
          {/* <meshStandardMaterial color="red"/> */}
          <ambientLight intensity={7} />
          <directionalLight position={[1, 2, 3]} />
          {/* <OrbitControls enableZoom={false} /> */}
        </mesh>
      </Canvas>
    </>
  );
};

export default Test3d;
