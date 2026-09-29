"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function InteractiveGrowthOrb3D({
  className = "",
  accentColor = "#0097B2",
  secondaryColor = "#0B2545",
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 140);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 2. Central Core: Geometric Growth Icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(32, 1);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      wireframe: true,
      transparent: true,
      opacity: 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreWireMat);
    scene.add(coreMesh);

    // Inner Glowing Core Solid
    const innerSolidGeo = new THREE.IcosahedronGeometry(20, 0);
    const innerSolidMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      transparent: true,
      opacity: 0.15,
    });
    const innerSolidMesh = new THREE.Mesh(innerSolidGeo, innerSolidMat);
    scene.add(innerSolidMesh);

    // 3. Orbital Data Rings (Representing Strategy, Tech, AI, Revenue)
    const createRing = (radius, tube, rotX, rotY, opacity) => {
      const ringGeo = new THREE.TorusGeometry(radius, tube, 16, 80);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(accentColor),
        transparent: true,
        opacity: opacity,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = rotX;
      ringMesh.rotation.y = rotY;
      scene.add(ringMesh);
      return ringMesh;
    };

    const ring1 = createRing(46, 0.6, Math.PI / 3, Math.PI / 6, 0.55);
    const ring2 = createRing(54, 0.5, -Math.PI / 4, Math.PI / 4, 0.45);
    const ring3 = createRing(62, 0.4, Math.PI / 2.2, -Math.PI / 8, 0.35);

    // 4. Dynamic Particle Swarm Flowing into Core
    const particleCount = 260;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 40 + Math.random() * 45;

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      particleVelocities.push({
        speed: 0.003 + Math.random() * 0.007,
        radius: r,
        theta: theta,
        phi: phi,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(accentColor),
      size: 2.2,
      transparent: true,
      opacity: 0.85,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Interactive Mouse Coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 6. Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth inertia on mouse interaction
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate Core
      coreMesh.rotation.y = elapsedTime * 0.25 + mouseX;
      coreMesh.rotation.x = elapsedTime * 0.15 + mouseY;
      innerSolidMesh.rotation.y = -elapsedTime * 0.3;
      innerSolidMesh.rotation.z = elapsedTime * 0.2;

      // Rotate Rings at Different Velocities
      ring1.rotation.z = elapsedTime * 0.35;
      ring1.rotation.x = Math.PI / 3 + mouseY * 0.5;
      ring2.rotation.z = -elapsedTime * 0.25;
      ring2.rotation.y = Math.PI / 4 + mouseX * 0.5;
      ring3.rotation.z = elapsedTime * 0.18;

      // Update Particles
      const positions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const p = particleVelocities[i];
        p.theta += p.speed;
        positions[i * 3] = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
        positions[i * 3 + 1] = p.radius * Math.sin(p.phi) * Math.sin(p.theta);
        positions[i * 3 + 2] = p.radius * Math.cos(p.phi);
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // 7. Handle Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 8. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreWireMat.dispose();
      innerSolidGeo.dispose();
      innerSolidMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [accentColor, secondaryColor]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
    />
  );
}
