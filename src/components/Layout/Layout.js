import React from "react";
import Aux from "../../hoc/Auxiliary";

const layout = (props)=>{
    return (
        <Aux>
        <div key="header">Toolbar, Sidedrawer, Backdrop</div>
        <main key="body">
            {props.children}
        </main>
        </Aux>
    );
}

export default layout;