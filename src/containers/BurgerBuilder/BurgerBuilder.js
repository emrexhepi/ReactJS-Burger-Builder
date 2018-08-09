import React,{Component} from "react";

// Components
import Aux from "../../hoc/Auxiliary";
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingridients : {
            salad : 0,
            bacon : 0,
            cheese: 0,
            meat : 0
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingridients} />
                <div>Build Controls </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;