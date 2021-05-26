import React from "react";
import "./Footer.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="" className="font-small pt-3 pb-3 mt-4 bg-light text-dark footer">
      <MDBContainer  className=" ">
        <MDBRow>
          <MDBCol className="social left">
            <a href="https://github.com/fossnsbm">
              <MDBIcon fab icon="github" className="fa-2x git icon" />
            </a>
            <a href="https://www.linkedin.com/company/fossnsbm">
              <MDBIcon
                fab
                icon="linkedin"
                className="fa-2x pl-3 pr-3 lin icon"
              />
            </a>
            <a href="https://www.facebook.com/foss.nsbm/">
              <MDBIcon
                fab
                icon="facebook-square"
                className="fa-2x pr-3 fac icon"
              />
            </a>
            <a href="https://twitter.com/fossnsbm">
              <MDBIcon
                fab
                icon="twitter-square"
                className="fa-2x pr-3 twit icon"
              />
            </a>
            <a href="https://www.instagram.com/fossnsbm/">
              <MDBIcon fab icon="instagram" className="fa-2x ins icon" />
            </a>
          </MDBCol>

          <MDBCol className="text-right">
            &copy; {new Date().getFullYear()} All Rights Reserved:{" "}
            <a href="https://fossnsbm.org/" className="text-dark">
              {" "}
              FOSS NSBM
            </a>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
