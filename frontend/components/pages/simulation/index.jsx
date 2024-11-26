"use client";
import { Box, styled } from "@mui/material";
import SimulationTab from "./simulation-tab";
import { useState } from "react";

const SimulationBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  borderRadius : theme.shape.borderRadius,
  overflow : "hidden",
}));

const SimulationComponents = () => {
  const [tabNumber, setTabNumber] = useState(0);

  const handleChange = (event, newValue) => {
    setTabNumber(newValue);
  };

  return (
    <SimulationBox boxShadow={1}>
      <SimulationTab TabNumber={tabNumber} handleChange={handleChange} />
    </SimulationBox>
  );
};
export default SimulationComponents;
