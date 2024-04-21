//onChange = event handler and use primarily with form elements
//ex input , text area , select , radio
// Triggers a function every time the value of input changes
import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping,setShipping] = useState("")
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const handleShippingChange = (event) =>
  {
    setShipping(event.target.value)
  }


  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity : {quantity}</p>

      <textarea
        name="comment"
        value={comment}
        id=""
        cols="30"
        rows="10"
        onChange={handleCommentChange}
        placeholder="delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>

      <select name="" id="" value={payment} onChange={handlePaymentChange}>
        <option value="Visa">Visa</option>
        <option value="Upi">Upi</option>
        <option value="Mastercard">Mastercard</option>
      </select>
      <p>Payment Method : {payment}</p>

      <label htmlFor="pickup">
        <input
          type="radio"
          name="pickup"
          value="Pickup"
          checked={shipping === "Pickup"}
          onChange={handleShippingChange}
        />
        Pickup
      </label>
      <br />
      <label htmlFor="delivery">
        <input
          type="radio"
          name="delivery"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Shipping Method : {shipping}</p>
    </div>
  );
}

export default MyComponent;
