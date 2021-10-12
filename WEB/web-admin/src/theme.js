import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import { createTheme } from '@material-ui/core/styles';
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
    merge({}, defaultTheme.palette, {
      primary: {
        main: "#ff0266", // Not far from red
      },
      secondary: {
        main: "#00ba00", // Not far from green
      },
    })
  );

const rawTheme = {
    palette,
    overrides: {
      RaSidebar: {
        drawerPaper: {
          backgroundColor: "#FFFFFF",
          color: "#ff0266",
          height: "100%",
          fontFamily: "Roboto",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "16px",
          letterSpacing: "0em",
          textAlign: "left",
        },
      },
      RaMenuItemLink: {
        active: {
          borderRightStyle: "none",
          borderLeftStyle: "solid",
          borderLeftWidth: "15px",
          borderRightColor: palette.secondary.main,
          backgroundColor: palette.action.selected, // Defined in the default palette
          color: palette.primary.main,
        },
      },
    }
  };

export const theme = createTheme(
    merge({}, defaultTheme, rawTheme)
);