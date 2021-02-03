import React from "react";

import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";


const Footer = () => {
  return (
    <MDBFooter color="" className="font-small pt-4 mt-4 bg-light text-dark">
      <MDBContainer  className="text-center ">
        <MDBRow>
          <MDBCol>
            <h5 className="title text-center">Privacy Dashboard FOSS NSBM</h5>
          </MDBCol>

	<MDBCol className="text-right"> 
                    &copy; {new Date().getFullYear()} All Rights Reserved: <a href="https://fossnsbm.org/" className="text-dark"> FOSS NSBM</a>  
            </MDBCol> 
	
        </MDBRow> 
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;