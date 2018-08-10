import React, {Component} from 'react'
import PropTypes from 'prop-types';

// import styles
import classes from './BurgerIngredient.css';


class BurgerIngridient extends Component {
    
    render() {
        let ingridient = null;

        switch(this.props.type) {
            case ('bread-top'):
                ingridient =
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                break;

            case ('bread-bottom'):
                ingridient = <div className={classes.BreadBottom}></div>
                break;
            
            case ('meat'):
                ingridient =
                <div className={classes.Meat}>
                </div>
                break;
            
            case ('cheese'):
                ingridient =
                <div className={classes.Cheese}>
                </div>
                break;
            
            case ('salad'):
                ingridient =
                <div className={classes.Salad}>
                </div>
                break;
            
            case ('bacon'):
                ingridient =
                <div className={classes.Bacon}>
                </div>
                break;

            default: ingridient = null;
        }
        return ingridient;
    }
}

BurgerIngridient.propTypes = {
    type : PropTypes.oneOf([
        "bread-bottom",
        "bread-top",
        "meat",
        "cheese",
        "salad",
        "bacon"
    ]).isRequired
}

export default BurgerIngridient;