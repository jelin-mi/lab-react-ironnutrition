import React from 'react';
import { useState } from 'react';

function FoodBox({ name, calories, image, addTodayFood }) {
  const [foodQuantity, setfoodQuantity] = useState(1);

  const handleChange = (e) => {
    setfoodQuantity(e.target.value);
  };

  const handleTodayFood = () => {
    addTodayFood({
      name: name,
      calories: calories,
      quantity: foodQuantity,
    });
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories}</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={foodQuantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleTodayFood}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodBox;