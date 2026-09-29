"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function GrowthTrajectory3D({
  className = "",
  accentColor = "#0097B2",
  gridColor = "#0B2545",
  particleCount = 1800,
  interactive = true,
}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 800;
    let height = container.clientHeight || 600;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 45, 230);
    camera.lookAt(0, 15, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 1. 3D Exponential Growth Curve
    const points = [];
    const numPoints = 80;
    const startX = -120;
    const endX = 130;
    const baseY = -45;

    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = startX + t * (endX - startX);
      // Exponential curve formula: y = baseY + A * (e^(k*t) - 1)
      const expGrowth = Math.pow(t, 2.4) * 110;
      const y = baseY + expGrowth;
      const z = Math.sin(t * Math.PI * 1.5) * 20 - 10;
      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);

    // Glowing Tube along the Growth Vector
    const tubeGeometry = new THREE.TubeGeometry(curve, 100, 1.8, 12, false);
    const tubeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      transparent: true,
      opacity: 0.85,
    });
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
    scene.add(tubeMesh);

    // Outer Halo Tube for Bloom Glow
    const glowGeometry = new THREE.TubeGeometry(curve, 100, 4.2, 12, false);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(accentColor),
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowMesh);

    // 2. 3D Flowing Cashflow & Acquisition Particles along the Curve
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleProgress = new Float32Array(particleCount);
    const particleSpeeds = new Float32Array(particleCount);
    const particleOffsets = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const t = Math.random();
      particleProgress[i] = t;
      particleSpeeds[i] = 0.0015 + Math.random() * 0.0035;

      const pt = curve.getPoint(t);
      const spread = (Math.random() - 0.5) * (6 + t * 14);
      particleOffsets[i * 3] = (Math.random() - 0.5) * 8;
      particleOffsets[i * 3 + 1] = spread;
      particleOffsets[i * 3 + 2] = (Math.random() - 0.5) * 8;

      particlePositions[i * 3] = pt.x + particleOffsets[i * 3];
      particlePositions[i * 3 + 1] = pt.y + particleOffsets[i * 3 + 1];
      particlePositions[i * 3 + 2] = pt.z + particleOffsets[i * 3 + 2];
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    // Particle sprite texture
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(0,151,178,0.9)");
    gradient.addColorStop(0.7, "rgba(0,151,178,0.3)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 3.5,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: new THREE.Color(accentColor),
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 3. 3D Growth Milestones (Pulsating Target Nodes)
    const milestoneSteps = [
      { t: 0.05, label: "Baseline Diagnosis", value: "Baseline" },
      { t: 0.35, label: "Yield Optimization", value: "+85%" },
      { t: 0.68, label: "Demand Velocity", value: "2.4x" },
      { t: 0.98, label: "Compounding Scale", value: "4.8x" },
    ];

    const milestoneMeshes = [];
    milestoneSteps.forEach((step) => {
      const pt = curve.getPoint(step.t);

      // Core sphere
      const sphereGeo = new THREE.SphereGeometry(3.2, 16, 16);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#FFFFFF"),
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.copy(pt);
      scene.add(sphere);

      // Outer pulsing ring
      const ringGeo = new THREE.RingGeometry(5.5, 7.0, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(accentColor),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pt);
      scene.add(ring);

      milestoneMeshes.push({ sphere, ring });
    });

    // 4. Futuristic 3D Perspective Financial Grid Plane
    const gridHelper = new THREE.GridHelper(320, 24, new THREE.Color(accentColor), new THREE.Color(gridColor));
    gridHelper.position.y = -50;
    gridHelper.material.opacity = 0.22;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Mouse Interaction Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 800;
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
      const time = clock.getElapsedTime();

      // Smooth camera lerp
      camera.position.x += (targetRotationY * 50 - camera.position.x) * 0.05;
      camera.position.y += (45 + targetRotationX * 30 - camera.position.y) * 0.05;
      camera.lookAt(0, 15, 0);

      // Update particle positions along curve
      const posArray = particleGeo.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        particleProgress[i] += particleSpeeds[i];
        if (particleProgress[i] > 1) {
          particleProgress[i] = 0;
        }

        const t = particleProgress[i];
        const pt = curve.getPoint(t);

        posArray[i * 3] = pt.x + particleOffsets[i * 3];
        posArray[i * 3 + 1] = pt.y + particleOffsets[i * 3 + 1];
        posArray[i * 3 + 2] = pt.z + particleOffsets[i * 3 + 2];
      }

      particleGeo.attributes.position.needsUpdate = true;

      // Pulse milestone rings
      milestoneMeshes.forEach((m, idx) => {
        const pulse = 1 + Math.sin(time * 3 + idx * 1.2) * 0.25;
        m.ring.scale.set(pulse, pulse, pulse);
      });

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
      tubeGeometry.dispose();
      tubeMaterial.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      texture.dispose();
      gridHelper.dispose();
      renderer.dispose();
    };
  }, [accentColor, gridColor, particleCount, interactive]);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-full flex items-center justify-center pointer-events-none select-none ${className}`}
    />
  );
}
