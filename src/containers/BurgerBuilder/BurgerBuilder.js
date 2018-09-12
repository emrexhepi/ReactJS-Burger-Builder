import React,{Component} from "react";

// Components
import Aux from "../../hoc/Auxiliary";
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

// import axios instance
import axios from '../../axios-orders';

const INGRIDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat : 1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice : 4,
        purchaseable : false,
        ordering : false,
        loadig : false,
        error : false
    }

    async componentDidMount () {
        try {
            const response = await axios.get('/ingredients.json');
            this.setState({ingredients: response.data});
        } catch (e) {
            
            this.setState({loadig: false, error: true});
            console.log(e);
        }
    }

    updatePurchaseState(ingredients) {
        // init vars
        let purchaseable = false;
        
        // flaten ingredients to sum of ingredients
        const sum = Object.keys(ingredients).reduce((sum, key)=>{
            return sum + ingredients[key];
        }, 0);

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

    orderHandler = () => {
        this.setState({
            ordering : true
        });
    }

    orderCancelHandler = () => {
        this.setState({
            ordering : false
        });
    }

    async orderContinueHandler () {
        this.setState({loadig: true});
        
        try {
                const order = {
                ingredients : this.state.ingredients,
                price : this.state.totalPrice,
                customer : {
                    name: 'Emrullah Rexhepi',
                    addres: {
                        street: 'Teststreet 1',
                        zipcode: '12345',
                        country: 'Albania'
                    },
                    email: 'test@test.com',
                    deliveryMethod: 'fastest'
                }
            }

            await axios.post('/orders.json', order);
            
            this.setState({loadig: false, ordering: false});
        } catch (e) {
            
            this.setState({loadig: false, ordering: false});
            console.log(e);
        }
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
        
        let orderSummary = null;

        if( this.state.ingredients ) {
            orderSummary = <OrderSummary 
                                ingredients={this.state.ingredients}
                                cancelOrder={this.orderCancelHandler}
                                continueOrder={()=>{this.orderContinueHandler()}}
                                price={this.state.totalPrice}/>
        }

        let burger =  this.state.error ?
            <p>Ingredients can't be loaded!</p>:
            <Spinner />;

        if( this.state.ingredients ) {
            burger = 
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        price={ this.state.totalPrice.toFixed(2) } 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchaseable = {this.state.purchaseable}
                        order={this.orderHandler}
                        />
                </Aux>
            ;
        }

        // check if loading
        if (this.state.loadig) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal
                    show={this.state.ordering}
                    modalClosed={this.orderCancelHandler} >
                    {orderSummary}
                </Modal>
                { burger }
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);