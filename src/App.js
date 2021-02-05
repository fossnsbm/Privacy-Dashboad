import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Card from "./Components/Card/Card";
import Nav from "./Components/NavBar/Nav";
import Content from "./Components/Content/Content";
import About from "./Components/pages/about/about.jsx";
import Blog from "./Components/pages/blog/Blog.jsx";
import Footer from "./Components/Footer/Footer";
import MailServer from "./Components/pages/mailServer/mailServer";
import Forum from "./Components/pages/forum/forum";
import KetchUp from "./Components/pages/ketchUp/ketchUp";
import Event404 from "./Components/pages/event404/event404";
import RSVP from "./Components/pages/RSVP/RSVPapp";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>

            <Route path="/forum">
              <Forum />
            </Route>

            <Route path="/mailserver">
              <MailServer />
            </Route>

            <Route path="/ketchup">
              <KetchUp />
            </Route>

            <Route path="/event404">
              <Event404 />
            </Route>

            <Route path="/rsvp">
              <RSVP />
            </Route>

            <Route path="/">
              <Content />
              <Card />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
