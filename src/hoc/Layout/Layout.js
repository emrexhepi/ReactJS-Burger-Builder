import React, {Component} from "react";

// cpomonents
import Aux from "../Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    closeSideDrawerHandler = ()=>{
        this.setState({showSideDrawer: false});
    }

    openSideDrawerHandler = ()=>{
        this.setState({showSideDrawer: true});
    }

    render() {
        return (
            <Aux>
                <Toolbar openSideDrawer={this.openSideDrawerHandler}
                    />
                    
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closeSideDrawer={this.closeSideDrawerHandler}/>

                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;