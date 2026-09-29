"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function GrowthPipelineVisual3D({
  className = "",
  accentColor = "#0097B2",
  nodeCount = 6,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 160);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 2. Center Helix / Torus Knot Core
    const knotGeo = new THREE.TorusKnotGeometry(24, 4.5, 90, 16, 2, 3);
    const knotWireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotWireMat);
    scene.add(knotMesh);

    // 3. 6 Orbiting Growth Nodes
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);

    const nodes = [];
    const nodeRadius = 55;
    const nodeGeo = new THREE.OctahedronGeometry(4.5, 0);

    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const nodeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(accentColor),
        wireframe: true,
        transparent: true,
        opacity: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      
      // Initial positions in circular orbit with vertical sinusoidal undulation
      const x = Math.cos(angle) * nodeRadius;
      const y = Math.sin(angle) * (nodeRadius * 0.45);
      const z = Math.sin(angle * 2) * 18;
      nodeMesh.position.set(x, y, z);
      
      nodeGroup.add(nodeMesh);
      nodes.push({ mesh: nodeMesh, baseAngle: angle });
    }

    // 4. Connecting dynamic orbit lines
    const lineGeo = new THREE.BufferGeometry();
    const linePositions = new Float32Array((nodeCount + 1) * 3);
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(accentColor),
      transparent: true,
      opacity: 0.35,
    });
    const lineMesh = new THREE.Line(lineGeo, lineMat);
    nodeGroup.add(lineMesh);

    // 5. Dynamic Data Flow Particles
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleMeta = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 25 + Math.random() * 45;
      const yOffset = (Math.random() - 0.5) * 40;

      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = yOffset;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;

      particleMeta.push({
        angle,
        radius,
        speed: 0.006 + Math.random() * 0.012,
        yOffset,
      });
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color(accentColor),
      size: 2.0,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse Motion Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 1.2;
      targetY = y * 1.2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 7. Render Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Inertia on mouse
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Rotate Knot Core
      knotMesh.rotation.x = elapsed * 0.2 + mouseY;
      knotMesh.rotation.y = elapsed * 0.3 + mouseX;

      // Rotate and Pulse Node Orbit Group
      nodeGroup.rotation.y = elapsed * 0.15 + mouseX * 0.6;
      nodeGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.15 + mouseY * 0.4;

      // Update Node Pos & Connecting Line
      const posArray = lineMesh.geometry.attributes.position.array;
      for (let i = 0; i < nodes.length; i++) {
        const item = nodes[i];
        const curAngle = item.baseAngle + elapsed * 0.2;
        const x = Math.cos(curAngle) * nodeRadius;
        const y = Math.sin(curAngle) * (nodeRadius * 0.45);
        const z = Math.sin(curAngle * 2) * 20;

        item.mesh.position.set(x, y, z);
        item.mesh.rotation.x = elapsed * 0.8;
        item.mesh.rotation.y = elapsed * 0.6;

        posArray[i * 3] = x;
        posArray[i * 3 + 1] = y;
        posArray[i * 3 + 2] = z;
      }
      // Close loop line
      posArray[nodes.length * 3] = posArray[0];
      posArray[nodes.length * 3 + 1] = posArray[1];
      posArray[nodes.length * 3 + 2] = posArray[2];
      lineMesh.geometry.attributes.position.needsUpdate = true;

      // Particle Motion
      const pPositions = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const meta = particleMeta[i];
        meta.angle += meta.speed;
        pPositions[i * 3] = Math.cos(meta.angle) * meta.radius;
        pPositions[i * 3 + 1] = meta.yOffset + Math.sin(meta.angle * 2) * 5;
        pPositions[i * 3 + 2] = Math.sin(meta.angle) * meta.radius;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 500;
      height = container.clientHeight || 500;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 9. Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      knotGeo.dispose();
      knotWireMat.dispose();
      nodeGeo.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [accentColor, nodeCount]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
    />
  );
}
