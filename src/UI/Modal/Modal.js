// import libraries
import React from "react";

// import components
import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

// import styles
import classes from "./Modal.css";

const modal = (props) => {
    
    // vars declaration
    let classNames = [
        classes.Modal
    ]

    // hide if show == false
    if(props.show) {
        classNames.push(classes.show);
    } else {
        classNames.push(classes.hide);
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classNames.join(" ")}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;