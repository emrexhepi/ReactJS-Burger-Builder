import React from 'react';

//styles
import classes from "./SideDrawer.css";

// components
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary"

const SideDrawer = (props) => {
  let sideDrawerClasses = [classes.SideDrawer];

  props.open ?
    sideDrawerClasses.push(classes.Open):
    sideDrawerClasses.push(classes.Close);

  sideDrawerClasses = sideDrawerClasses.join(" ");

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closeSideDrawer} />
      <div className={sideDrawerClasses}>
        <div className={classes.LogoHolder} >
          <Logo/>
        </div>
        <nav>
            <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer;
