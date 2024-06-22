import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import style from './threejs.module.scss';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const Bounce = () => {

  const fov = 40;
	const aspect = 2; // the canvas default
	const near = 0.1;
	const far = 1000;
	const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
	camera.position.z = 120;

  const loader = new FontLoader();
		// promisify font loading
		function loadFont( url ) {

			return new Promise( ( resolve, reject ) => {

				loader.load( url, resolve, undefined, reject );

			} );

  }
  
  const renderer = new THREE.WebGLRenderer( { antialias: true, canvas } );

  

  const canvasRef = useRef(null);

  useEffect(() => {

    // Set up the scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xAAAAAA );


    const addObject = ( x, y, obj ) => {

      obj.position.x = x * 5;
      obj.position.y = y * 5;
  
      scene.add( obj );
  
    }
  
    const createMaterial = () => {
  
      const material = new THREE.MeshPhongMaterial( {
        side: THREE.DoubleSide,
      } );
  
      const hue = Math.random();
      const saturation = 1;
      const luminance = .5;
      material.color.setHSL( hue, saturation, luminance );
  
      return material;
  
    }
    
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true }); 
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);

    //there should only be 1 canvas element  
    
    if (canvasRef.current.children.length <= 0) {
        canvasRef.current.appendChild(renderer.domElement)
    }

    // Create a cube
   /*  const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube) */
    
    

		async function doit() {

      const font = await loadFont('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json'); 
      
			const geometry = new TextGeometry( 'three.js', {
				font: font,
				size: 3.0,
				depth: .2,
				curveSegments: 12,
				bevelEnabled: true,
				bevelThickness: 0.15,
				bevelSize: .3,
				bevelSegments: 5,
      });
      
			const mesh = new THREE.Mesh( geometry, createMaterial() );
			geometry.computeBoundingBox();
			geometry.boundingBox.getCenter( mesh.position ).multiplyScalar( - 1 );

			const parent = new THREE.Object3D();
			parent.add( mesh );

			addObject( 0 , 0, parent );

    }
    
    doit()

    // Position the camera
    camera.position.z = 10

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
  
      // Rotate the cube
      /* cube.rotation.x += 0.01;
      cube.rotation.y += 0.01; */
  
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