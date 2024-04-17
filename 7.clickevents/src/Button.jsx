function Button() {
  let count = 0;
  // const handleClick = () =>
  // {
  //   console.log("Ouch");
  // }
  // const handleClick = (name) =>
  // {
  //   if(count<3)
  //   {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`);
  //   }
  //   else
  //   {
  //     console.log(`${name} stop clicking me`)
  //   }
  // }
  const handleClick = (e) => {
    e.target.textContent = "Jattttt";
  };
  const handleClick2 = (name) => {
    console.log(`name : ${name}`);
  };
  //we will have already call the function if we add the paranthesis after the function work around is wrapping it in arrow function
  // return <button onClick={(e) => handleClick(e)}>Click me</button>;
  return <button onDoubleClick={(e) => handleClick(e)}>Click me</button>;
}
export default Button;
