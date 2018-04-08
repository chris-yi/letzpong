import React from "react";
import classes from "./MainContent.css";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const mainContent = () => (
  <Aux>
    <div className={classes.Container}>
      <h1 className={classes.Header}>
        Welcome to Letz Pong! - The ultimate office ping-pong tournament App
      </h1>
      <p className={classes.Content}>
        Invite your office rivals, track your score and build leaderboards to
        unleash your inner Paddle Master.
      </p>
      <Button />
    </div>
  </Aux>
);

export default mainContent;
