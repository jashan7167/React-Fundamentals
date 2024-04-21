import React, { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    //shows the old ones update afterwards
    console.log(cars);
  }
  function handleRemoveCar(index) {
    setCars((c) =>
      c.filter((element, i) => {
        i !== index;
      })
    );
  }
  function handleYearChange(event) {
    setCarYear(event.target.value);
  }
  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }
  return (
    <>
      <div>
        <h2>List of Car Objects</h2>
        <ul>
          {cars
            .filter((element, index) => {
              return element.year !== "2024";
            })
            .map((element, index) => {
              return (
                <li onClick={() => handleRemoveCar(index)} key={index}>
                  {element.year} {element.make} {element.date}
                </li>
              );
            })}
        </ul>
        <input
          type="number"
          value={carYear}
          onChange={handleYearChange}
          placeholder="Enter car year"
        />
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="Enter car make"
        />{" "}
        <br />
        <input
          type="text"
          value={carModel}
          onChange={handleModelChange}
          placeholder="Enter car model"
        />{" "}
        <br />
        {/* adding a car to the array of objects */}
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent;
