import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import Form from './components/Form';
import TodayFood from './components/TodayFood';

function App() {
  const [foods, setFoods] = useState(foodsJSON);
  /* const [foodsData, setFoodsData] = useState(foodsJSON); */

  // Iteration 3 | Add new food - form
  const [isVisible, setVisible] = useState(false);

  // Iteration 5 | Create add buttons
  const [todayFood, setTodayFood] = useState([]);

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
    setVisible((isVisible) => !isVisible);
  };

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    /* const updatedFoodsData = [...foodsData, newFood]; */

    setFoods(updatedFoods);
    /* setFoodsData(updatedFoodsData); */
  };

  // Iteration 5 | Create add buttons
  const addTodayFood = (today) => {
    const todayMenu = [...todayFood, today];
    setTodayFood(todayMenu);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <Search onFilter={onFilter} />
      
{/* Let styles to handle the 'Visibility', this way both components exist in DOM all the time. */}
    <div className={isVisible ? 'block' : 'none'}>
      <Form handleVisibility={handleVisibility} addNewFood={addNewFood} />
    </div>
    <button className={isVisible ? 'none' : 'block'} onClick={handleVisibility}>Add new food</button>

      {foods.map((food) => {
        return (
          <>
            <FoodBox
              key={food.id}
              name={food.name}
              calories={food.calories}
              image={food.image}
              quantity={food.quantity}
              addTodayFood={addTodayFood}
            />
          </>
        );
      })}

      <TodayFood todayFood={todayFood} />
    </div>
  );
}

export default App;
