import React from "react";
import "./App.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
import DogBreeds from "./DogBreeds";
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
          <DogBreeds />
        </Route>
        <Route path="/" exact={true}>
          <DogBreeds />
        </Route>
        <Redirect to="/" />
      </Switch>
      {/* <Like /> */}
    </BrowserRouter>
  );
}

export default App;

////  <Route path="/counters" component={DogBreeds} />

/// <Redirect from="/breeds" to="/counters" component={Counters} />; // from to
