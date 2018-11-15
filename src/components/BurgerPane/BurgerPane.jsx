import React from 'react';
import BurgerStack from '../BurgerStack/BurgerStack';
import ClearBurger from '../ClearBurger/ClearBurger';

var BugerPane = (props) => {
    return (
        <div className="container">
            <h1>Burger Pane</h1>
            <BurgerStack stack={props.stack} />
            <ClearBurger />
        </div>
    )
}

export default BugerPane;