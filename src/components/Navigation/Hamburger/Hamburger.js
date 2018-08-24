import React from 'react'

// styles
import classes from "./Hamburger.css";

const Hamburger = (props) => {
  return (
    <div className={classes.Hamburger} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Hamburger
