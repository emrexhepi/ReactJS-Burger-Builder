import React,{Component} from "react";

// Components
import Aux from "../../hoc/Auxiliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
        totalPrice : 4,
        purchaseable : false
    }

    updatePurchaseState(ingredients) {
        // init vars
        let purchaseable = false;
        
        // flaten ingredients to sum of ingredients
        const sum = Object.keys(ingredients).reduce((sum, key)=>{
            return sum + ingredients[key];
        }, 0);

        console.log(sum);

        // check if sum is greater then one
        // then turn the pruchaseable to true
        if(sum > 0 ){
            purchaseable = true;
        }

        // update state
        this.setState({
            purchaseable : purchaseable
        });

    }

    addIngredientHandler = (type) => {

        // add the ingridient to state.ingridients
        const ingredients = {
            ...this.state.ingredients
        }

        ingredients[type] +=1;

        // add price to state.totalPrice;
        const priceAddition = INGRIDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice + priceAddition;


        // update state
        this.setState({
            ingredients : ingredients,
            totalPrice : totalPrice,
        });

        // update purchaseable        
        this.updatePurchaseState(ingredients);
    }

    removeIngredientHandler = (type) => {

        // Limit to not go under 0
        if(this.state.ingredients[type] <= 0 ) return null;

        // add the ingridient to state.ingridients
        const ingredients = {
            ...this.state.ingredients
        }

        ingredients[type] -=1;

        // add price to state.totalPrice;
        const priceDeduction = INGRIDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice - priceDeduction;
        

        // update state
        this.setState({
            ingredients : ingredients,
            totalPrice : totalPrice
        });

        // update purchaseable
        this.updatePurchaseState(ingredients);
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo)
            disabledInfo[key] = disabledInfo[key] <= 0;

        return (
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    price={ this.state.totalPrice.toFixed(2) } 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable = {this.state.purchaseable}
                    />
            </Aux>
        );
    }
}

export default BurgerBuilder;