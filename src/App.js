import React from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import DogBreads from "./DogBreeds";
import Like from "./common/Like";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar asd={() => {}} />
      <Switch>
        <Route path="/counters">
          <main className="container">
            <Counters />
          </main>
        </Route>
        <Route path="/breeds">
          <DogBreads />
        </Route>
        <Route path="/" exact={true}>
          <DogBreads />
        </Route>
        <Redirect to="/" />
      </Switch>
      {/* <Like /> */}
    </BrowserRouter>
  );
}

export default App;
