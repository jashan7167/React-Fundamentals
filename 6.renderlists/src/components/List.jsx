import PropTypes from "prop-types";
function List(props) {
  // let fruits = [
  //   { id: 1, name: "apple", calories: 95 },
  //   { id: 2, name: "orange", calories: 45 },
  //items={fruits} /   { id: 3, name: "banana", calories: 105 },
  //   { id: 4, name: "coconut", calories: 159 },
  //   { id: 5, name: "pineapple", calories: 37 },
  // ];
  // fruits.sort((a, b) => {
  //   return a.name.localeCompare(b.name);
  // }); alphabetically

  // fruits.sort((a, b) => {
  //   a.name.localeCompare(b.name);
  // }); //reverse alphabetically

  //   fruits.sort((a,b)=>
  // {
  //   return a.calories<b.calories; or return a.calories - b.calories
  // }) numerically

  // fruits.sort() this sorts the list lexicographically
  //we cannot have array of elements  without the key attribute thats why we need to pass the key so that react can keep track of elements

  //filter the array when the calories are greater than 50
  // let lowCalFruit = fruits.filter((fruit) => {
  //   return fruit.calories < 50;
  // });
  // let highCalFruit = fruits.filter((fruit) => {
  //   return fruit.calories > 50;
  // });

  // fruits = lowCalFruit; //now show the filtered array
  // fruits = highCalFruit;

  //using the props which makes the list component as resuablet
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}:<b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{props.category}</h3>
      <ul className="list-items">{listItems}</ul>;
    </>
  );
}
List.defaultProps = {
  category: "Category",
  items: [],
};
//PropTypes.shape method does the deep validation of the object for checking
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default List;
