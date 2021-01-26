import React, { Component } from 'react';

import Card from './Components/Card/Card';
import Nav from './Components/NavBar/Nav';
import Content from './Components/Content/Content';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Card />
      </div>
    )
  }
}
