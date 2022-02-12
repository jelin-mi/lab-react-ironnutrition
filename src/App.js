import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);

  const onFilter = (searchTerm) => {
    if (searchTerm === '') {
      setFoods(foodsData);
    } else {
      setFoods(
        foodsData.filter((meal) =>
          meal.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <Search onFilter={onFilter} />
      {foods.map((food) => {
        return (
          <>
            <FoodBox
              key={food.id}
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
