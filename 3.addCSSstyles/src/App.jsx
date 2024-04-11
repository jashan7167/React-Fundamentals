//how to style react components with css

//(not including external framework or preprocessors(caas))

//1.External - global or small projects
//2.Modules - make a dedicated components folder with modules we dont have to worry about naming conflicts as it uses hashing algorithm to assign the names of the classes
//3.Inline - which tends to be good for minimal styling

import Button from "./Button/Button"

function App() {
  
return (<Button/>);
}

export default App
