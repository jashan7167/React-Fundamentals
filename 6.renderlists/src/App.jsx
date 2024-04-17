import { useState } from "react";
import "./App.css";
import List from "./components/List";
import props from "prop-types";
function App() {
  let fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];
  let vegetables = [
    { id: 6, name: "patatoes", calories: 110 },
    { id: 7, name: "calery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocolli", calories: 50 },
  ];
  return (
    <>
      {fruits.length > 0 ? (
        <List items={fruits} category="Fruits"></List>
      ) : null}
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables"></List>
      )}
    </>
  );
}

export default App;
