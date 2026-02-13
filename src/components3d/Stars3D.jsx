import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const Stars3D = () => {
  return (
    <div className="z-250 fixed lg:w-full h-30 top-0 left-0 opacity-50 ">
     <Canvas>
      <Stars
        radius={100} // tamaño del espacio
        depth={20} // profundidad
        count={5000} // número de estrellas
        factor={5} // tamaño
        color="rgb(255,2550,0)" // color de las estrellas
        saturation={50} // blanco
        fade
        speed={2}
      />
    </Canvas  > 
    </div>
  );
};

export default Stars3D;
