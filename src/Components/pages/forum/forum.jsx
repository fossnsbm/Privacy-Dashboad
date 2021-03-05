import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import "./forumStyle.css";
import Chart from "./forumChart";

const Forum = (props) => {
  const data_panel = {
    columns: [
      {
        label: "Status",
        field: "status",
        sort: "asc",
      },
      {
        label: "Duration",
        field: "duration",
        sort: "asc",
      },
      {
        label: "Time",
        field: "time",
        sort: "asc",
      },
    ],
    rows: [
      {
        status: "Active",
        duration: "1 hour",
        time: "19:52",
      },
      {
        status: "Inactive",
        duration: "2 hours",
        time: "19:52",
      },

      {
        status: "Active",
        duration: "1 hour",
        time: "19:52",
      },
      {
        status: "Inactive",
        duration: "2 hours",
        time: "19:52",
      },

      {
        status: "Active",
        duration: "1 hour",
        time: "19:52",
      },
      {
        status: "Inactive",
        duration: "2 hours",
        time: "19:52",
      },

      {
        status: "Active",
        duration: "1 hour",
        time: "19:52",
      },
    ],
  };

  return (
    <MDBContainer className="Contain">
      <MDBRow>
        <MDBCol className="lg-6">
          <h2>FOSS Forum</h2>
          <p className="blogpara">
            FOSS NSBM Forum is a platform where students can post 
            any technology related issue.
            There's a community of open - source enthusiasts 
            who are willing to interactively
            discuss these issues with you and find solutions for them.
            Our wish is for the FOSS NSBM Forum to become a hub for 
            learning new things and sharing of knowledge.
          </p>

          <p className="blogpara">
            You can also find the meeting minutes and other documentations 
            related to the FOSS Community of NSBM here.
          </p>
          
          <Chart />
        </MDBCol>

        <MDBCol className="lg-6">
          <MDBCard narrow>
            <MDBCardHeader className="view view-cascade gradient-card-header purple-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 CardHeader">
              <a href="#" className="white-text mx-3">
                FOSS Forum
              </a>
            </MDBCardHeader>

            <MDBCardBody cascade>
              <MDBTable btn fixed>
                <MDBTableHead columns={data_panel.columns} />
                <MDBTableBody rows={data_panel.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Forum;
