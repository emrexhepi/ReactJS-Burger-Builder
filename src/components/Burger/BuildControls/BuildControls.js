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
            <p>Current price: <strong>{props.price}$ </strong></p>
            {controls.map((ctrl)=>(
                <BuildControl 
                    key={ctrl.label}
                    label={ctrl.label}
                    added = {()=>props.ingredientAdded(ctrl.type)}
                    removed = {()=>props.ingredientRemoved(ctrl.type)}
                    disabled = {props.disabled[ctrl.type]}
                    />
            ))}
            <button disabled={!props.purchaseable} className={classes.OrderButton}> ORDER NOW </button>
        </div>
    )
}

export default buildCointrols;