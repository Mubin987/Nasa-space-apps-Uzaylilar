import React from "react";
import { Typography, Container, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

function SolarSystemTrip() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container maxWidth="md">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "70px",
            backgroundColor: "#202C33",
            borderBottom: "2px solid black",
          }}
        >
          Space Exploration Booking
        </h1>
        <Paper
          style={{
            padding: "16px",
            marginTop: "16px",

            display: "flex",
            flexDirection: "column",
            backgroundColor: "#202C33",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            The Ultimate Solar System Odyssey: 30-Day Extraterrestrial Adventure
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Embark on the journey of a lifetime as a space tourist and explore
            the wonders of our solar system, from the fiery surface of Mercury
            to the icy plains of Pluto. This 30-day package offers an immersive
            experience, allowing travelers to set foot on each planet and some
            of their moons, witnessing breathtaking landscapes, stunning
            celestial phenomena, and the marvels of space exploration.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Duration:</strong> 30-Day Space Exploration
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Price:</strong> Contact us for pricing details
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 1 - Departure:</strong> Depart from our spaceport
                for your space adventure.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 2-3 - NASA Space Station Stay:</strong> Transition
                to a NASA space station in Earth's orbit. Orientation and
                preparation for the solar system tour.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 4-6 - Lunar Orbit and Arrival:</strong> Reach lunar
                orbit and observe the Moon from space. Descend to the Moon's
                surface in a lunar lander. Set up a lunar base camp.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 7-11 - Moon to Mars and Jupiter:</strong> Explore
                the Travel to Mars and explore its surface using advanced rovers
                and habitats.- Journey to Jupiter, the largest planet in our
                solar system. - Exploration of Jupiter's moons: Europa, Io,
                Ganymede, and Callisto. - Witness the Great Red Spot and other
                atmospheric wonders of Jupiter.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 11-15 - Saturn and its Rings:</strong> Explore the -
                Travel to Saturn and witness its magnificent rings up close. -
                Visit Saturn's moons: Titan and Enceladus, known for their
                unique surface features and potential for extraterrestrial life.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 16-21 - Uranus and Neptune:</strong> Explore the
                lunar - Explore Uranus and Neptune, the ice giants of our solar
                system. - Study their unique atmospheres and intriguing moon
                systems.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 22-27 - Asteroid Belt and Beyond:</strong> - Journey
                through the asteroid belt, observing rocky bodies and potential
                mining sites. - Visit dwarf planet Ceres, the largest object in
                the asteroid belt. - Explore the Kuiper Belt and observe distant
                icy bodies, including Pluto and its moon, Charon.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 28-30 - Return to Earth:</strong> Say goodbye to the
                Moon and begin the return journey to Earth. Re-entry and landing
                at our spaceport. Celebration and presentation of certificates
                for completing the solar system exploration.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Precautions: </strong>
                <br />
                1. Health and Safety: Travelers will undergo rigorous medical
                examinations and training before the trip to ensure physical and
                mental preparedness.
                <br /> 2. Environmental Protocols: Strict guidelines will be
                followed to minimize the impact on the visited celestial bodies
                and their environments. <br />
                3. Emergency Protocols: Comprehensive emergency protocols and
                communication systems will be in place to address any unforeseen
                situations. <br />
                4. Space Suit Training: Travelers will undergo training to
                operate and maintain their space suits, ensuring safety during
                extravehicular activities. <br />
                5. Educational Briefings: Regular briefings on the
                characteristics of each planet, moon, and celestial body will be
                provided to enhance understanding and appreciation.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Link to="/ticket">
          <Button sx={{ color: "#fff" }} variant="contained" color="success">
            Confirm trip
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default SolarSystemTrip;
