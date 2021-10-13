import React from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { MenuItemLink, getResources } from "react-admin";
import DefaultIcon from "@material-ui/icons/ViewList";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles({
  root: {
    height: "52px",
    width: "230px",
    left: "4px",
    top: "20px",
    'border-radius': "0px",

    color: "#171725",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0em",
    textAlign: "left",
  },
});

const MyMenu = ({ onMenuClick, logout }) => {
  const isXSmall = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const open = useSelector((state) => state.admin.ui.sidebarOpen);
  const resources = useSelector(getResources);
  const classes = useStyles();
  return (
      <div className="menu">
        {resources.map((resource) => (
            <MenuItemLink
              className={classes.root}
              key={resource.name}
              to={`/${resource.name}`}
              primaryText={
                (resource.options && resource.options.label) || resource.name
              }
              leftIcon={resource.icon ? <resource.icon /> : <DefaultIcon />}
              onClick={onMenuClick}
              sidebarIsOpen={open}
            />
        ))}
        {isXSmall && logout}
      </div>
  );
};

export default MyMenu;