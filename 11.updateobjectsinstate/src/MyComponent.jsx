import React, { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  function handleYearChange(event) {
    //what happened is that we set the object with only the object with year key
    // if we have an object with same keys/properties js doesnot allow to have object with the same keys hence the later one is used usually
    setCar((car) => ({ ...car, year: car.year + 1 }));
  }
  function handleMakeChange(event) {
    setCar((car) => ({ ...car, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar(car => ({...car,model:event.target.value}))
  }
  return (
    <>
      <div>
        <p>
          Your favourite car is : {car.year} {car.make} {car.model}
        </p>
      </div>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </>
  );
}

export default MyComponent;
