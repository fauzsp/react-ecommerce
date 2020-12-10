import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/commons/header/header.component.jsx";
import HomePage from "./pages/homepage-component/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
