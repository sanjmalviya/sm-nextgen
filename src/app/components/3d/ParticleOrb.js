"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ParticleOrb({ 
  className = "", 
  accentColor = "#0097B2",
  secondaryColor = "#0B2545",
  particleCount = 3800,
  speed = 1.0,
  interactive = true 
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 600;
    let height = container.clientHeight || 600;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // Particle Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(accentColor);
    const color2 = new THREE.Color(secondaryColor);
    const coreColor = new THREE.Color("#FFFFFF");

    const radius = 64;

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = radius + (Math.random() - 0.5) * 8;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      scales[i] = Math.random() * 2.5 + 1.2;

      // Color gradient from top to bottom + core
      const mixRatio = (y + radius) / (radius * 2);
      const pColor = new THREE.Color();
      pColor.lerpColors(color2, color1, Math.min(Math.max(mixRatio, 0), 1));
      
      // Random subtle white core sparkles
      if (Math.random() > 0.92) {
        pColor.lerp(coreColor, 0.7);
      }

      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Circular particle sprite texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(255,255,255,0.85)");
    gradient.addColorStop(0.6, "rgba(0,151,178,0.5)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    // PointsMaterial
    const material = new THREE.PointsMaterial({
      size: 3.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Subtle inner glowing core sphere
    const coreGeo = new THREE.SphereGeometry(radius * 0.45, 24, 24);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      transparent: true,
      opacity: 0.08,
      wireframe: true,
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreSphere);

    // Orbit Ring
    const ringGeo = new THREE.RingGeometry(radius * 1.35, radius * 1.38, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    ring.rotation.y = Math.PI / 6;
    scene.add(ring);

    // Mouse Interaction Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2;
      mouseY = y * 2;
      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 600;
      height = container.clientHeight || 600;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime() * speed;

      // Base auto rotation + smooth mouse lerp
      particles.rotation.y += 0.0035;
      particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05;
      particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05;

      coreSphere.rotation.y -= 0.002;
      ring.rotation.z += 0.0015;

      // Wave pulsation on vertices
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;

      for (let i = 0; i < particleCount; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        // Complex 3D sine wave perturbation
        const wave = Math.sin(elapsedTime * 1.5 + ox * 0.05 + oy * 0.05) * 
                     Math.cos(elapsedTime * 1.2 + oz * 0.05);

        const factor = 1 + (wave * 0.06);

        posArray[i * 3] = ox * factor;
        posArray[i * 3 + 1] = oy * factor;
        posArray[i * 3 + 2] = oz * factor;
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, [accentColor, secondaryColor, particleCount, speed, interactive]);

  return (
    <div 
      ref={mountRef} 
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
    />
  );
}
