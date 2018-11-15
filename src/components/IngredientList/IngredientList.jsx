import React from 'react';
import Ingredient from '../Ingredient/Ingredient';


var IngredientList = (props) => {
    return (
        <div className="container">
            <h1>Ingredient List</h1>
            {
                props.ingredients.map((ing, idx) => {
                    return (
                        <div key={idx}>
                            <Ingredient name={ing.name} color={ing.color} addIngredient={props.addIngredient} />
                            <button onClick={props.addIngredient}>></button>
                        </div>
                    ) 
                })
            }
        </div>
    )
}

export default IngredientList;