import React, { Component } from 'react';
import './App.css';
import IngredientList from './components/IngredientList/IngredientList'
import BurgerPane from './components/BurgerPane/BurgerPane';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: [
                {name: 'Kaiser Bun', color: 'saddlebrown'},
                {name: 'Sesame Bun', color: 'sandybrown'},
                {name: 'Gluten Free Bun', color: 'peru'},
                {name: 'Beef Patty', color: '#3F250B'},
                {name: 'Soy Patty', color: '#3F250B'},
                {name: 'Black Bean Patty', color: '#3F250B'},
                {name: 'Chicken Patty', color: 'burlywood'},
                {name: 'Lettuce', color: 'lawngreen'},
                {name: 'Tomato', color: 'tomato'},
                {name: 'Bacon', color: 'maroon'},
                {name: 'Onion', color: 'lightyellow'}
            ],
            stack: []
        }
        this.addIngredient = this.addIngredient.bind(this);
    }
    addIngredient(e) {
        let el = e.target.parentNode.firstChild;
        let idx = this.state.ingredients.findIndex((ingredient) => {
            return ingredient.name === el.textContent;
        })
        let updatedStack = this.state.stack;
        updatedStack.push(this.state.ingredients[idx]);

        this.setState({stack: updatedStack});
    }
    undoIngredient() {
        // this.setState((state, props) => {
        //     return {
        //         ingredients: this.state.ingredients,
        //         stack: this.stack
        //     }
        // })
        let stack = this.state.stack;
        this.setState({stack: stack.slice(0, stack.length)})
    }
    render() {
        return (
            <div className="App">
                <IngredientList ingredients={this.state.ingredients} addIngredient={this.addIngredient} />
                <BurgerPane stack={this.state.stack} />
            </div>
        );
    }
}

export default App;
