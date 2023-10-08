import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InsertEmoticon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Cards(props) {
  return (
    <Card sx={{ Width: "345px" }} variant="outlined">
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.Img}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "black" }}
        >
          {props.Planet}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/booking">
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{ width: "100%" }}
          >
            View Plan
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
