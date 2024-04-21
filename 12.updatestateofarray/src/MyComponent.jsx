import React, { useState } from "react";

function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAddFood();
    }
  }
  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods([...foods, newFood]);
  }
  function handleremoveFood(index) {
    //using an underscore for a parameter makes the js ignore that parameter
    
    setFoods(foods.filter((_, i) => i !== index));
  }
  return (
    <>
      <div className="food-container">
        <h2>List of Food</h2>
        <ul>
          {foods.map((food, index) => {
            return (
              <li
                onClick={() => {
                  handleremoveFood(index);
                }}
                key={index}
              >
                {food}
              </li>
            );
          })}
        </ul>
        <div className="buttons">
          <input id="foodInput" type="text" placeholder="Enter Food Name" />
          <button
            className="addFruit"
            onClick={handleAddFood}
            onKeyDown={handleKeyDown}
          >
            Add Food
          </button>
          <br />
          <button className="removeFruit">Remove Fruit</button>
        </div>
      </div>
    </>
  );
}

export default MyComponent;
