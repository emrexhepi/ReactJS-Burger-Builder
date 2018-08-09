import React,{Component} from "react";

// Components
import Aux from "../../hoc/Auxiliary";
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     }
    // }

    state = {
        ingridients : {
            salad : 2,
            bacon : 1,
            cheese: 2,
            meat : 2
        }
    }

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingridients} />
                <div>Burger</div>
                <div>Build Controls </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;