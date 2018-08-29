// import libraries
import React from "react";

// import components
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

// import styles
import classes from "./Modal.css";

class Modal extends React.Component {
    
    // Performance imporvment
    // dont update if props.show did not change
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show;
    }

    // componentWillUpdate(){
    //     console.log('[Modal.js] will update');
    // }

    render () {
        // vars declaration
        let classNames = [
            classes.Modal
        ]

        // hide if show == false
        if(this.props.show) {
            classNames.push(classes.show);
        } else {
            classNames.push(classes.hide);
        }

        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classNames.join(" ")}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;