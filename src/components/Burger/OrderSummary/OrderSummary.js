//import libraries
import React from "react";

// import components
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {

    // build ingredients list
    const ingredientsSummary = Object.keys(props.ingredients).map((key)=>{
        return <li key={key}>
                    <span style={{textTransform: 'capitalize'}}>{key}</span> : {props.ingredients[key]}
                </li>
    });

    return (
        <Aux>
            <h3>Your Burger:</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p> Continue ti Checkout ?</p>
            <Button clicked={props.cancelOrder} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continueOrder} btnType="Success">CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;