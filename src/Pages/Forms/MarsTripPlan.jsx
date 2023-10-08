import React from "react";
import { Typography, Container, Grid, Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";

function MarsTripPlan() {
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
            Moon Expedition: Discover the Moon's Secrets
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Duration:</strong> 7-Day Lunar Exploration
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
                for your lunar adventure.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 2-3 - NASA Space Station Stay:</strong> Transition
                to a NASA space station in Earth's orbit. Orientation and
                preparation for the lunar journey.
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
                <strong>Day 7-8 - Lunar Exploration:</strong> Explore the lunar
                landscape with guided tours. Collect lunar samples and conduct
                scientific experiments. Enjoy lunar activities and take in the
                incredible views.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Day 9 - Return to Earth:</strong> Say goodbye to the
                Moon and begin the return journey to Earth. Re-entry and landing
                at our spaceport. Celebration and presentation of certificates
                for completing the lunar exploration.
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

export default MarsTripPlan;
