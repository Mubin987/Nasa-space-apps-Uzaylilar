import React from "react";
import { Container, Paper, Typography, Grid, Avatar } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import Barcode from "react-barcode"; // Import the barcode library
const generateRandomBarcode = () => {
  const randomBarcode = Math.floor(Math.random() * 1000000000); // Adjust the range as needed
  return String(randomBarcode).padStart(10, "0"); // Format to a 10-digit string
};
function Confirm() {
  const randomBarcodeValue = generateRandomBarcode();
  return (
    <div style={{ backgroundColor: "black", height: "700px" }}>
      <Container maxWidth="md" style={{ backgroundColor: "black" }}>
        <Paper
          style={{
            padding: "16px",
            marginTop: "0px",
          }}
        >
          <Typography
            style={{
              marginTop: "36px",
              marginBottom: "20px",
              backgroundColor: "black",
            }}
            variant="h4"
            align="center"
            gutterBottom
          >
            Booking Confirmed
          </Typography>
          <Grid
            container
            spacing={2}
            style={{
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            <Grid item xs={12}>
              <Paper
                style={{
                  backgroundColor: "#2196F3",
                  color: "white",
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <Typography variant="h6" gutterBottom>
                    Boarding Pass
                  </Typography>
                  <Typography variant="body1">
                    <strong>Name:</strong> Mubin Farid
                  </Typography>
                  <Typography variant="body1">
                    <strong>Destination:</strong> Mars
                  </Typography>
                  <Typography variant="body1">
                    <strong>Departure Date:</strong> 2034/05/15
                  </Typography>
                  <Typography variant="body1">
                    <strong>Seat Number:</strong> 42A
                  </Typography>
                  <Typography variant="body1">
                    <strong>Gate:</strong> G-5
                  </Typography>
                  {/* Add more details as needed */}
                </div>
                <Avatar
                  style={{
                    backgroundColor: "white",
                    color: "#2196F3",
                    marginRight: "16px",
                  }}
                >
                  <FlightIcon />
                </Avatar>
              </Paper>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <Barcode value={randomBarcodeValue} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Confirm;
