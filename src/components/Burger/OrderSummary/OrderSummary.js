//import libraries
import React from "react";

// import components
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component{
    // This could be a functional component
    // the performance improvements were made to Modal component;
    componentWillUpdate(){
        // console.log('[OrderSummary.js] will update');
    }

    render() {
        // build ingredients list
        const ingredientsSummary = Object.keys(this.props.ingredients).map((key)=>{
            return <li key={key}>
                        <span style={{textTransform: 'capitalize'}}>{key}</span> : {this.props.ingredients[key]}
                    </li>
        });

        return (
            <Aux>
                <h3>Your Burger:</h3>
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p> Continue ti Checkout ?</p>
                <Button clicked={this.props.cancelOrder} btnType="Danger">CANCEL</Button>
                <Button clicked={this.props.continueOrder} btnType="Success">CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;