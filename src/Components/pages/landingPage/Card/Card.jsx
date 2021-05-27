import React, { Component } from "react";
import axios from "axios";
import { PropagateLoader } from "react-spinners";

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
      url: "https://webstatuscheck.herokuapp.com/check",
    })
      .then((response) => {
        console.log(response.data.statusData);
        this.setState({
          cardDetails: response.data.statusData,
          isLoading: true,
        });
        console.log(response.data.statusData);
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
      return (
        <div>
          <div className="loader">
            <PropagateLoader loading size={40} color="#4A90E2"/>
          </div>
          <h4 className="loadertext">...Loading...</h4>
        </div>
      );
    }
  }
}
