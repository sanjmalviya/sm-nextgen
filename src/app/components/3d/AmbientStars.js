"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function AmbientStars({ count = 800 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, powerPreference: "low-power" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const brandTeal = new THREE.Color("#0097B2");
    const brandNavy = new THREE.Color("#0B2545");
    const brandLight = new THREE.Color("#E6EEF2");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 800;

      const pick = Math.random();
      const col = pick > 0.6 ? brandTeal : pick > 0.3 ? brandNavy : brandLight;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      points.rotation.y += 0.0003;
      points.rotation.x += 0.00015;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [count]);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}
