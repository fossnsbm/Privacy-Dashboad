import React, { Component } from "react";
import axios from "axios";

import CardItem from "./CardItem";

import "./CardStyle.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardDetails: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "https://privacy-api.fossnsbm.org/check",
      timeout: 9000,
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          cardDetails: response.data,
          isLoading: true,
        });
        // console.log(response.data.statusData);
      })
      .catch((response) => {
        console.log(response);
      });
  }

  cardDetailsCommponent = () => {
    return this.state.cardDetails.map((detail) => {
      return (
        <CardItem
          key={detail.id}
          icon={detail.icon}
          title={detail.title}
          status={detail.status}
          downTime={detail.downTime}
          lastUpdate={detail.lastUpdate}
          path={detail.path}
        />
      );
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="container">
          <div className="row">{this.cardDetailsCommponent()}</div>
          {/* <h2>hello</h2> */}
        </div>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}