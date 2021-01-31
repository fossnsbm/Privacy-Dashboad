import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';


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
                    <MDBDropdownToggle nav>
                      <div className="d-none d-md-inline text-dark">
                          Services
                      </div>
                    </MDBDropdownToggle>
                      <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="#!">Foss Blog</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Foss Forum</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Mail Server</MDBDropdownItem>
                        <MDBDropdownItem href="#!">KetchUp AddOn</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Event 404</MDBDropdownItem>
                        <MDBDropdownItem href="#!">RSVP App</MDBDropdownItem>
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
