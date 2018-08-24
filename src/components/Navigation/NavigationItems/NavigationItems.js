import React from 'react'

//components
import NavigatioItem from "./NavigationItem/NavigationItem";

//styles
import classes from "./NavigationItems.css";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
        <NavigatioItem link="/" active> Burger Builder! </NavigatioItem>
        <NavigatioItem link="/checkout"> Checkout </NavigatioItem>
    </ul>
  )
}

export default NavigationItems;
