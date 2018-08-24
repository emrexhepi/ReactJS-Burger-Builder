import React from "react";

//components
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Hamburger from "../Hamburger/Hamburger";

// style
import classes from "./Toolbar.css";

const toolbar = (props)=> {

    return (
        <header className={classes.Toolbar}>
            <Hamburger clicked={props.openSideDrawer}/>
            <div className={classes.LogoHolder}>
                <Logo/>
            </div>
            <nav className={classes.NavigationHolder}> 
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;