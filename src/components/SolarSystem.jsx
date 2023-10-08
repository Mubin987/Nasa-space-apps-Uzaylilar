import React, { useEffect } from "react";
import * as THREE from "three";

export function SolarSystem() {
  useEffect(() => {
    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Create the sun
    const sunGeometry = new THREE.SphereGeometry(6, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets
    const planetsData = [
      {
        name: "Mercury",
        distance: 4,
        radius: 0.4,
        color: 0xcccccc,
        speed: 0.02,
      },
      {
        name: "Venus",
        distance: 6,
        radius: 0.6,
        color: 0xff6600,
        speed: 0.015,
      },
      { name: "Earth", distance: 8, radius: 0.6, color: "green", speed: 0.01 },
      {
        name: "Mars",
        distance: 12,
        radius: 0.5,
        color: 0xff0000,
        speed: 0.007,
      },
      {
        name: "Jupiter",
        distance: 20,
        radius: 3,
        color: 0xffd700,
        speed: 0.003,
      },
      {
        name: "Saturn",
        distance: 30,
        radius: 2.4,
        color: 0xffa500,
        speed: 0.002,
      },
      {
        name: "Uranus",
        distance: 40,
        radius: 1.6,
        color: 0x00ced1,
        speed: 0.0015,
      },
      {
        name: "Neptune",
        distance: 50,
        radius: 1.4,
        color: 0x000080,
        speed: 0.001,
      },
      {
        name: "Pluto",
        distance: 60,
        radius: 0.2,
        color: 0xa9a9a9,
        speed: 0.0005,
      },
    ];

    const planets = planetsData.map((planetData) => {
      const geometry = new THREE.SphereGeometry(planetData.radius, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: planetData.color });
      const planet = new THREE.Mesh(geometry, material);
      scene.add(planet);

      return { planet, ...planetData, angle: 0 };
    });

    // Set camera position
    camera.position.z = 70;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      planets.forEach((planet) => {
        planet.angle += planet.speed;
        const x = planet.distance * Math.cos(planet.angle);
        const z = planet.distance * Math.sin(planet.angle);
        planet.planet.position.set(x, 0, z);
      });

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return null; // No need to render anything in the component
}
