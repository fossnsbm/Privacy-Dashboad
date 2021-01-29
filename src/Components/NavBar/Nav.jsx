import React, { Component } from "react";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Foss from "./Assets/Logo/Foss.png";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Router>
        <MDBNavbar className="bg-white" dark expand="md">
          <MDBContainer>
            <MDBNavbarBrand>
              <img
                src={Foss}
                className="img-fluid"
                alt="logo"
                style={{
                  width: "45px",
                }}
              />
            </MDBNavbarBrand>
            <MDBNavbarToggler
              className="bg-light"
              onClick={this.toggleCollapse}
            />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink className="text-dark" to="/">
                    Dashboard
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="text-dark" to="#!">
                    Services
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="text-dark" to="/about">
                    About
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBContainer className="my-5"></MDBContainer>
      </Router>
    );
  }
}

export default NavbarPage;
