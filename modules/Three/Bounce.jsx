import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import style from './threejs.module.scss';
const Bounce = () => {

  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true }); 
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

    //there should only be 1 canvas element  
    
    if (canvasRef.current.children.length <= 0) {
        canvasRef.current.appendChild(renderer.domElement)
    }

    // Create a cube
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    // Position the camera
    camera.position.z = 5

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
  
      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
      // Render the scene
      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      renderer.dispose();
    };
  }, []);

  return <div ref={ canvasRef } className={ style.threeBounce } />;
};

export default Bounce;