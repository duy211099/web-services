import React from "react";
// screens
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";
// ROUTE
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Lab1 />
        </Route>
        <Route path="/lab1">
          <Lab1 />
        </Route>
        <Route path="/lab2">
          <Lab2 />
        </Route>
        <Route path="/lab3">
          <Lab3 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
