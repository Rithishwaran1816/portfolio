"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const Transformer3DMesh: React.FC<{ interactive?: boolean }> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 4, 18);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const isLight = document.documentElement.classList.contains("light");

    const layerColorsLight = [0x0284c7, 0x7c3aed, 0x6d28d9, 0x0369a1];
    const layerColorsDark = [0x00f0ff, 0xa855f7, 0x8b5cf6, 0x38bdf8];
    const yPositions = [3.6, 1.2, -1.2, -3.6];

    // Store materials to update on theme change
    const materials: { mat: THREE.MeshBasicMaterial | THREE.PointsMaterial; lightColor: number; darkColor: number; lightOpacity: number; darkOpacity: number }[] = [];

    yPositions.forEach((y, idx) => {
      const planeGeo = new THREE.PlaneGeometry(8, 4.5, 8, 4);
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: isLight ? (layerColorsLight[idx] as number) : (layerColorsDark[idx] as number),
        wireframe: true,
        transparent: true,
        opacity: isLight ? 0.8 : 0.45,
      });
      materials.push({
        mat: wireframeMat,
        lightColor: layerColorsLight[idx] as number,
        darkColor: layerColorsDark[idx] as number,
        lightOpacity: 0.8,
        darkOpacity: 0.45,
      });

      const plane = new THREE.Mesh(planeGeo, wireframeMat);
      plane.rotation.x = -Math.PI / 2.8;
      plane.position.y = y;
      group.add(plane);

      // Node points on each layer
      const nodeGeo = new THREE.BufferGeometry();
      const nodeCount = 12;
      const nodePositions = new Float32Array(nodeCount * 3);
      for (let n = 0; n < nodeCount; n++) {
        nodePositions[n * 3] = (Math.random() - 0.5) * 6;
        nodePositions[n * 3 + 1] = y + (Math.random() - 0.5) * 0.4;
        nodePositions[n * 3 + 2] = (Math.random() - 0.5) * 4;
      }
      nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3));
      const nodeMat = new THREE.PointsMaterial({
        color: isLight ? (layerColorsLight[idx] as number) : (layerColorsDark[idx] as number),
        size: 0.35,
        transparent: true,
        opacity: 0.95,
      });
      materials.push({
        mat: nodeMat,
        lightColor: layerColorsLight[idx] as number,
        darkColor: layerColorsDark[idx] as number,
        lightOpacity: 0.95,
        darkOpacity: 0.95,
      });
      const nodePoints = new THREE.Points(nodeGeo, nodeMat);
      group.add(nodePoints);
    });

    // Ascending Attention Signal Beams
    const beamCount = 40;
    const beamGeo = new THREE.BufferGeometry();
    const beamPos = new Float32Array(beamCount * 3);
    for (let b = 0; b < beamCount; b++) {
      beamPos[b * 3] = (Math.random() - 0.5) * 6;
      beamPos[b * 3 + 1] = (Math.random() - 0.5) * 7.5;
      beamPos[b * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    beamGeo.setAttribute("position", new THREE.BufferAttribute(beamPos, 3));
    const beamMat = new THREE.PointsMaterial({
      color: isLight ? 0x0284c7 : 0x00f0ff,
      size: 0.22,
      transparent: true,
      opacity: isLight ? 0.95 : 0.8,
    });
    materials.push({
      mat: beamMat,
      lightColor: 0x0284c7,
      darkColor: 0x00f0ff,
      lightOpacity: 0.95,
      darkOpacity: 0.8,
    });
    const beams = new THREE.Points(beamGeo, beamMat);
    group.add(beams);

    // MutationObserver to switch colors live when theme toggles
    const observer = new MutationObserver(() => {
      const lightMode = document.documentElement.classList.contains("light");
      materials.forEach((m) => {
        m.mat.color.setHex(lightMode ? m.lightColor : m.darkColor);
        m.mat.opacity = lightMode ? m.lightOpacity : m.darkOpacity;
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Mouse tilt
    let targetX = 0;
    let targetY = 0;
    const handlePointerMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetY = x * 0.4;
      targetX = -y * 0.3;
    };

    container.addEventListener("mousemove", handlePointerMove);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      group.rotation.y += (targetY - group.rotation.y) * 0.05 + 0.003;
      group.rotation.x += (targetX - group.rotation.x) * 0.05;

      const posAttr = beamGeo.getAttribute("position") as THREE.BufferAttribute;
      const array = posAttr.array as Float32Array;
      for (let i = 1; i < array.length; i += 3) {
        array[i] += 0.04;
        if (array[i] > 4.5) {
          array[i] = -4.5;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      observer.disconnect();
      container.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(frameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[320px] sm:min-h-[440px] flex items-center justify-center pointer-events-auto"
    />
  );
};
