import React from 'react';
/* import logo from './logo.svg'; */
/* import './App.css'; */
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
    {foods.map((food) => {
      return (
        <FoodBox 
          key={food.id}
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
        />
      );
    })}
    
    
    </div>
  );
}

export default App;
