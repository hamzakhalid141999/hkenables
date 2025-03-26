import React from 'react';
import classes from "./popup.module.css";

function Popup({text}) {
  return (
    <div className={classes.popup_body}>
        <p>{text}</p>
    </div>
  )
}

export default Popup