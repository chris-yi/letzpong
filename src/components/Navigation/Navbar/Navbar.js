import React from "react";
import classes from "./Navbar.css";

const navbar = () => (
  <header className={classes.Navbar}>
    <div className={classes.Logo}>LetzPong</div>
    <div>Toggle</div>
  </header>
);

export default navbar;
