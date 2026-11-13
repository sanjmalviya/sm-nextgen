"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollPrism3D: Ultra-clean, non-blocking 3D faceted crystal prism.
 * Inspired by Awwwards / Daiki Fujita.
 * Resides in a fixed background layer and smoothly translates, rotates, and
 * scales across Desktop, Tablet, and Mobile viewports via GSAP ScrollTrigger scrub.
 */
export default function ScrollPrism3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const isMobile = width < 768;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 75);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return; // WebGL not supported, gracefully exit
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // 2. Crystal Group
    const prismGroup = new THREE.Group();
    scene.add(prismGroup);

    // Faceted Icosahedron (Luxury Geometric Crystal)
    const baseRadius = isMobile ? 12 : 16;
    const crystalGeo = new THREE.IcosahedronGeometry(baseRadius, 0);

    // Physical Glass Material (Teal/Navy refraction + subtle transparency)
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#0097B2"),
      emissive: new THREE.Color("#0B2545"),
      emissiveIntensity: 0.18,
      roughness: 0.15,
      metalness: 0.08,
      transmission: 0.82,
      ior: 1.48,
      thickness: 1.8,
      transparent: true,
      opacity: 0.65,
      flatShading: true,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    prismGroup.add(crystalMesh);

    // Crisp Wireframe Edges for Architectural Definition
    const edgesGeo = new THREE.EdgesGeometry(crystalGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#38bdf8"),
      transparent: true,
      opacity: 0.45,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    prismGroup.add(edgesMesh);

    // Inner Concentric Star Node
    const innerGeo = new THREE.OctahedronGeometry(baseRadius * 0.42, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#0097B2"),
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    prismGroup.add(innerMesh);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight("#0097B2", 2.2);
    keyLight.position.set(30, 40, 50);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight("#38bdf8", 1.8);
    rimLight.position.set(-40, -30, -20);
    scene.add(rimLight);

    // Initial Position (Resting gracefully behind Hero visual)
    const initX = isMobile ? 10 : 22;
    const initY = isMobile ? 6 : 2;
    prismGroup.position.set(initX, initY, -5);
    prismGroup.rotation.set(0.4, 0.6, 0.1);

    // 4. GSAP ScrollTrigger Master Timeline (100% synchronized with page scroll)
    const st = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2,
      onUpdate: (self) => {
        const progress = self.progress;

        // Subtle continuous base spin
        innerMesh.rotation.y = progress * Math.PI * 4;
        innerMesh.rotation.x = progress * Math.PI * 2;

        if (isMobile) {
          // Mobile responsive trajectory: stays to the edges/backbone so text is 100% legible
          if (progress < 0.2) {
            // Hero
            const t = progress / 0.2;
            prismGroup.position.x = THREE.MathUtils.lerp(10, -12, t);
            prismGroup.position.y = THREE.MathUtils.lerp(6, -4, t);
            prismGroup.position.z = THREE.MathUtils.lerp(-5, -12, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(0.4, 1.8, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(0.6, 2.4, t);
          } else if (progress < 0.5) {
            // Ecosystem & Methodology
            const t = (progress - 0.2) / 0.3;
            prismGroup.position.x = THREE.MathUtils.lerp(-12, 12, t);
            prismGroup.position.y = THREE.MathUtils.lerp(-4, -8, t);
            prismGroup.position.z = THREE.MathUtils.lerp(-12, -8, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(1.8, 3.2, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(2.4, 4.2, t);
          } else if (progress < 0.8) {
            // Capabilities, Industries & Dashboards
            const t = (progress - 0.5) / 0.3;
            prismGroup.position.x = THREE.MathUtils.lerp(12, -10, t);
            prismGroup.position.y = THREE.MathUtils.lerp(-8, -2, t);
            prismGroup.position.z = THREE.MathUtils.lerp(-8, -14, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(3.2, 4.8, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(4.2, 5.8, t);
          } else {
            // Growth OS, Tools, About, Footer
            const t = (progress - 0.8) / 0.2;
            prismGroup.position.x = THREE.MathUtils.lerp(-10, 8, t);
            prismGroup.position.y = THREE.MathUtils.lerp(-2, -12, t);
            prismGroup.position.z = THREE.MathUtils.lerp(-14, -10, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(4.8, 6.28, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(5.8, 7.5, t);
          }
        } else {
          // Desktop trajectory: cinematic multi-axis 3D sweep
          if (progress < 0.2) {
            // Hero -> Challenges
            const t = progress / 0.2;
            prismGroup.position.x = THREE.MathUtils.lerp(22, -24, t);
            prismGroup.position.y = THREE.MathUtils.lerp(2, -8, t);
            prismGroup.position.z = THREE.MathUtils.lerp(-5, 5, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(0.4, 1.9, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(0.6, 2.6, t);
            prismGroup.rotation.z = THREE.MathUtils.lerp(0.1, 0.8, t);
          } else if (progress < 0.45) {
            // Challenges -> Growth Ecosystem & Methodology
            const t = (progress - 0.2) / 0.25;
            prismGroup.position.x = THREE.MathUtils.lerp(-24, 26, t);
            prismGroup.position.y = THREE.MathUtils.lerp(-8, -4, t);
            prismGroup.position.z = THREE.MathUtils.lerp(5, -6, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(1.9, 3.4, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(2.6, 4.4, t);
            prismGroup.rotation.z = THREE.MathUtils.lerp(0.8, 1.4, t);
          } else if (progress < 0.75) {
            // Capabilities, Industries & Dashboards
            const t = (progress - 0.45) / 0.3;
            prismGroup.position.x = THREE.MathUtils.lerp(26, -20, t);
            prismGroup.position.y = THREE.MathUtils.lerp(-4, 0, t);
            prismGroup.position.z = THREE.MathUtils.lerp(-6, 8, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(3.4, 5.2, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(4.4, 6.0, t);
            prismGroup.rotation.z = THREE.MathUtils.lerp(1.4, 2.1, t);
          } else {
            // Growth OS, Tools, About & Footer
            const t = (progress - 0.75) / 0.25;
            prismGroup.position.x = THREE.MathUtils.lerp(-20, 18, t);
            prismGroup.position.y = THREE.MathUtils.lerp(0, -14, t);
            prismGroup.position.z = THREE.MathUtils.lerp(8, 2, t);
            prismGroup.rotation.x = THREE.MathUtils.lerp(5.2, 6.8, t);
            prismGroup.rotation.y = THREE.MathUtils.lerp(6.0, 7.8, t);
            prismGroup.rotation.z = THREE.MathUtils.lerp(2.1, 2.8, t);
          }
        }
      },
    });

    // 5. Render Loop with subtle idle ambient float
    let animFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle continuous ambient drift on top of scroll
      prismGroup.position.y += Math.sin(elapsedTime * 1.2) * 0.02;
      crystalMesh.rotation.y += 0.0025;
      edgesMesh.rotation.y += 0.0025;

      renderer.render(scene, camera);
    };
    animate();

    // 6. Handle Window Resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
      st.kill();
      renderer.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    />
  );
}
