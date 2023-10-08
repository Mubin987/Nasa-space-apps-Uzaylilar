import { Button, Input, Select } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function FirstForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectedPlanet: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onNext(formData);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#202C33",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
      <h2>Personal Information and Planet Selection</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111B21",
          gap: "10px",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          style={{ color: "white" }}
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <Input
          style={{ color: "white" }}
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <Input
          style={{ color: "white" }}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          style={{ color: "white" }}
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
        {/* <select
          name="selectedPlanet"
          value={formData.selectedPlanet}
          onChange={handleInputChange}
          style={{ color: "black", }}

        >
          <option value="" style={{ color: "black" }}>
            Select a planet to visit
          </option>
          <option value="Mars" style={{ color: "black" }}>
            Mars
          </option>
          <option value="Venus" style={{ color: "black" }}>
            Venus
          </option>
          {/* Add options for other planets *
        </select> */}
        <h4>Select Destination ...</h4>
        <Link to="/visitsolarsystem">
          <Button sx={{ color: "#fff" }} color="secondary" variant="outlined">
            Space Odessey
          </Button>
        </Link>
        <Link to="/visitmars">
          <Button sx={{ color: "#fff" }} color="secondary" variant="outlined">
            Moon
          </Button>
        </Link>
        <Link to="/visitmoon">
          <Button sx={{ color: "#fff" }} color="secondary" variant="outlined">
            Mars
          </Button>
        </Link>
        <Link to="/">
          <Button sx={{ color: "#fff" }} color="secondary" variant="outlined">
            Space Station
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default FirstForm;
