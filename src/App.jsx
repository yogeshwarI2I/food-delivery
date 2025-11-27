import React from "react";
import Home from "./pages/Home";
import {PizzaProvider} from "./context/pizza/PizzaContext";
function App() {
  return (
    <div>
      <PizzaProvider>
        <Home />
      </PizzaProvider>
    </div>
  );
}

export default App;
