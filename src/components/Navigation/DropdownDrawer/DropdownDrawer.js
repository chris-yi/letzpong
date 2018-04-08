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
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.DropdownHeader}>
          <div className={classes.Logo}>LetzPong</div>
          <div className={classes.CloseButton} onClick={props.closed}><i className="fa fa-times"></i></div>
        </div>
      </div>
    </Aux>
  );
};

export default dropdownDrawer;
