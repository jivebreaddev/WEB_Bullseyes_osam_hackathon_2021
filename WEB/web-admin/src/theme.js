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
          backgroundColor: "#FFFFFF",
          
        },
        actions: {
          
        },
        main: {
          width: "95%",
          margin: "auto",
          
        },
        content: {
          boxShadow: 'none',
          
        },
        bulkActionsDisplayed: {
          
        },
      },
      RaDatagrid: {
        headerCell: {
            backgroundColor: '#F5F6FA',
            fontWeight: "bold",
        },
        tbody: {
          
        },
        rowOdd: {
          borderStyle: "solid",
          borderColor: "#FFFFFF",
          
        },
        rowEven: {
          borderStyle: "solid",
          borderColor: "#FFFFFF",
        },
      }
    }
  };

export const theme = createTheme(
    merge({}, defaultTheme, rawTheme)
);