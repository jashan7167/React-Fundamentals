//components can have dedicated stylesheets like app.css
//here app component acts as the root component we will add other components to app component which ties them together
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
function App() {
  return (
    <>
      <Header />
      <Food/>
      <Footer />
    </>
  );
}

export default App;
