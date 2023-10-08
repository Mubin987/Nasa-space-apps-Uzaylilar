import React, { useState } from "react";

import FirstForm from "./FirstForm";

function Forms() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <FirstForm onNext={handleNext} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
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
      {renderForm()}
    </div>
  );
}

export default Forms;
