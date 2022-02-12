import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import Form from './components/Form';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  /* const [foodsData, setFoodsData] = useState(foodsJSON); */

  // Iteration 3 | Add new food - form
  const [isVisible, setVisible] = useState(true);

  // Iteration 4 | Implement search bar
  const onFilter = (searchTerm) => {
    if (searchTerm === '') {
      setFoods(foods);
    } else {
      setFoods(
        foods.filter((meal) =>
          meal.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  // Iteration 3 | Add new food - form
  const handleVisibility = () => {
    setVisible((prev) => !prev);
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    /* const updatedFoodsData = [...foodsData, newFood]; */

    setFoods(updatedFoods);
    /* setFoodsData(updatedFoodsData); */
  };


  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <Search onFilter={onFilter} />
      {!isVisible && (
        <Form handleVisibility={handleVisibility} addNewFood={addNewFood} />
      )}

      <button onClick={handleVisibility}>Add new food</button>

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
