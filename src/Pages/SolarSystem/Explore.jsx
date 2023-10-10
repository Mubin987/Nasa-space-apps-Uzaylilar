import React from "react";
import "./Explore.css";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import Cards from "./Cards";
import { Container } from "@mui/material";
export default function Explore() {
  const planets = [
    {
      name: "Mercury",
      details: "Where Days are Scorching, and Nights are Frigid",
      pic: "../../../public/Mercury.jpg",
      link: "/mercury",
    },
    {
      name: "Venus",
      details: "Earth's Fiery Sister.",
      pic: "../../../public/Venus.jpg",
      link: "/venus",
    },

    {
      name: "Mars",
      details: "The Red Planet of Mysteries.",
      pic: "../../../public/Mars.jpg",
      link: "/mars",
    },
    {
      name: "Jupiter",
      details: "The Giant of the Solar System",
      pic: "../../../public/Jupiter.jpg",
      link: "/jupiter",
    },
    {
      name: "Saturn",
      details: "Where Rings Reign Supreme.",
      pic: "../../../public/Saturn.jpg",
      link: "/saturn",
    },
    {
      name: "Uranus",
      details: "The Sideways Ice Giant.",
      pic: "../../../public/Uranus2.jpg",
      link: "/uranus",
    },
    {
      name: "Neptune",
      details: "The Windy and Watery World.",
      pic: "../../../public/Neptune.jpg",
      link: "/neptune",
    },
  ];

  return (
    <>
      <div className="container">
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1>𝕊𝕡𝕒𝕔𝕖 𝔼𝕩𝕡𝕝𝕠𝕣𝕒𝕥𝕚𝕠𝕟</h1>
        </div>
        {planets.map((items) => {
          return (
            <Cards
              Planet={items.name}
              Detail={items.details}
              Img={items.pic}
              link={items.link}
            />
          );
        })}
      </div>
    </>
  );
}
