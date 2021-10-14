import { defaultTheme } from "react-admin";
import merge from "lodash/merge";
import { createTheme } from '@material-ui/core/styles';

const rawTheme = {
    overrides: {
      RaMenuItemLink: {
        active: {
          borderLeftStyle: "solid",
          borderLeftWidth: "2px",
          borderRightColor: "#151F6D",
        },
      },
      RaList: {
        root: {
          backgroundColor: '#FFFFFF',
        },
        actions: {
        },
        main: {
          width: "95%",
          margin: "auto",
        },
        content: {
        },
        bulkActionsDisplayed: {
        },
      },
    }
  };

export const theme = createTheme(
    merge({}, defaultTheme, rawTheme)
);