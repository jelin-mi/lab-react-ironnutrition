import React, { useState } from 'react';

function Form({ handleVisibility, addNewFood }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); // // prevent the page from reloading (its default behavior)
    const newFoodInfo = { name, calories, image };
    addNewFood(newFoodInfo);

    console.log(newFoodInfo);
    // Reset states
    setName('');
    setCalories('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name of a food"
        name="name"
        value={name}
        onChange={handleNameInput}
      />

      <input
        type="text"
        placeholder="Number of calories"
        name="calories"
        value={calories}
        onChange={handleCaloriesInput}
      />

      <input
        type="text"
        placeholder="Image URL"
        name="image"
        value={image}
        onChange={handleImageInput}
      />
      <button /*onClick={handleVisibility}*/ type="submit">
        Submit a Food
      </button>
    </form>
  );
}

export default Form;
