import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import { createTheme } from '@material-ui/core/styles';
import createPalette from "@material-ui/core/styles/createPalette";

const palette = createPalette(
    merge({}, defaultTheme.palette, {
      primary: {
        main: "#FFFFFF",
      },
    })
  );

const rawTheme = {
    palette,
    overrides: {
      RaMenuItemLink: {
        active: {
          borderLeftStyle: "solid",
          borderLeftWidth: "2px",
          borderRightColor: "#151F6D",
        },
      },
    }
  };

export const theme = createTheme(
    merge({}, defaultTheme, rawTheme)
);