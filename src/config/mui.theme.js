import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";
export const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1720,
    },
  },

  typography: {
    h1: {
      color: "#FFF",
      fontFamily: ["Bebas Neue", "sans-serif"].join(","),
      fontSize: "44px",
      fontWeight: 400,
      lineHeight: "58px",
    },
    h2: {
      color: COLORS.Black,
      fontSize: "36px",
      fontWeight: 400,
      letterSpacing: "1.8px",
    },
    body1: {
      color: COLORS.Black,
      fontSize: "20px",
      fontWeight: 400,
    },
    body2: {
      color: COLORS.Black,
      fontSize: "14px",
      fontWeight: 400,
      opacity: 0.5,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "main_btn" },
          style: {
            textTransform: "none",
            background: COLORS.cattailRed,
            color: COLORS.whiteColor,
            textAlign: "center",
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "1.4px",
            padding: "17px 27px",
          },
        },
      ],
    },
  },
});
