import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Product from "./components/Products/Product";
import Pop from "./components/Home/pop";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/pop" component={Pop} />
      </Switch>
    </Router>
  );
}

export default App;
