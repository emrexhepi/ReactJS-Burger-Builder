import React,{Component} from "react";

// Components
import Aux from "../../hoc/Auxiliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGRIDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat : 1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese: 0,
            meat : 0
        },
        totalPrice : 4
    }

    addIngredientHandler = (type) => {

        // add the ingridient to state.ingridients
        const ingredients = {
            ...this.state.ingredients
        }
        console.log("ingredients: " , this.state.ingredients);

        ingredients[type] +=1;

        // add price to state.totalPrice;
        const priceAddition = INGRIDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice + priceAddition;
        

        // update state
        this.setState({
            ingredients : ingredients,
            totalPrice : totalPrice
        });
    }

    removeIngredientHandler = (type) => {

        // Limit to not go under 0
        if(this.state.ingredients[type] === 0 ) return null;

        // add the ingridient to state.ingridients
        const ingredients = {
            ...this.state.ingredients
        }
        console.log("ingredients: " , this.state.ingredients);

        ingredients[type] -=1;

        // add price to state.totalPrice;
        const priceAddition = INGRIDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice - priceAddition;
        

        // update state
        this.setState({
            ingredients : ingredients,
            totalPrice : totalPrice
        });
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;