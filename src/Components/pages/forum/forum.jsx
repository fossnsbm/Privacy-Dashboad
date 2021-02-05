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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nisi architecto quasi. Nobis non labore cumque eius necessitatibus
            eaque expedita amet, dolore tempora blanditiis vel debitis delectus
            aut, ratione quisquam
          </p>
          <p className="blogpara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente
            aperiam labore ipsum natus enim culpa, laborum repellendus quo?
            Quaerat, alias? Suscipit assumenda, illum id soluta quidem animi
            culpa distinctio!
          </p>
          <Chart />
        </MDBCol>

        <MDBCol className="lg-6">
          <MDBCard narrow>
            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3 CardHeader">
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
