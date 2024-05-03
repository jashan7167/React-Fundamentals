import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

//now if we had to show the user to the component we need to pass the prop to B then it passes to C and then to the componentD which seems inefficent hence prop drilling is not used we use Usecontext

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Jashan");
  return (
    <div className="box">
      ComponentA
      <p>{`Hello ${user}`}</p>
     <UserContext.Provider value={user}>
      <ComponentB user={user}></ComponentB>
     </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
