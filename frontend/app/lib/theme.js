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
  shadows: [
    'none', // No shadow
    `0px 1px 3px rgba(200, 197, 202, 0.2), 0px 1px 1px rgba(200, 197, 202, 0.14), 0px 2px 1px -1px rgba(200, 197, 202, 0.12)`, // 1
    `0px 1px 5px rgba(200, 197, 202, 0.2), 0px 2px 2px rgba(200, 197, 202, 0.14), 0px 3px 1px -2px rgba(200, 197, 202, 0.12)`, // 2
    `0px 1px 8px rgba(200, 197, 202, 0.2), 0px 3px 4px rgba(200, 197, 202, 0.14), 0px 3px 3px -2px rgba(200, 197, 202, 0.12)`, // 3
    `0px 2px 4px -1px rgba(200, 197, 202, 0.2), 0px 4px 5px rgba(200, 197, 202, 0.14), 0px 1px 10px rgba(200, 197, 202, 0.12)`, // 4
    `0px 3px 5px -1px rgba(200, 197, 202, 0.2), 0px 5px 8px rgba(200, 197, 202, 0.14), 0px 1px 14px rgba(200, 197, 202, 0.12)`, // 5
    `0px 3px 5px -1px rgba(200, 197, 202, 0.2), 0px 6px 10px rgba(200, 197, 202, 0.14), 0px 1px 18px rgba(200, 197, 202, 0.12)`, // 6
    `0px 4px 5px -2px rgba(200, 197, 202, 0.2), 0px 7px 10px rgba(200, 197, 202, 0.14), 0px 2px 16px rgba(200, 197, 202, 0.12)`, // 7
    `0px 5px 5px -3px rgba(200, 197, 202, 0.2), 0px 8px 10px rgba(200, 197, 202, 0.14), 0px 3px 14px rgba(200, 197, 202, 0.12)`, // 8
    `0px 5px 6px -3px rgba(200, 197, 202, 0.2), 0px 9px 12px rgba(200, 197, 202, 0.14), 0px 3px 16px rgba(200, 197, 202, 0.12)`, // 9
    `0px 6px 6px -3px rgba(200, 197, 202, 0.2), 0px 10px 14px rgba(200, 197, 202, 0.14), 0px 4px 18px rgba(200, 197, 202, 0.12)`, // 10
    `0px 6px 7px -4px rgba(200, 197, 202, 0.2), 0px 11px 15px rgba(200, 197, 202, 0.14), 0px 4px 20px rgba(200, 197, 202, 0.12)`, // 11
    `0px 7px 8px -4px rgba(200, 197, 202, 0.2), 0px 12px 17px rgba(200, 197, 202, 0.14), 0px 5px 22px rgba(200, 197, 202, 0.12)`, // 12
    `0px 7px 8px -4px rgba(200, 197, 202, 0.2), 0px 13px 19px rgba(200, 197, 202, 0.14), 0px 5px 24px rgba(200, 197, 202, 0.12)`, // 13
    `0px 7px 9px -4px rgba(200, 197, 202, 0.2), 0px 14px 21px rgba(200, 197, 202, 0.14), 0px 5px 26px rgba(200, 197, 202, 0.12)`, // 14
    `0px 8px 9px -5px rgba(200, 197, 202, 0.2), 0px 15px 22px rgba(200, 197, 202, 0.14), 0px 6px 28px rgba(200, 197, 202, 0.12)`, // 15
    `0px 8px 10px -5px rgba(200, 197, 202, 0.2), 0px 16px 24px rgba(200, 197, 202, 0.14), 0px 6px 30px rgba(200, 197, 202, 0.12)`, // 16
    `0px 8px 11px -5px rgba(200, 197, 202, 0.2), 0px 17px 26px rgba(200, 197, 202, 0.14), 0px 6px 32px rgba(200, 197, 202, 0.12)`, // 17
    `0px 9px 11px -5px rgba(200, 197, 202, 0.2), 0px 18px 28px rgba(200, 197, 202, 0.14), 0px 7px 34px rgba(200, 197, 202, 0.12)`, // 18
    `0px 9px 12px -6px rgba(200, 197, 202, 0.2), 0px 19px 29px rgba(200, 197, 202, 0.14), 0px 7px 36px rgba(200, 197, 202, 0.12)`, // 19
    `0px 10px 13px -6px rgba(200, 197, 202, 0.2), 0px 20px 31px rgba(200, 197, 202, 0.14), 0px 8px 38px rgba(200, 197, 202, 0.12)`, // 20
    `0px 10px 13px -6px rgba(200, 197, 202, 0.2), 0px 21px 33px rgba(200, 197, 202, 0.14), 0px 8px 40px rgba(200, 197, 202, 0.12)`, // 21
    `0px 10px 14px -6px rgba(200, 197, 202, 0.2), 0px 22px 35px rgba(200, 197, 202, 0.14), 0px 8px 42px rgba(200, 197, 202, 0.12)`, // 22
    `0px 11px 14px -7px rgba(200, 197, 202, 0.2), 0px 23px 36px rgba(200, 197, 202, 0.14), 0px 9px 44px rgba(200, 197, 202, 0.12)`, // 23
    `0px 11px 15px -7px rgba(200, 197, 202, 0.2), 0px 24px 38px rgba(200, 197, 202, 0.14), 0px 9px 46px rgba(200, 197, 202, 0.12)`, // 24
  ],
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
    text: {
      success: '#00B596',
      danger: '#EF6F6C',
      warning: '#ECA400',
    },
    error: {
      main: '#B12425', // Example of setting the main error color
      error_10: '#2B100F',
      error_20: '#58130F',
      error_30: '#851919',
      error_40: '#B12425',
      error_50: '#DE2927',
      error_60: '#E96D69',
      error_70: '#E96D69',
      error_80: '#F2A9A7',
      error_90: '#F7D4D3',
      error_95: '#FFEDEA',
      error_99: '#FFFBFF',
    },
    success: {
      main: '#389355', // Example of setting the main success color
      success_10: '#122617',
      success_20: '#1C4A2A',
      success_30: '#2A6F40',
      success_40: '#389355',
      success_50: '#3FA75F',
      success_60: '#6EC388',
      success_70: '#B7DEC1',
      success_80: '#B7DDC1',
      success_90: '#B7DDC1',
      success_95: '#DAEEE0',
      success_99: '#EBFFF1',
    },
    primary: {
      main: '#1A1B1F',
      dark: 'rgba(18, 18, 18, 1)',
      contrastText: 'rgba(27, 27, 31, 1)',
      contrastTextBlack: '#333',
      gray: 'rgba(0, 0, 0, 0.12)',
      white: '#fff',
      primary_0: '#1F00A4',
      primary_10: '#222222',
      primary_20: '#323232',
      primary_30: '#414141',
      primary_40: '#515151',
      primary_50: '#616161',
      primary_60: '#717171',
      primary_70: '#818181',
      primary_80: '#909090',
      primary_90: '#A0A0A0',
      primary_95: '#D0D0D0',
      primary_99: '#EFEFEF',
      primary_100: '#F5F5F5',
      primary_110: '#F9F9F9',
    },
    secondary: {
      main: '#0486D7',
      paper: '#FFF',
      white: '#fff',
      dark: '#333',
      secondary_10: '#0364A1',
      secondary_20: '#0486D7',
      secondary_30: '#069AF3',
      secondary_40: '#1FA2F3',
      secondary_50: '#3AADF5',
      secondary_60: '#70C4F7',
      secondary_70: '#8CCFF9',
      secondary_80: '#A8DBFA',
      secondary_90: '#A8DBFA',
      secondary_95: '#C5E7FC',
      secondary_99: '#E5F5FF',
      primary_100: '#F5F5F5',
      neutral_10: '#1B1B1F',
      neutral_30: '#47464A',
      neutral_40: '#5F5E62',
      neutral_50: '#78767A',
      neutral_60: '#929094',
      neutral_70: '#ADAAAF',
      neutral_80: '#C8C5CA',
      neutral_90: '#E5E1E6',
      neutral_95: '#F3F0F4',
      neutral_99: '#FFFBFF',
      surface_5: '#1E1E1E',
      surface_7: '#232323',
      surface_8: '#252525',
      surface_9: '#272727',
      surface_11: '#2C2C2C',
      surface_14: '#333333',
      surface_15: '#353535',
      surface_16: '#383838',
      surface_22: '#3D3D3D',
      error_40: '#BA1A1A',
      warning_70: '#E99B13',
      success_40: '#256C2A',
    },
    warning: {
      main: '#E99B13',
      Warning_95: '#FFEEDD',
      Warning_30: '#643F00',
    },
  },
});
export default theme;
