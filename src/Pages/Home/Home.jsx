import React from "react";
import "./Home.css";
import Astronaut from "../../SVG/Animation - 1696555155178.json";
import Lottie from "lottie-react";
import Cards from "./Cards";
export default function Home() {
  const Travel = [
    {
      name: "Moon",
      details: "",
      pic: "../../../src/assets/Moon.jpg",
    },
    {
      name: "Nasa Space Station",
      details: "...",
      pic: "../../../src/assets/spacestation.jpg",
    },

    {
      name: "Mars",
      details: "",
      pic: "../../../src/assets/Mars.jpg",
    },
  ];

  return (
    <>
      <div className="Container">
        <div>
          <h1 style={{ color: "white", fontSize: "60px" }}>𝕊ℙ𝔸ℂ𝔼 </h1>
        </div>
        <div style={{ marginTop: "20px", opacity: "0.5", fontWeight: "100" }}>
          <h2 style={{ letterSpacing: "10px", marginBottom: "5px" }}>
            TO SPACE AND BACK SAFELY
          </h2>
          <h5 style={{ textAlign: "center", marginBottom: "10px" }}>
            with the most memorable experience
          </h5>
        </div>
        <div className="svg" style={{ marginBottom: "20px" }}>
          <Lottie animationData={Astronaut} autoplay={true} loop={true} />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          paddingTop: "25px",
          height: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontFamily: "serif",
          }}
        >
          Solar System
        </h1>
        <div
          style={{
            display: "flex",
            paddingLeft: "10px",
            paddingRight: "10px",
            gap: "20px",
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "monospace",
                fontWeight: "lighter",
                paddingBottom: "10px",
                textAlign: "justify",
                color: "darkgray",
              }}
            >
              Our solar system, a vast cosmic wonder, consists of the Sun, eight
              planets, numerous moons, and countless other celestial objects,
              each with its own unique characteristics and mysteries waiting to
              be unraveled
            </h4>
            <h4
              style={{
                fontFamily: "monospace",
                fontWeight: "lighter",
                paddingBottom: "10px",
                textAlign: "justify",
                color: "darkgray",
              }}
            >
              Among the many strange things in our solar system are enigmatic
              moons like Saturn's Enceladus, which spews water into space from
              its icy geysers, and Jupiter's Great Red Spot, a centuries-old
              storm larger than Earth. There's also the Kuiper Belt, a region of
              icy bodies beyond Neptune, where the dwarf planet Pluto resides,
              and the Oort Cloud, a distant reservoir of comets.
            </h4>
            <h3
              style={{
                fontFamily: "monospace",
                fontWeight: "lighter",
                textAlign: "justify",
              }}
            >
              "Exploration knows no bounds. The journey to understand our solar
              system and beyond is a human endeavor that will continue to
              inspire us all." - Charles Bolden
            </h3>
          </div>
          <img
            src="../../src/assets/Solar.jpg"
            style={{ height: "400px", borderRadius: "20px" }}
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          paddingTop: "15px",
          height: "100vh",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Explore Our Universe...
        </h1>
        <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
          {Travel.map((item) => {
            return (
              <Cards Planet={item.name} Detail={item.details} Img={item.pic} />
            );
          })}
        </div>
      </div>
    </>
  );
}
