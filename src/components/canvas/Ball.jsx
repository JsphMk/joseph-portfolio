import React, { Suspense, createRef, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, createPortal, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Scene } from "three";
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// Clear once, then draw each ball into its own rectangle in the same WebGL context.
const ClearCanvas = ({ bounds }) => {
  useFrame(({ gl }) => {
    bounds.current = gl.domElement.getBoundingClientRect();
    gl.setScissorTest(false);
    gl.clear();
  }, 1);
  return null;
};

const BallView = ({ icon, track, bounds, index }) => {
  const [scene] = useState(() => new Scene());
  const [camera] = useState(() => {
    const viewCamera = new PerspectiveCamera(75, 1, 0.1, 1000);
    viewCamera.position.z = 5;
    return viewCamera;
  });

  useFrame(({ gl }) => {
    if (!track.current || !bounds.current) return;
    const rect = track.current.getBoundingClientRect();
    if (!rect.width || !rect.height || rect.bottom < 0 || rect.top > window.innerHeight) return;

    const left = rect.left - bounds.current.left;
    const bottom = bounds.current.bottom - rect.bottom;
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    gl.setViewport(left, bottom, rect.width, rect.height);
    gl.setScissor(left, bottom, rect.width, rect.height);
    gl.setScissorTest(true);
    gl.render(scene, camera);
  }, index + 2);

  return createPortal(
    <>
      <OrbitControls camera={camera} domElement={track.current} enableZoom={false} enablePan={false} />
      <Suspense fallback={null}>
        <Ball imgUrl={icon} />
      </Suspense>
    </>,
    scene,
    { camera }
  );
};

const BallCanvas = ({ technologies }) => {
  const container = useRef(null);
  const bounds = useRef(null);
  const tracks = useMemo(() => technologies.map(() => createRef()), [technologies]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(container.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className='relative mt-12'>
      <div className='pointer-events-none absolute inset-0' aria-hidden='true'>
        <Canvas frameloop={visible ? "always" : "never"} dpr={[1, 1.5]}>
          <ClearCanvas bounds={bounds} />
          {technologies.map((technology, index) => (
            <BallView key={technology.name} icon={technology.icon} track={tracks[index]} bounds={bounds} index={index} />
          ))}
        </Canvas>
      </div>
      <div className='relative flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
        {technologies.map((technology, index) => (
          <div className='flex w-28 flex-col items-center gap-3' key={technology.name}>
            <div ref={tracks[index]} className='h-24 w-24 cursor-grab active:cursor-grabbing sm:h-28 sm:w-28' aria-label={`Drag to rotate ${technology.name}`} />
            <p className='text-center text-[14px] font-medium text-white-100'>{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BallCanvas;
