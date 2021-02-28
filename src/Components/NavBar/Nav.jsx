import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";

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
      <>
        <MDBNavbar className="bg-white" light expand="md">
          <MDBContainer>
            <Link to="/">
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
            </Link>
            <MDBNavbarToggler
              className="bg-light"
              onClick={this.toggleCollapse}
            />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink className="text-dark" to="/">
                    Dashboard
                  </MDBNavLink>
                </MDBNavItem>

                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav className="text-dark">
                        Services
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem><Link to="/blog">FOSS Blog</Link></MDBDropdownItem>
                      
                      <MDBDropdownItem>
                        <Link to="/forum">Foss Forum</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/mailserver">Mail Server</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/ketchup">KetchUp AddOn</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                        <Link to="/event404">Event 404</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem><Link to="/rsvp">RSVP App</Link></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
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
      </>
    );
  }
}

export default NavbarPage;
