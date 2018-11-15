import React from 'react';

var Ingredient = (props) => {
    return (
        <span className="component" style={{backgroundColor: props.color}}>
            {props.name}
        </span>
    )
}

export default Ingredient;