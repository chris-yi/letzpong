import React from "react";
import classes from "./Navbar.css";
import DrawerToggle from "../DropdownDrawer/DrawerToggle/DrawerToggle"

const navbar = (props) => (
  <header className={classes.Navbar}>
    <div className={classes.Logo}>LetzPong</div>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
  </header>
);

export default navbar;
