import React from 'react';

// Styles
import classes from './BuildControls.css';

// Components
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: "Salad", type: 'salad'},
    {label: "Bacon", type: 'bacon'},
    {label: "Cheese", type: 'cheese'},
    {label: "Meat", type: 'meat'}
]

const buildCointrols = (props) => {
    return (
        <div className = {classes.BuildControls}>
            {controls.map((ctrl)=>(
                <BuildControl key={ctrl.label} label={ctrl.label}/>
            ))}
        </div>
    )
}

export default buildCointrols;