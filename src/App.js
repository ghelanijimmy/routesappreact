import React, { Component } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Category from "./Category";
import Products from "./Products";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar">
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />          
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}


//Home component
const Home = props => (
  <div>
    <h2>Home {console.log(props)}</h2>
  </div>
);

export default App;
