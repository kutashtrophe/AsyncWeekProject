import "../CSS/ThreeComponent.css";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeComponent = () => {
  const ref = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      69,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff);
    // renderer.shadowMap.enabled = true;

    // Create sphere
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    scene.add(sphere);

    // Create light
    const light = new THREE.SpotLight(0xffffff, 1);
    light.position.set(0, 10, 10);
    light.angle = Math.PI / 4;
    light.penumbra = 0.1;
    light.decay = 2;
    light.distance = 200;

    light.castShadow = true;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    light.shadow.camera.near = 10;
    light.shadow.camera.far = 200;
    light.shadow.focus = 1;
    scene.add(light);

    // Create a plane for the shadow
    const planeGeometry = new THREE.PlaneGeometry(10, 10);
    const planeMaterial = new THREE.ShadowMaterial();
    planeMaterial.opacity = 0.5;
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.y = -1;
    plane.rotation.x = -Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      // Spin the sphere
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    ref.current.appendChild(renderer.domElement);
    animate();

    // Clean up on unmount
    return () => {
      ref.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div id="bg" ref={ref}></div>;
};

export default ThreeComponent;
