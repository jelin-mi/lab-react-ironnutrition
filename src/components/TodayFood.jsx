import React from 'react';

function TodayFood({ todayFood }) {
  const total = todayFood.reduce((acc, current) => {
    return acc + current.calories * current.quantity;
  }, 0);

  return (
    <>
      <h2>Today's foods</h2>
      <ul>
        {todayFood.map((menu) => {
          return (
            <li key={menu.id}>
              {menu.quantity} {menu.name} = {menu.calories * menu.quantity} cal
            </li>
          );
        })}
      </ul>

      <p>Total: {total} cal</p>
    </>
  );
}

export default TodayFood;