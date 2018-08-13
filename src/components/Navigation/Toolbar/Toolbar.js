import React from "react";

// style
import classes from "./Toolbar.css";

const toolbar = (props)=> {

    return (
        <header className={classes.Toolbar}>
            <div> MENU </div>
            <div> LOGO </div>
            <nav> 
                ...
            </nav>
        </header>
    );
}

export default toolbar;