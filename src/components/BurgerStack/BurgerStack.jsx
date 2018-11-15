import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

var BurgerStack = (props) => {

    return (
        <div className="container">
            BurgerStack
            {
                props.stack.map((ingredient, idx) => {
                    return (
                        <Ingredient key={idx} name={ingredient.name} color={ingredient.color}/>
                    )
                })
            }
        </div>
    )
}

export default BurgerStack;