import { Container } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import React from "react";

export default function Venus() {
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
          src="https://cdn2.tfx.company/images/clickwallpapers-planet-venus-3840x2160-in-4k-img4.jpg"
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
            Venus
          </h1>
          <h1
            style={{
              fontSize: "11px",
              width: "30%",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Venus is the second planet from the Sun. It is a rocky planet with
            the densest atmosphere of all the rocky bodies in the Solar System,
            and the only one with a mass and size that is close to that of its
            orbital neighbour Earth.
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
              <h4>5,832 hours</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>RADIUS</h1>
              <h4>6,051.8 km</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>MOONS</h1>
              <h4>0</h4>
            </div>
            <div>
              <h1 style={{ fontSize: "11px", color: "darkgray" }}>
                PLANET TYPE
              </h1>
              <h4>Rocky planet</h4>
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
          Mostly carbon dioxide with thick clouds of sulfuric acid, creating a
          strong greenhouse effect.Venus has a scorching hot surface due to its
          thick atmosphere, with temperatures reaching up to 900°F (475°C). It
          experiences intense atmospheric pressure.
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
            Landforms: Describe Venus's highland regions, impact craters, and
            extensive lava plains.
          </h1>
          <h1
            style={{
              fontSize: "10px",
              width: "29%",
              textAlign: "justify",
              marginBottom: "20px",
            }}
          >
            Surface Conditions: Discuss the rocky terrain and the possibility of
            active volcanoes.
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
          Venus does not have any natural moons.Venus does not have rings. Venus
          might have had a moon in the past, but it probably crashed back into
          the planet billions of years ago. Discuss Venus's representation in
          mythology, often associated with love and beauty in various cultures.
          Mention important scientific missions like NASA's Magellan, which
          mapped Venus's surface in the 1990s.
        </h4>
        <img
          src="https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/b42ebce0-20db-491b-99ba-bd6ecf5a3ef8/Rendition/low-res/Content/Public"
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
