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
    <div className="heroBackground">
      <h2>Home</h2>
    </div>
    <section className="flexDisplay">
      <div className="row">
        <h1>Heading 1</h1>
        <p className="paragraphCenter">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum leo metus, eu interdum lacus sodales et. Aliquam in metus a felis varius ullamcorper. In laoreet sapien vitae erat feugiat sagittis. Duis venenatis consequat scelerisque. Sed pretium, ipsum lacinia mattis consectetur, lorem lorem dictum est, eu facilisis ipsum lectus sed risus. Phasellus molestie rhoncus porta. Cras a auctor dolor. Maecenas mollis sit amet nunc eu vestibulum. Donec congue metus justo, sit amet bibendum justo gravida sollicitudin. Integer eget dapibus nibh. Proin vulputate maximus scelerisque.</p>
      </div>
    </section>
    <section className="flexDisplay">
      <div className="row halfRow">
        <img src="https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"></img>
      </div>
      <div className="row halfRow">
        <h2>Heading</h2>
      </div>
    </section>
  </div>
);

export default App;
