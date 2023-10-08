import React from "react";

import { Card, Box, CardContent, CardMedia, Typography } from "@mui/material";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
import "./Card.css";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function Cards(props) {
  VanillaTilt.init(document.querySelectorAll(".motion"), {
    max: 25,
    speed: 300,
  });

  return (
    <>
      <motion.div>
        <Card
          sx={{ display: "flex", width: "1000px", backgroundColor: "black" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              alignItems: "center",
              paddingTop: "90px",
              // justifyContent: "center",
            }}
          >
            <CardContent>
              <Typography
                component="div"
                variant="h4"
                sx={{ textAlign: "center", marginBottom: "20px" }}
              >
                Visit The {props.Planet}
              </Typography>
              <Typography
                component="div"
                variant="h6"
                sx={{ textAlign: "center" }}
              >
                {props.Detail}
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
            <Link to={props.link}>
              <Button variant="contained">View Details</Button>
            </Link>
          </Box>
          <CardMedia
            className="motion"
            data-tilt
            component="img"
            sx={{ width: "60%", height: 400 }}
            src={props.Img}
            alt="Live from space album cover"
          />
        </Card>
      </motion.div>
    </>
  );
}
