import React, { Component } from "react";

import Card from "./Components/Card/Card";
import Nav from "./Components/NavBar/Nav";
import Content from "./Components/Content/Content";
import About from "./Components/pages/about";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Card />
        <About />
      </div>
    );
  }
}
