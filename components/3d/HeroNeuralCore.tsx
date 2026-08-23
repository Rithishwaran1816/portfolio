"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const HeroNeuralCore: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all neural entities
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Particle Neural Sphere
    const particleCount = 700;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const radius = 6.2;
    const isLightMode = document.documentElement.classList.contains("light");

    const colorViolet = new THREE.Color(isLightMode ? "#7C3AED" : "#8B5CF6");
    const colorCyan = new THREE.Color(isLightMode ? "#0284C7" : "#00F0FF");
    const colorThird = new THREE.Color(isLightMode ? "#475569" : "#FFFFFF");

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const r = radius + (Math.random() - 0.5) * 1.2;
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Interpolate colors
      const mixRatio = Math.random();
      const pColor = mixRatio > 0.6 ? colorViolet : mixRatio > 0.2 ? colorCyan : colorThird;
      colors[i * 3] = pColor.r;
      colors[i * 3 + 1] = pColor.g;
      colors[i * 3 + 2] = pColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle Material
    const pMaterial = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
    });

    const particles = new THREE.Points(geometry, pMaterial);
    coreGroup.add(particles);

    // 2. Neural Inner Connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: isLightMode ? 0x6d28d9 : 0x8b5cf6,
      transparent: true,
      opacity: isLightMode ? 0.35 : 0.2,
    });

    const lineGeo = new THREE.BufferGeometry();
    const linePos: number[] = [];
    const step = 6;
    for (let i = 0; i < particleCount; i += step) {
      for (let j = i + step; j < Math.min(i + step * 4, particleCount); j += step) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        const x2 = positions[j * 3];
        const y2 = positions[j * 3 + 1];
        const z2 = positions[j * 3 + 2];

        const dist = Math.hypot(x1 - x2, y1 - y2, z1 - z2);
        if (dist < 4.2) {
          linePos.push(x1, y1, z1, x2, y2, z2);
        }
      }
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePos, 3));
    const lines = new THREE.LineSegments(lineGeo, lineMaterial);
    coreGroup.add(lines);

    // 3. Cybernetic Orbital Ring 1 (Cyan/Blue)
    const ring1Geo = new THREE.TorusGeometry(8.5, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x0284c7 : 0x00f0ff,
      transparent: true,
      opacity: isLightMode ? 0.8 : 0.45,
      wireframe: true,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    // 4. Cybernetic Orbital Ring 2 (Violet)
    const ring2Geo = new THREE.TorusGeometry(9.8, 0.03, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: isLightMode ? 0x7c3aed : 0xa855f7,
      transparent: true,
      opacity: isLightMode ? 0.7 : 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // Function to update colors on theme toggle
    const updateThemeColors = () => {
      const isLight = document.documentElement.classList.contains("light");
      const cViolet = new THREE.Color(isLight ? "#6D28D9" : "#8B5CF6");
      const cCyan = new THREE.Color(isLight ? "#0284C7" : "#00F0FF");
      const cThird = new THREE.Color(isLight ? "#1E293B" : "#FFFFFF");

      const colAttr = geometry.getAttribute("color") as THREE.BufferAttribute;
      const colArray = colAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const mixRatio = (i * 0.17) % 1;
        const pColor = mixRatio > 0.6 ? cViolet : mixRatio > 0.2 ? cCyan : cThird;
        colArray[i * 3] = pColor.r;
        colArray[i * 3 + 1] = pColor.g;
        colArray[i * 3 + 2] = pColor.b;
      }
      colAttr.needsUpdate = true;

      lineMaterial.color.setHex(isLight ? 0x4c1d95 : 0x8b5cf6);
      lineMaterial.opacity = isLight ? 0.5 : 0.2;

      ring1Mat.color.setHex(isLight ? 0x0284c7 : 0x00f0ff);
      ring1Mat.opacity = isLight ? 0.85 : 0.45;

      ring2Mat.color.setHex(isLight ? 0x6d28d9 : 0xa855f7);
      ring2Mat.opacity = isLight ? 0.8 : 0.35;
    };

    // Observe theme class changes on html element
    const observer = new MutationObserver(() => {
      updateThemeColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Mouse tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.8;
    };

    window.addEventListener("mousemove", onPointerMove);

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse tilt interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      coreGroup.rotation.x = currentRotationX + Math.sin(elapsedTime * 0.3) * 0.05;
      coreGroup.rotation.y = currentRotationY + elapsedTime * 0.15;

      ring1.rotation.z = elapsedTime * 0.2;
      ring2.rotation.z = -elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      pMaterial.dispose();
      lineGeo.dispose();
      lineMaterial.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] sm:min-h-[500px] flex items-center justify-center pointer-events-auto"
      style={{ touchAction: "none" }}
    />
  );
};
