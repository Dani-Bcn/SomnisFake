import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Stars3D = () => {
  return (
    <div className="z-20 fixed w-full h-30 top-0 left-0 opacity-50 ">
    <Canvas>
      <Stars
        radius={100} // tamaño del espacio
        depth={10} // profundidad
        count={5000} // número de estrellas
        factor={1} // tamaño
        color="rgb(255,150,0)" // color de las estrellas
        saturation={0} // blanco
        fade
        speed={3}
      />
    </Canvas  >
    </div>
  );
};

export default Stars3D;
