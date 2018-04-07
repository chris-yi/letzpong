import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "./DropdownDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const dropdownDrawer = props => {
  let attachedClasses = [classes.DropdownDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.DropdownDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(" ")}>
        <div>Hello</div>
        <div onClick={props.closed}>X</div>
      </div>
    </Aux>
  );
};

export default dropdownDrawer;
