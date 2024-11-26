"use client";

import { createTheme } from "@mui/material/styles";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  palette: {
    background: {
      default: '#F7F7F9',
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

export default theme;
