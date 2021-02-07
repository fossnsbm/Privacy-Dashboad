import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Card from "./Components/Card/Card";
import Nav from "./Components/NavBar/Nav";
import Content from "./Components/Content/Content";
import About from "./Components/pages/about/about.jsx";
import Blog from "./Components/pages/blog/Blog.jsx";
import Footer from "./Components/Footer/Footer";

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='app'>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>

            <Route path="/">
              <Content />
              <Card />
            </Route>
          </Switch>
        </BrowserRouter>
        </div>
        <Footer/>
      </div>
    );
  }
}
