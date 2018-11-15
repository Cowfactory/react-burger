import React from 'react';
import BurgerStack from '../BurgerStack/BurgerStack';
import ClearBurger from '../ClearBurger/ClearBurger';

var BugerPane = (props) => {
    return (
        <div className="container">
            <h1>Burger Pane</h1>
            <BurgerStack stack={props.stack} undoAdd={props.undoAdd} />
            <ClearBurger clearBurger={props.clearBurger} />
        </div>
    )
}

export default BugerPane;