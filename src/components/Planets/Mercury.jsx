import { Container } from "@mui/material";
import React from "react";

export default function Mercury() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/03/30/21/web-Mercury-Corbis.jpg"
          alt=""
          style={{
            height: "700px",
            width: "100%",
            //   position: "absolute",
          }}
        />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              letterSpacing: "10px",
            }}
          >
            MERCURY
          </h1>
          <h1
            style={{
              fontSize: "11px",
              width: "30%",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Mercury is the smallest planet in our solar system and closest to
            the Sun—is only slightly larger than Earth's Moon. Mercury is the
            fastest planet, zipping around the Sun every 88 Earth days. From the
            surface of Mercury, the Sun would appear more than three times as
            large as it does when viewed from Earth
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              height: "100px",
              alignItems: "center",
            }}
          >
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>DAY</h1>
              <h4>1,408 hours</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>RADIUS</h1>
              <h4>2,439.7 km</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>MOONS</h1>
              <h4>0</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>
                PLANET TYPE
              </h1>
              <h4>terrestrial planet</h4>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <h1 style={{ letterSpacing: "10px" }}>
          <span style={{ fontSize: "50px", letterSpacing: "0px" }}>𝟙. </span>
          ℂ𝕝𝕚𝕞𝕒𝕥𝕖
        </h1>
        <h4
          style={{
            width: "50%",
            fontSize: "11px",
            textAlign: "justify",
            paddingLeft: "234px",
          }}
        >
          Virtually no atmosphere to speak of; mostly composed of trace amounts
          of oxygen, sodium, and hydrogen. - Extreme temperature variations,
          ranging from about -173°C (-280°F) at night to 427°C (800°F) during
          the day due to the lack of atmosphere to retain heat.
        </h4>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="https://media.wired.com/photos/5ec85271448999d7ae47db3f/4:3/w_1920,h_1440,c_limit/photo_space_juno_2_PIA21972.jpg"
          alt=""
          style={{
            height: "500px",
            width: "100%",
            //   position: "absolute",
          }}
        />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "end",
            paddingRight: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            Geography and Landforms
          </h1>
          <h1
            style={{
              fontSize: "10px",
              width: "29%",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Landforms: Explore Mercury's surface, featuring vast plains, rugged
            mountains, and numerous impact craters, some of which are named
            after famous artists, musicians, and authors.
          </h1>
          <h1
            style={{
              fontSize: "10px",
              width: "29%",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Surface Conditions: Predominantly rocky terrain with some evidence
            of volatile substances such as water ice detected in permanently
            shadowed craters at the poles.
          </h1>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        <h1 style={{ letterSpacing: "10px" }}>
          <span style={{ fontSize: "50px", letterSpacing: "0px" }}>𝟚. </span>
          𝔼𝕟𝕧𝕚𝕣𝕠𝕟𝕞𝕖𝕟𝕥
        </h1>
        <h4
          style={{
            width: "50%",
            fontSize: "11px",
            textAlign: "justify",
            paddingLeft: "172px",
          }}
        >
          Mercury has no natural moons.No rings have been discovered around
          Mercury.Mercury is the smallest and fastest planet in the solar
          system; it is also the closest planet to the sun.Compare Mercury's
          extreme temperature differences and lack of atmosphere with Earth's
          more temperate conditions.
        </h4>
        <img
          src="https://griffithobservatory.org/wp-content/uploads/2021/03/Mercury_fin_flood_LD_V3.jpg"
          alt=""
          style={{
            height: "500px",
            width: "80%",
            borderRadius: "20px",
            //   position: "absolute",
            marginTop: "20px",
          }}
        />
      </div>
    </div>
  );
}
