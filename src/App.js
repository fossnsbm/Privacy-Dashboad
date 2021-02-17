import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import './App.css';
import Nav from "./Components/NavBar/Nav";
import Footer from "./Components/Footer/Footer";
import routes, { RoutWithSubRoutes } from './routes'

export default function App() {
  return (
    <div>
        <div className='app'>
        <Router>
          <Nav />
          <Switch>
              {routes.map((route, i) => (
                <RoutWithSubRoutes key={i} {...route} />
              )
              )}
          </Switch>
        </Router>
        </div>
        <Footer/>
      </div>
  )
}

