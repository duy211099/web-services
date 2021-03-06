import React from "react";
// screens
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab5 from "./screens/Lab5";
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
        <Route path="/lab5">
          <Lab5 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
